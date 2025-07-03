import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DetalleEmpleadoScreen: React.FC = () => {
  const navigation = useNavigation();

  // Estado simulado de empleado (puedes reemplazarlo por datos reales)
  const [empleado, setEmpleado] = useState({
    nombre: 'Jesús Muniesa Pérez',
    correo: 'jesus@empresa.com',
    cargo: 'Administrador',
    usuario: '#jesus_mp',
  });

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

      <ScrollView contentContainerStyle={styles.content}>
        {/* Título */}
        <View style={styles.sectionHeader}>
          <Ionicons name="people-outline" size={18} color="#fff" />
          <Text style={styles.sectionTitle}> Gestión De Empleados</Text>
        </View>
        <Text style={styles.subTitle}>Detalle de empleados</Text>

        {/* Card de empleado */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.circleAvatar}>
              <Text style={styles.initials}>JM</Text>
            </View>
            <View>
              <Text style={styles.nombre}>{empleado.nombre}</Text>
              <Text style={styles.cargo}>{empleado.cargo}</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Nombre completo</Text>
            <Text style={styles.value}>{empleado.nombre}</Text>
            <TouchableOpacity>
              <Text style={styles.cambiar}>Cambiar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Correo electrónico</Text>
            <Text style={styles.value}>{empleado.correo}</Text>
            <TouchableOpacity>
              <Text style={styles.cambiar}>Cambiar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Cargo en la empresa</Text>
            <Text style={styles.value}>{empleado.cargo}</Text>
            <TouchableOpacity>
              <Text style={styles.cambiar}>Cambiar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Usuario galaxypay</Text>
            <Text style={styles.value}>{empleado.usuario}</Text>
            <TouchableOpacity>
              <Text style={styles.cambiar}>Cambiar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Botones */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.deleteButton}>
            <Ionicons name="close-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.qrButton}>
            <Text style={styles.buttonText}>generar QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>guardar</Text>
          </TouchableOpacity>
        </View>

        {/* Botón volver */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </ScrollView>

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

export default DetalleEmpleadoScreen;

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
  avatar: {
    width: 40, height: 40, borderRadius: 20, marginRight: 8,
  },
  hello: { color: '#fff', fontSize: 16 },
  subtitle: { color: '#ccc', fontSize: 12 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  icon: { marginHorizontal: 8 },
  content: { paddingHorizontal: 16, paddingTop: 10 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  sectionTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  subTitle: { color: '#f08139', fontSize: 14, marginBottom: 10 },
  card: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  circleAvatar: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: '#4c3b90', justifyContent: 'center', alignItems: 'center',
    marginRight: 8,
  },
  initials: { color: '#fff', fontWeight: 'bold' },
  nombre: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  cargo: { color: '#ccc', fontSize: 12 },
  detailRow: {
    marginBottom: 8,
  },
  label: { color: '#aaa', fontSize: 12 },
  value: { color: '#f08139', fontSize: 13 },
  cambiar: { color: '#ccc', fontSize: 12, textAlign: 'right' },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  deleteButton: {
    backgroundColor: '#e54690', flex: 1, marginRight: 4,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    paddingVertical: 10, borderRadius: 10,
  },
  qrButton: {
    backgroundColor: '#4c3b90', flex: 1, marginHorizontal: 4,
    alignItems: 'center', justifyContent: 'center',
    paddingVertical: 10, borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#666', flex: 1, marginLeft: 4,
    alignItems: 'center', justifyContent: 'center',
    paddingVertical: 10, borderRadius: 10,
  },
  buttonText: { color: '#fff', fontSize: 13 },
  backButton: {
    backgroundColor: '#e54690',
    borderRadius: 12, alignItems: 'center',
    paddingVertical: 12, marginTop: 10,
  },
  backButtonText: { color: '#fff', fontSize: 16 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around', alignItems: 'center',
    paddingVertical: 10, backgroundColor: '#333',
  },
  centerButton: {
    width: 56, height: 56, backgroundColor: '#1c1c1c',
    borderRadius: 28, justifyContent: 'center', alignItems: 'center',
    marginTop: -20,
  },
  logo: { width: 40, height: 40, borderRadius: 20 },
});
