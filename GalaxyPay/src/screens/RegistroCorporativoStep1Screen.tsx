import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  CheckBox,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegistroCorporativoStep1Screen = () => {
  const [selectedPais, setSelectedPais] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [terminosAceptados, setTerminosAceptados] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [codigoVerificacion, setCodigoVerificacion] = useState('');

  const handleContinuar = () => {
    if (terminosAceptados) {
      setShowModal(true); // Simula la solicitud de código SMS
    }
  };

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
                index === 0 && styles.activeDot,
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
          onPress={handleContinuar}
        >
          <Text style={styles.continueText}>continuar</Text>
        </TouchableOpacity>

        {/* Logo flotante */}
        <Image
          source={require('../assets/icon-galaxy.png')}
          style={styles.logoBottom}
        />

        {/* Modal de verificación */}
        <Modal
          visible={showModal}
          transparent
          animationType="fade"
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Verificación número de teléfono</Text>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <Ionicons name="close" size={20} color="#fff" />
                </TouchableOpacity>
              </View>

              <TextInput
                placeholder="Código"
                placeholderTextColor="#ccc"
                style={styles.modalInput}
                value={codigoVerificacion}
                onChangeText={setCodigoVerificacion}
              />

              <TouchableOpacity style={styles.activateButton}>
                <Text style={styles.activateText}>Activar</Text>
              </TouchableOpacity>

              <Text style={styles.modalMessage}>
                Ingresa el código de verificación que se ha 
                enviado al número (+60) 336363626
              </Text>
              <Text style={styles.modalNote}>
                El código expira en 10 minutos. Utilízalo o solicita uno nuevo.
              </Text>

              <TouchableOpacity style={styles.resendButton}>
                <Text style={styles.resendText}>solicitar nuevo código</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistroCorporativoStep1Screen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1c1c1e' },
  container: { padding: 20, alignItems: 'center' },
  backButton: { alignSelf: 'flex-start', marginBottom: 10 },
  progressBarContainer: { flexDirection: 'row', marginBottom: 30 },
  progressDot: {
    width: 30,
    height: 5,
    backgroundColor: '#444',
    borderRadius: 4,
    marginRight: 5,
  },
  activeDot: { backgroundColor: '#e7458f' },
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
  inputText: { color: '#ccc', fontSize: 14 },
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  modalInput: {
    backgroundColor: '#1c1c1e',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  activateButton: {
    backgroundColor: '#f0813a',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  activateText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalMessage: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 6,
  },
  modalNote: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 14,
  },
  resendButton: {
    backgroundColor: '#e7458f',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  resendText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
