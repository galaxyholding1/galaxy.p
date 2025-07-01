import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegistroCorporativoStep6Screen = () => {
  const [empresa, setEmpresa] = useState('');
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState('');
  const empresasFiltradas = ['GALAXY HOLDINS SAS', 'Galaxia enterprise', 'Galaxy Producciones SA'];

  const handleEmpresaSeleccionada = (nombre: string) => {
    setEmpresa(nombre);
    setEmpresaSeleccionada(nombre);
    setMostrarResultados(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Botón de regreso */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Barra de progreso */}
        <View style={styles.progressBar}>
          {[...Array(6)].map((_, index) => (
            <View
              key={index}
              style={[styles.progressDot, index === 5 && styles.activeDot]}
            />
          ))}
        </View>

        {/* Logo y subtítulo */}
        <Image source={require('../assets/logo-galaxypay.png')} style={styles.logo} />
        <Text style={styles.subTitle}>Háblanos de tu empresa</Text>

        {/* Controles de verificación */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Controles de verificación</Text>
            <Ionicons name="clipboard-outline" size={18} color="#fff" />
          </View>
          <Text style={styles.cardText}>
            Asegúrate de que los datos de tu empresa están al día antes de que verifiquemos en el Registro Mercantil. No aplicable para empresarios individuales.
          </Text>
        </View>

        {/* País (deshabilitado) */}
        <View style={styles.inputDisabled}>
          <Text style={styles.inputText}>España</Text>
        </View>

        {/* Campo de búsqueda */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Busca el nombre legal de la empresa"
            placeholderTextColor="#ccc"
            style={styles.searchInput}
            value={empresa}
            onChangeText={(text) => {
              setEmpresa(text);
              setMostrarResultados(text.length > 0);
            }}
          />
          <Ionicons name="search-outline" size={20} color="#ccc" />
        </View>

        {/* Lista de sugerencias */}
        {mostrarResultados && (
          <View style={styles.dropdown}>
            <FlatList
              data={empresasFiltradas.filter((item) =>
                item.toLowerCase().includes(empresa.toLowerCase())
              )}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleEmpresaSeleccionada(item)}
                  style={styles.dropdownItem}
                >
                  <Text
                    style={[
                      styles.dropdownText,
                      item === 'GALAXY HOLDINS SAS' && { color: '#e7458f' },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        {/* Botón continuar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>continuar</Text>
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

export default RegistroCorporativoStep6Screen;

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
    width: 140,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  subTitle: {
    color: '#f0813a',
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  verificationBox: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    width: '100%',
  },
  verificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  verificationTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  verificationText: {
    color: '#ccc',
    fontSize: 13,
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%',
    marginBottom: 14,
  },
  disabledInput: {
    opacity: 0.6,
  },
  disabledText: {
    color: '#aaa',
    fontSize: 14,
  },
  searchInput: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchText: {
    color: '#ccc',
    fontSize: 14,
    flex: 1,
  },
  button: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
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
