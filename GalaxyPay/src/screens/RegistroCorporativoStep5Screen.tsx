import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const socios = [
  { nombre: 'Jesús Muniesa Pérez', cargo: 'Administrador', iniciales: 'JM', color: '#aa90e3' },
  { nombre: 'Andrea Martinez', cargo: 'CEO', iniciales: 'AM', color: '#f54690' },
];

const RegistroCorporativoStep5Screen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Botón de retroceso */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Progreso */}
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

        {/* Encabezado */}
        <Image
          source={require('../assets/logo-galaxypay.png')}
          style={styles.logo}
        />
        <Text style={styles.sectionTitle}>Datos de los socios principales</Text>
        <Text style={styles.subSection}>👤 Socios principales</Text>

        {/* Lista de socios */}
        {socios.map((socio, index) => (
          <View key={index} style={styles.socioItem}>
            <View style={[styles.inicialesCircle, { backgroundColor: socio.color }]}>
              <Text style={styles.inicialesText}>{socio.iniciales}</Text>
            </View>
            <View>
              <Text style={styles.socioNombre}>{socio.nombre}</Text>
              <Text style={styles.socioCargo}>{socio.cargo}</Text>
            </View>
          </View>
        ))}

        {/* Botón agregar */}
        <TouchableOpacity style={styles.agregarButton}>
          <Ionicons name="add" size={16} color="#fff" />
          <Text style={styles.agregarText}>agregar</Text>
        </TouchableOpacity>

        {/* Botón continuar */}
        <TouchableOpacity style={styles.continueButton}>
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

export default RegistroCorporativoStep5Screen;

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
