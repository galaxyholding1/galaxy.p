import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Picker,
  CheckBox,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegistroCorporativoStep1Screen = () => {
  const [selectedPais, setSelectedPais] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [terminosAceptados, setTerminosAceptados] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Botón de regreso */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Barra de progreso */}
        <View style={styles.progressBarContainer}>
          {Array.from({ length: 6 }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index === 0 && styles.activeDot, // Primera pantalla activa
              ]}
            />
          ))}
        </View>

        {/* Logo */}
        <Image
          source={require('../assets/logo-galaxypay.png')}
          style={styles.logo}
        />

        {/* Texto guía */}
        <Text style={styles.mainText}>
          Te acompañamos en el proceso de registro de forma sencilla y rápida
        </Text>
        <Text style={styles.subText}>
          Indícanos tu país y correo electrónico de la cuenta de la empresa
        </Text>

        {/* Inputs */}
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>
            {selectedPais || 'País de constitución'}
          </Text>
          <Ionicons name="chevron-down-outline" size={20} color="#ccc" />
        </TouchableOpacity>

        <TextInput
          placeholder="e-mail"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>
            {telefono || 'Teléfono'}
          </Text>
          <Ionicons name="chevron-down-outline" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Aceptar términos */}
        <View style={styles.termsContainer}>
          <CheckBox
            value={terminosAceptados}
            onValueChange={setTerminosAceptados}
            tintColors={{ true: '#e7458f', false: '#ccc' }}
          />
          <Text style={styles.termsText}>
            acepto términos legales y políticas de privacidad
          </Text>
        </View>

        {/* Botón continuar */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            !terminosAceptados && { backgroundColor: '#999' },
          ]}
          disabled={!terminosAceptados}
        >
          <Text style={styles.continueText}>continuar</Text>
        </TouchableOpacity>

        {/* Logo flotante */}
        <Image
          source={require('../assets/icon-galaxy.png')}
          style={styles.logoBottom}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistroCorporativoStep1Screen;

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
  progressBarContainer: {
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
    width: 140,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  mainText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    marginBottom: 6,
  },
  subText: {
    textAlign: 'center',
    color: '#f0813a',
    fontSize: 13,
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%',
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    color: '#ccc',
    fontSize: 14,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  termsText: {
    color: '#ccc',
    fontSize: 13,
    marginLeft: 8,
    flex: 1,
    flexWrap: 'wrap',
  },
  continueButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  continueText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logoBottom: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginTop: 20,
  },
});
