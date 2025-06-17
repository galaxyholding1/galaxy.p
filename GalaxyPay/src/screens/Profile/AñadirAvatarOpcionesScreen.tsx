import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  FlatList,
} from 'react-native';

const skinColors = ['#fbd1c7', '#f5c89d', '#deb890', '#c7956d', '#a76f47', '#8b572a', '#6b3b18', '#3a1f0f', '#fff1e0'];
const hairColors = ['#000000', '#5C4033', '#B5651D', '#D2B48C', '#FFD700', '#A9A9A9', '#FFFFFF', '#FF5733', '#C71585'];
const etniaOptions = ['Latino', 'Europeo', 'Asiática', 'Africano', 'Opción 5'];

export default function AñadirAvatarOpcionesScreen() {
  const [selectedSkin, setSelectedSkin] = useState('');
  const [selectedHair, setSelectedHair] = useState('');
  const [selectedEtnia, setSelectedEtnia] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'skin' | 'hair' | 'etnia' | null>(null);

  const openModal = (type: 'skin' | 'hair' | 'etnia') => {
    setModalType(type);
    setModalVisible(true);
  };

  const handleSelect = (value: string) => {
    if (modalType === 'skin') setSelectedSkin(value);
    else if (modalType === 'hair') setSelectedHair(value);
    else if (modalType === 'etnia') setSelectedEtnia(value);
    setModalVisible(false);
  };

  const renderModalContent = () => {
    if (modalType === 'skin' || modalType === 'hair') {
      const data = modalType === 'skin' ? skinColors : hairColors;
      return (
        <FlatList
          data={data}
          numColumns={5}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.colorCircle, { backgroundColor: item }]}
              onPress={() => handleSelect(item)}
            />
          )}
          contentContainerStyle={styles.colorGrid}
        />
      );
    }

    if (modalType === 'etnia') {
      return (
        <FlatList
          data={etniaOptions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)} style={styles.etniaOption}>
              <Text style={[styles.etniaText, item === 'Africano' && { color: '#e7458f' }]}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Añadir Avatar</Text>
        <Text style={styles.tab}>Mi Perfil</Text>
      </View>

      {/* Botones de selección */}
      <TouchableOpacity style={styles.selector} onPress={() => openModal('skin')}>
        <Text style={styles.selectorText}>
          {selectedSkin ? 'Color de piel seleccionado' : 'selecciona color de piel'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.selector} onPress={() => openModal('hair')}>
        <Text style={styles.selectorText}>
          {selectedHair ? 'Color de cabello seleccionado' : 'selecciona color de cabello'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.selector}>
        <Text style={styles.selectorText}>selecciona estilo de cabello</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.selector} onPress={() => openModal('etnia')}>
        <Text style={styles.selectorText}>
          {selectedEtnia ? `Etnia: ${selectedEtnia}` : 'selecciona etnia'}
        </Text>
      </TouchableOpacity>

      {/* Botón continuar */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextText}>Siguiente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Ahora no</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              {modalType === 'skin'
                ? 'Selecciona color de piel'
                : modalType === 'hair'
                ? 'Selecciona color de cabello'
                : 'Selecciona etnia'}
            </Text>
            {renderModalContent()}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModal}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tab: {
    color: '#f0813a',
    fontSize: 14,
  },
  selector: {
    backgroundColor: '#2a2a2a',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  selectorText: {
    color: '#fff',
  },
  nextButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  skipButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  skipText: {
    color: '#ccc',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    maxHeight: '80%',
  },
  modalTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  colorGrid: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  etniaOption: {
    paddingVertical: 12,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  etniaText: {
    color: '#fff',
    textAlign: 'center',
  },
  closeModal: {
    textAlign: 'center',
    color: '#e7458f',
    marginTop: 20,
  },
});
