import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Llamado a la seleccion del avatar como opcion para la imagen del usuario
const AddAvatarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Añade el avatar a tu perfil</Text>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.avatar} />
      <Text style={styles.description}>
        Muestra tu personalidad con tu avatar en una pose y un fondo.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Seleccionar avatar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.notNowText}>Ahora no</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton}>
        <Ionicons name="save-outline" size={20} color="#fff" />
        <Text style={styles.buttonTextSm}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos de la visual
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c1e', alignItems: 'center', padding: 20 },
  title: { fontSize: 16, color: '#f54690', marginVertical: 10 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginVertical: 20 },
  description: { color: '#ccc', textAlign: 'center', marginBottom: 20 },
  button: {
    backgroundColor: '#f54690',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonText: { color: '#fff' },
  notNowText: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  saveButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20, 
    gap: 10,
    backgroundColor: '#626262'
  },
  buttonTextSm: {
    color: '#fff',
    fontSize: 14,
  }
});

export default AddAvatarScreen;
