import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegistroCorporativoStep3Screen = () => {
  const [razonSocial, setRazonSocial] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [formaJuridica, setFormaJuridica] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const opciones = [
    'Empresario individual o autónomo',
    'Sociedad limitada',
    'Sociedad anónima',
    'Sociedad limitada nueva empresa',
    'Sociedad colectiva',
    'Sociedad civil privada',
    'Sociedad Europea',
    'Sociedad comanditaria simple',
    'Sociedad limitada unipersonal',
    'La forma jurídica de mi empresa no aparece',
  ];

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
                index === 2 && styles.activeDot, // Paso actual
              ]}
            />
          ))}
        </View>

        {/* Logo y subtítulo */}
        <Text style={styles.logo}>galaxypay</Text>
        <Text style={styles.subTitle}>Información de la empresa</Text>

        {/* Campos */}
        <TextInput
          placeholder="Razón social"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={razonSocial}
          onChangeText={setRazonSocial}
        />

        <TextInput
          placeholder="Domicilio fiscal"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={domicilio}
          onChangeText={setDomicilio}
        />

        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowMenu(true)}
        >
          <Text style={styles.inputText}>
            {formaJuridica || 'Selecciona la forma jurídica'}
          </Text>
          <Ionicons name="chevron-down-outline" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Modal con opciones */}
        <Modal
          visible={showMenu}
          transparent
          animationType="fade"
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FlatList
                data={opciones}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.optionItem}
                    onPress={() => {
                      setFormaJuridica(item);
                      setShowMenu(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        item === 'Sociedad civil privada' && { color: '#e7458f' },
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>

        {/* Subtítulo */}
        <Text style={styles.subSection}>Socios principales</Text>

        {/* Botones */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>añadir socios principales</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.manageButton}>
          <Text style={styles.manageButtonText}>gestionar empleados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.verificationButton}>
          <Text style={styles.verificationText}>acelerar controles de verificación</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>continuar</Text>
        </TouchableOpacity>

        {/* Logo inferior */}
        <Image
          source={require('../assets/icon-galaxy.png')}
          style={styles.logoBottom}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistroCorporativoStep3Screen;

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
  subSection: {
    alignSelf: 'flex-start',
    color: '#f0813a',
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#4c3b90',
    borderRadius: 12,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
  manageButton: {
    backgroundColor: '#6b4aff',
    borderRadius: 12,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  manageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
  verificationButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  verificationText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
  button: {
    backgroundColor: '#f0813a',
    borderRadius: 12,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
  logoBottom: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 20,
    width: '85%',
    maxHeight: '60%',
  },
  optionItem: {
    paddingVertical: 12,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  optionText: {
    color: '#fff',
    fontSize: 14,
  },
});
