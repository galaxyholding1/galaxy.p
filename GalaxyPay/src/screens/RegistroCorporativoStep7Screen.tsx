import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { MaterialIcons } from '@expo/vector-icons';

const RegistroCorporativoStep7Screen: React.FC = () => {
  const [estatutos, setEstatutos] = useState<DocumentPicker.DocumentPickerAsset | null>(null);
  const [certificado, setCertificado] = useState<DocumentPicker.DocumentPickerAsset | null>(null);
  const [escrituras, setEscrituras] = useState<DocumentPicker.DocumentPickerAsset | null>(null);

  const pickFile = async (setter: (file: DocumentPicker.DocumentPickerAsset | null) => void) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/jpeg', 'image/png'],
      });
      if (result.assets && result.assets.length > 0) {
        setter(result.assets[0]);
      }
    } catch (error) {
      console.error('Error al seleccionar archivo:', error);
    }
  };

  const allFilesUploaded = estatutos && certificado && escrituras;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>documentos legales de la empresa</Text>

      {/* Estatutos */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.titleBox} onPress={() => pickFile(setEstatutos)}>
          <Text style={styles.titleText}>Estatutos</Text>
          <MaterialIcons name="lock" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadBox} onPress={() => pickFile(setEstatutos)}>
          <Text style={styles.uploadText}>Subir archivo</Text>
          <Text style={styles.fileTypeText}>JPG, PNG o PDF</Text>
          <MaterialIcons name="attach-file" size={20} color="#fff" />
        </TouchableOpacity>
        {estatutos && (
          <View style={styles.filePreview}>
            <MaterialIcons name="insert-drive-file" size={20} color="#fff" />
            <Text style={styles.fileName} numberOfLines={1}>{estatutos.name}</Text>
            <TouchableOpacity onPress={() => setEstatutos(null)}>
              <MaterialIcons name="delete" size={20} color="#f08139" />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>guardar</Text>
        </TouchableOpacity>
      </View>

      {/* Certificado de registro */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.titleBox} onPress={() => pickFile(setCertificado)}>
          <Text style={styles.titleText}>Certificado de registro</Text>
          <MaterialIcons name="lock" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadBox} onPress={() => pickFile(setCertificado)}>
          <Text style={styles.uploadText}>Subir archivo</Text>
          <Text style={styles.fileTypeText}>JPG, PNG o PDF</Text>
          <MaterialIcons name="attach-file" size={20} color="#fff" />
        </TouchableOpacity>
        {certificado && (
          <View style={styles.filePreview}>
            <MaterialIcons name="insert-drive-file" size={20} color="#fff" />
            <Text style={styles.fileName} numberOfLines={1}>{certificado.name}</Text>
            <TouchableOpacity onPress={() => setCertificado(null)}>
              <MaterialIcons name="delete" size={20} color="#f08139" />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>guardar</Text>
        </TouchableOpacity>
      </View>

      {/* Escrituras de constitución */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.titleBox} onPress={() => pickFile(setEscrituras)}>
          <Text style={styles.titleText}>Escrituras de constitución</Text>
          <MaterialIcons name="lock" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadBox} onPress={() => pickFile(setEscrituras)}>
          <Text style={styles.uploadText}>Subir archivo</Text>
          <Text style={styles.fileTypeText}>JPG, PNG o PDF</Text>
          <MaterialIcons name="attach-file" size={20} color="#fff" />
        </TouchableOpacity>
        {escrituras && (
          <View style={styles.filePreview}>
            <MaterialIcons name="insert-drive-file" size={20} color="#fff" />
            <Text style={styles.fileName} numberOfLines={1}>{escrituras.name}</Text>
            <TouchableOpacity onPress={() => setEscrituras(null)}>
              <MaterialIcons name="delete" size={20} color="#f08139" />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>guardar</Text>
        </TouchableOpacity>
      </View>

      {/* Botón continuar */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: allFilesUploaded ? '#e54690' : '#4c3b90' }]}
        disabled={!allFilesUploaded}
      >
        <Text style={styles.continueButtonText}>continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegistroCorporativoStep7Screen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#000',
  },
  headerText: {
    color: '#f08139',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
  },
  uploadBox: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadText: {
    color: '#e54690',
    fontSize: 14,
  },
  fileTypeText: {
    color: '#fff',
    fontSize: 12,
  },
  filePreview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 8,
  },
  fileName: {
    color: '#fff',
    flex: 1,
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: '#4c3b90',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  continueButton: {
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

