from flask import Flask, request, jsonify
from deepface import DeepFace
import cv2
import os
import tempfile

app = Flask(_name_)

def extract_frames(video_path, max_frames=3, interval=10):
    cap = cv2.VideoCapture(video_path)
    frames = []
    count = 0
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    while len(frames) < max_frames and cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        if count % interval == 0:
            temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".jpg")
            cv2.imwrite(temp_file.name, frame)
            frames.append(temp_file.name)
        count += 1
    cap.release()
    return frames

@app.route('/verify', methods=['POST'])
def verify():
    try:
        # Guardar archivos
        doc_file = request.files['doc_face']
        selfie_file = request.files['selfie']
        video_file = request.files.get('video')

        doc_file.save("doc.jpg")
        selfie_file.save("selfie.jpg")

        # Comparación 1: Documento vs Selfie
        doc_vs_selfie = DeepFace.verify("doc.jpg", "selfie.jpg", model_name="Facenet512")

        # Comparación 2: Video vs Selfie (dinámica)
        video_verified = False
        frame_results = []
        if video_file:
            video_file.save("video.mp4")
            frames = extract_frames("video.mp4", max_frames=5, interval=10)
            for frame_path in frames:
                try:
                    result = DeepFace.verify("selfie.jpg", frame_path, model_name="Facenet512")
                    frame_results.append({
                        "frame": os.path.basename(frame_path),
                        "verified": result["verified"],
                        "distance": result["distance"]
                    })
                    if result["verified"]:
                        video_verified = True
                except Exception as e:
                    frame_results.append({
                        "frame": os.path.basename(frame_path),
                        "error": str(e)
                    })
                finally:
                    os.remove(frame_path)
            os.remove("video.mp4")

        # Eliminar imágenes base
        os.remove("doc.jpg")
        os.remove("selfie.jpg")

        return jsonify({
            "doc_vs_selfie": {
                "verified": doc_vs_selfie["verified"],
                "distance": doc_vs_selfie["distance"],
                "threshold": doc_vs_selfie["threshold"],
                "model": doc_vs_selfie["model"]
            },
            "video_vs_selfie": {
                "verified": video_verified,
                "frame_analysis": frame_results
            }
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if _name_ == "_main_":
    app.run(host="0.0.0.0", port=5000)
