import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RegisterCorporateStartScreen() {
  const [selectedAccount, setSelectedAccount] = useState<'personal' | 'empresa'>('personal');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo y presentación */}
        <Text style={styles.logoText}>galaxy<span style={{ fontWeight: 'bold' }}>pay</span></Text>
        <Text style={styles.introText}>
          Te acompañamos en el proceso de registro de forma sencilla y rápida
        </Text>
        <Text style={styles.subText}>Indícanos tu país y correo electrónico</Text>

        {/* Tipo de cuenta */}
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setSelectedAccount('personal')}>
            <Icon
              name={selectedAccount === 'personal' ? 'radio-button-on' : 'radio-button-off'}
              size={18}
              color="#fff"
            />
            <Text style={styles.radioText}>Registro cuenta personal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setSelectedAccount('empresa')}>
            <Icon
              name={selectedAccount === 'empresa' ? 'radio-button-on' : 'radio-button-off'}
              size={18}
              color="#e7458f"
            />
            <Text style={[styles.radioText, { color: '#e7458f' }]}>Registro cuenta de empresa</Text>
          </TouchableOpacity>
        </View>

        {/* Formulario */}
        <View style={styles.formGroup}>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(itemValue) => setSelectedCountry(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Selecciona un país" value="" />
            <Picker.Item label="Colombia" value="col" />
            <Picker.Item label="México" value="mex" />
            <Picker.Item label="Perú" value="pe" />
          </Picker>

          <TextInput
            placeholder="e-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <TextInput
            placeholder="Teléfono"
            placeholderTextColor="#999"
            value={telefono}
            onChangeText={setTelefono}
            keyboardType="phone-pad"
            style={styles.input}
          />

          <TextInput
            placeholder="Reconocimiento facial"
            placeholderTextColor="#999"
            editable={false}
            style={styles.input}
          />
        </View>

        {/* Aceptar términos */}
        <View style={styles.termsRow}>
          <Switch
            value={termsAccepted}
            onValueChange={setTermsAccepted}
            thumbColor={termsAccepted ? '#e7458f' : '#ccc'}
          />
          <Text style={styles.termsText}>
            Acepto términos legales y políticas de privacidad
          </Text>
        </View>

        {/* Botón continuar */}
        <TouchableOpacity
          style={[styles.continueButton, !termsAccepted && { backgroundColor: '#555' }]}
          disabled={!termsAccepted}>
          <Text style={styles.continueText}>continuar</Text>
        </TouchableOpacity>

        {/* Asistencia */}
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>¿Necesitas ayuda?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 8,
  },
  subText: {
    fontSize: 14,
    color: '#f0813a',
    marginBottom: 20,
  },
  radioGroup: {
    width: '100%',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioText: {
    color: '#fff',
    marginLeft: 10,
  },
  formGroup: {
    width: '100%',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  picker: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
    marginBottom: 12,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  termsText: {
    color: '#ccc',
    marginLeft: 10,
  },
  continueButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    width: '100%',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  helpButton: {
    marginTop: 20,
  },
  helpText: {
    color: '#00e89a',
    textAlign: 'center',
  },
});
