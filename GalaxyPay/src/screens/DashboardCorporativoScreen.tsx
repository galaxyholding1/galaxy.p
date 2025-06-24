import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';

const tabs = ['cuentas', 'tarjetas', 'remesas'];

export default function DashboardCorporativoScreen() {
  const [activeTab, setActiveTab] = useState('tarjetas');
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const tarjetas = [
    {
      id: '1',
      image: require('../assets/tarjeta-galaxy.png'),
    },
    {
      id: '2',
      image: require('../assets/tarjeta-galaxy2.png'),
    },
  ];

  const movimientos = [
    {
      id: '1',
      icon: require('../assets/icon-airbnb.png'),
      nombre: 'Airbnb',
      fecha: '18:27 - April 30',
      tipo: 'Monthly',
      monto: '$4.000,00',
    },
    {
      id: '2',
      icon: require('../assets/icon-burger.png'),
      nombre: 'Burguer King',
      fecha: '17:00 - April 24',
      tipo: 'Pantry',
      monto: '-$100,00',
    },
    {
      id: '3',
      icon: require('../assets/icon-rent.png'),
      nombre: 'Rent',
      fecha: '8:30 - April 15',
      tipo: 'Rent',
      monto: '-$674,40',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require('../assets/avatar.png')} style={styles.avatar} />
            <View>
              <Text style={styles.greeting}>Hola, Usuario</Text>
              <Text style={styles.subGreeting}>Buenos días</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity>
              <Image source={require('../assets/notification.png')} style={styles.icon} />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>20</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/menu.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Balance y gastos */}
        <View style={styles.balanceRow}>
          <View style={styles.balanceBox}>
            <Text style={styles.label}>Total Balance</Text>
            <Text style={styles.amount}>$7,783.00</Text>
            <Text style={styles.action}>+Añadir Saldo</Text>
          </View>
          <View style={styles.balanceBox}>
            <Text style={styles.label}>Total Expense</Text>
            <Text style={styles.expense}>-$1.187.40</Text>
            <Text style={styles.sendAction}>Enviar</Text>
          </View>
        </View>

        {/* Tabs: cuentas, tarjetas, remesas */}
        <View style={styles.tabs}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tab,
                activeTab === tab && styles.tabActive,
              ]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.addTab}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Carrusel de tarjetas */}
        {activeTab === 'tarjetas' && (
          <FlatList
            horizontal
            data={tarjetas}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item.image} style={styles.cardImage} />
            )}
            pagingEnabled
            onScroll={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.x / 280);
              setActiveCardIndex(index);
            }}
            style={{ marginBottom: 10 }}
          />
        )}

        {/* Paginador de tarjetas */}
        <View style={styles.dots}>
          {tarjetas.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === activeCardIndex && styles.dotActive,
              ]}
            />
          ))}
        </View>

        {/* Movimientos */}
        <View style={styles.movimientosHeader}>
          <Text style={styles.movimientosTitle}>movimientos</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>ver más</Text>
          </TouchableOpacity>
        </View>

        {movimientos.map((mov) => (
          <View key={mov.id} style={styles.movementItem}>
            <Image source={mov.icon} style={styles.movementIcon} />
            <View style={{ flex: 1 }}>
              <Text style={styles.movementTitle}>{mov.nombre}</Text>
              <Text style={styles.movementDate}>{mov.fecha}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.movementType}>{mov.tipo}</Text>
              <Text style={styles.movementAmount}>{mov.monto}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeArea
    

    const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1b1b1f',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    flex: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subGreeting: {
    color: '#aaa',
    fontSize: 14,
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
  },
  contentText: {
    color: '#fff',
    fontSize: 18,
  },
});
