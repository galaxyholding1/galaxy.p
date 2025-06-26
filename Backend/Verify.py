from flask import Flask, request, jsonify
from deepface import DeepFace
import os

app = Flask(_name_)

@app.route('/verify', methods=['POST'])
def verify():
    try:
        # Guardar archivos temporales
        doc_file = request.files['doc_face']
        selfie_file = request.files['selfie']
        video_file = request.files.get('video')  # opcional

        doc_file.save("doc.jpg")
        selfie_file.save("selfie.jpg")

        # Comparación facial
        result = DeepFace.verify("doc.jpg", "selfie.jpg", model_name="Facenet512")

        # Opcional: aquí podrías procesar video_file (anti-spoofing)

        # Eliminar archivos temporales
        os.remove("doc.jpg")
        os.remove("selfie.jpg")
        if video_file:
            video_file.save("video.mp4")
            os.remove("video.mp4")

        return jsonify({
            "verified": result["verified"],
            "distance": result["distance"],
            "threshold": result["threshold"],
            "model": result["model"],
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if _name_ == "_main_":
    app.run(host="0.0.0.0", port=5000)
