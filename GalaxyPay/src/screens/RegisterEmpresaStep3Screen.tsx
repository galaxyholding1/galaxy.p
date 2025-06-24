import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegisterEmpresaStep3Screen = () => {
  const [selectedSocios, setSelectedSocios] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [empleados, setEmpleados] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Indicador de progreso */}
        <View style={styles.progressBar}>
          <View style={[styles.progressDot, styles.activeDot]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>

        {/* Logo y título */}
        <Text style={styles.logo}>galaxypay</Text>
        <Text style={styles.subTitle}>documentos legales de la empresa</Text>

        {/* Formulario */}
        <View style={styles.inputGroup}>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Estatutos</Text>
            <Ionicons name="lock-closed-outline" size={18} color="#aaa" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Certificado de registro</Text>
            <Ionicons name="lock-closed-outline" size={18} color="#aaa" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Datos de socios principales</Text>
            <Ionicons name="chevron-down-outline" size={18} color="#aaa" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Fecha de nacimiento</Text>
            <Ionicons name="calendar-outline" size={18} color="#aaa" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Cantidad de empleados</Text>
            <Ionicons name="calendar-outline" size={18} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Botón continuar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>continuar</Text>
        </TouchableOpacity>

        {/* Logo final */}
        <Image
          source={require('../assets/icon-galaxy.png')}
          style={styles.logoBottom}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterEmpresaStep3Screen;

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
    width: 40,
    height: 5,
    backgroundColor: '#444',
    borderRadius: 3,
    marginRight: 8,
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
  inputGroup: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    color: '#ccc',
  },
  button: {
    backgroundColor: '#e7458f',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoBottom: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
