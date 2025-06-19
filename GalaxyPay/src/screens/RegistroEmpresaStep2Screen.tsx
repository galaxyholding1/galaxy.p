import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

export default function RegistroEmpresaStep2Screen() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [documento, setDocumento] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateSelect = (day: any) => {
    setFechaNacimiento(day.dateString);
    setShowCalendar(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.stepBar}>
          <View style={[styles.step, styles.activeStep]} />
          <View style={styles.step} />
          <View style={styles.step} />
        </View>
      </View>

      {/* Logo */}
      <Text style={styles.logo}>galaxypay</Text>
      <Text style={styles.subtitle}>datos del representante legal</Text>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#ccc"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        placeholderTextColor="#ccc"
        value={apellidos}
        onChangeText={setApellidos}
      />

      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>
          {documento || 'Documento de identidad'}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputIcon} onPress={() => setShowCalendar(true)}>
        <Text style={styles.inputIconText}>
          {fechaNacimiento || 'Fecha de nacimiento'}
        </Text>
        <Ionicons name="calendar-outline" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Botón continuar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>

      {/* Modal calendario */}
      <Modal visible={showCalendar} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.calendarModal}>
            <Calendar
              onDayPress={handleDateSelect}
              markedDates={{
                [fechaNacimiento]: {
                  selected: true,
                  selectedColor: '#e7458f',
                },
              }}
              theme={{
                calendarBackground: '#2a2a2a',
                dayTextColor: '#fff',
                monthTextColor: '#fff',
                textSectionTitleColor: '#aaa',
                todayTextColor: '#e7458f',
                selectedDayTextColor: '#fff',
                arrowColor: '#fff',
              }}
            />
            <TouchableOpacity onPress={() => setShowCalendar(false)}>
              <Text style={styles.closeText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1e',
    padding: 20,
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  stepBar: {
    flexDirection: 'row',
    marginLeft: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  step: {
    width: '30%',
    height: 4,
    backgroundColor: '#444',
    borderRadius: 2,
  },
  activeStep: {
    backgroundColor: '#e7458f',
  },
  logo: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#f0813a',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#2a2a2a',
    padding: 14,
    borderRadius: 8,
    color: '#fff',
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: '#2a2a2a',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownText: {
    color: '#ccc',
  },
  inputIcon: {
    backgroundColor: '#2a2a2a',
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputIconText: {
    color: '#ccc',
  },
  button: {
    backgroundColor: '#e7458f',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarModal: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 20,
    width: '90%',
  },
  closeText: {
    color: '#e7458f',
    textAlign: 'center',
    marginTop: 10,
  },
});
