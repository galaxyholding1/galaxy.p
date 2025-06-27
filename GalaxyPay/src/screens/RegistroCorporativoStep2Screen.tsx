import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

const RegistroCorporativoStep2Screen = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [documento, setDocumento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
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
                index === 1 && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* Logo y subtítulo */}
        <Text style={styles.logo}>galaxypay</Text>
        <Text style={styles.subTitle}>datos del representante legal</Text>

        {/* Campos */}
        <TextInput
          placeholder="Nombre"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          placeholder="Apellidos"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={apellidos}
          onChangeText={setApellidos}
        />

        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Documento de identidad</Text>
          <Ionicons name="chevron-down-outline" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.input} onPress={() => setShowCalendar(true)}>
          <Text style={styles.inputText}>
            {fechaNacimiento || 'Fecha de nacimiento'}
          </Text>
          <Ionicons name="calendar-outline" size={20} color="#ccc" />
        </TouchableOpacity>

        <TextInput
          placeholder="Dirección"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={direccion}
          onChangeText={setDireccion}
        />

        {/* Botón */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>continuar</Text>
        </TouchableOpacity>

        {/* Logo */}
        <Image
          source={require('../assets/icon-galaxy.png')}
          style={styles.logoBottom}
        />

        {/* Calendario Modal */}
        <Modal visible={showCalendar} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.calendarContainer}>
              <Calendar
                onDayPress={(day) => {
                  setFechaNacimiento(day.dateString);
                  setShowCalendar(false);
                }}
                theme={{
                  backgroundColor: '#2a2a2a',
                  calendarBackground: '#2a2a2a',
                  textSectionTitleColor: '#fff',
                  dayTextColor: '#fff',
                  todayTextColor: '#e7458f',
                  selectedDayBackgroundColor: '#e7458f',
                  selectedDayTextColor: '#fff',
                  monthTextColor: '#fff',
                  arrowColor: '#fff',
                  textDisabledColor: '#555',
                }}
                style={{ borderRadius: 12 }}
              />
              <TouchableOpacity onPress={() => setShowCalendar(false)} style={{ marginTop: 10 }}>
                <Text style={{ color: '#e7458f', textAlign: 'center' }}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistroCorporativoStep2Screen;

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
  button: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 12,
    width: '90%',
  },
});
