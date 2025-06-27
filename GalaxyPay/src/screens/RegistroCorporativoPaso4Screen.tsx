import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegistroCorporativoPaso5Screen = ({ navigation }) => {
  const [nombreSocio, setNombreSocio] = useState('');
  const [correoSocio, setCorreoSocio] = useState('');
  const [usuarioGalaxy, setUsuarioGalaxy] = useState('');

  const handleGuardar = () => {
    // Aquí puedes guardar localmente o navegar con datos
    navigation.navigate('RegistroCorporativoPaso6');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Botón de retroceso */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Barra de progreso */}
        <View style={styles.progressBar}>
          {[...Array(6)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index === 4 && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* Logo y título */}
        <Text style={styles.logo}>galaxypay</Text>
        <Text style={styles.subTitle}>Datos de los socios principales</Text>

        {/* Sub encabezado */}
        <Text style={styles.sectionTitle}>👤 Socios principales</Text>

        {/* Inputs */}
        <TextInput
          placeholder="Nombre completo"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={nombreSocio}
          onChangeText={setNombreSocio}
        />

        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={correoSocio}
          onChangeText={setCorreoSocio}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="usuario #galaxy"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={usuarioGalaxy}
          onChangeText={setUsuarioGalaxy}
        />

        {/* Botón guardar */}
        <TouchableOpacity style={styles.saveButton}>
          <Ionicons name="save-outline" size={18} color="#fff" />
          <Text style={styles.saveText}>guardar</Text>
        </TouchableOpacity>

        {/* Botón continuar */}
        <TouchableOpacity style={styles.button} onPress={handleGuardar}>
          <Text style={styles.buttonText}>continuar</Text>
        </TouchableOpacity>

        {/* Logo Galaxy */}
        <Image
          source={require('../assets/icon-galaxy.png')}
          style={styles.logoBottom}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistroCorporativoPaso5Screen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  progressBar: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  progressDot: {
    width: 30,
    height: 5,
    backgroundColor: '#444',
    borderRadius: 4,
    marginRight: 5,
  },
  activeDot: {
    backgroundColor: '#e7458f',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  subTitle: {
    color: '#f0813a',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#f0813a',
    alignSelf: 'flex-start',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%',
    marginBottom: 14,
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#6b4aff',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logoBottom: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginTop: 10,
  },
});
