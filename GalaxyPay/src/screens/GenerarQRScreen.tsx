import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';

const GenerarQRScreen: React.FC = () => {
  const navigation = useNavigation();

  // Datos simulados del empleado
  const empleadoData = {
    nombre: 'Jesús Muniesa Pérez',
    correo: 'jesus@empresa.com',
    cargo: 'Administrador',
    usuario: '#jesus_mp',
  };

  // Convertimos datos en JSON para el QR
  const qrValue = JSON.stringify(empleadoData);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.avatar} />
        <View>
          <Text style={styles.hello}>Hola, Usuario</Text>
          <Text style={styles.subtitle}>Buenos días</Text>
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={22} color="#fff" style={styles.icon} />
          <Ionicons name="menu-outline" size={26} color="#fff" />
        </View>
      </View>

      <View style={styles.content}>
        {/* Título */}
        <View style={styles.sectionHeader}>
          <Ionicons name="qr-code-outline" size={18} color="#fff" />
          <Text style={styles.sectionTitle}> Compartir QR</Text>
        </View>

        <Text style={styles.description}>
          Comparte este código con los empleados de tu empresa para que se agreguen a tu lista.
        </Text>

        {/* QR */}
        <View style={styles.qrContainer}>
          <QRCode value={qrValue} size={200} color="#000" backgroundColor="#fff" />
        </View>

        {/* Botones */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-social-outline" size={16} color="#fff" style={{ marginRight: 4 }} />
            <Text style={styles.buttonText}>compartir QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scanButton}>
            <Ionicons name="scan-outline" size={16} color="#fff" style={{ marginRight: 4 }} />
            <Text style={styles.buttonText}>Escanear QR</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen' as never)}>
          <Ionicons name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/50x50.png?text=Logo' }} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bar-chart-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen' as never)}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenerarQRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
  hello: { color: '#fff', fontSize: 16 },
  subtitle: { color: '#ccc', fontSize: 12 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  icon: { marginHorizontal: 8 },
  content: { paddingHorizontal: 16, paddingTop: 10 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  sectionTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  description: { color: '#f08139', fontSize: 13, marginBottom: 16 },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#666',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4c3b90',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', fontSize: 13 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#333',
  },
  centerButton: {
    width: 56, height: 56, backgroundColor: '#1c1c1c',
    borderRadius: 28, justifyContent: 'center', alignItems: 'center',
    marginTop: -20,
  },
  logo: { width: 40, height: 40, borderRadius: 20 },
});
