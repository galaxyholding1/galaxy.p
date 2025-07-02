import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MenuCorporativoModal from './MenuCorporativoModal'; // ajusta la ruta si lo tienes en otra carpeta

const DashboardCorporativoScreen: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleNavigate = (screen: string) => {
    console.log('Navegar a:', screen);
    // Aquí puedes usar tu navigation.navigate(screen)
    setMenuVisible(false);
  };

  return (
    <LinearGradient
      colors={['#4c3b90', '#e54690', '#f08139']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Galaxy Pay Corporativo</Text>
        <View style={{ width: 28 }} /> {/* para equilibrar el espacio */}
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>Bienvenido al Dashboard Corporativo</Text>
        {/* Aquí va el resto del contenido de tu dashboard */}
      </View>

      <MenuCorporativoModal
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onNavigate={handleNavigate}
      />
    </LinearGradient>
  );
};

export default DashboardCorporativoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    color: '#fff',
    fontSize: 16,
  },
});
