import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CorporateDashboardScreen() {
  const movimientos = [
    {
      icon: require('../assets/icon-airbnb.png'),
      title: 'Airbnb',
      date: '18:27 - April 30',
      category: 'Monthly',
      amount: '$4.000,00',
    },
    {
      icon: require('../assets/icon-burger.png'),
      title: 'Burguer King',
      date: '17:00 - April 24',
      category: 'Pantry',
      amount: '-$100,00',
    },
    {
      icon: require('../assets/icon-rent.png'),
      title: 'Rent',
      date: '8:30 - April 15',
      category: 'Rent',
      amount: '-$674,40',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/avatar-corporate.png')} style={styles.avatar} />
          <View>
            <Text style={styles.greeting}>Hola, Usuario</Text>
            <Text style={styles.subGreeting}>Buenos días</Text>
          </View>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <View style={styles.badge}><Text style={styles.badgeText}>20</Text></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Balance general */}
      <View style={styles.balanceContainer}>
        <View>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$7,783.00</Text>
          <Text style={styles.addBalance}>+Añadir Saldo</Text>
        </View>
        <View>
          <Text style={styles.expenseLabel}>Total Expense</Text>
          <Text style={styles.expenseAmount}>-$1.187.40</Text>
          <Text style={styles.sendText}>Enviar</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabTextActive}>cuentas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.tabText}>tarjetas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.tabText}>remesas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Carrusel de cuentas */}
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Image source={require('../assets/avatar-corporate.png')} style={styles.cardAvatar} />
            <Text style={styles.cardTitle}>Nombre de usuario</Text>
            <Ionicons name="ellipsis-vertical" size={18} color="#fff" style={{ marginLeft: 'auto' }} />
          </View>
          <Text style={styles.cardIban}>IBAN</Text>
          <Text style={styles.cardNumber}>ES12 3456 7890 1234 5678 9012</Text>
          <Text style={styles.cardBalance}>Saldo: 1.405,50 €</Text>
        </View>
      </ScrollView>

      {/* Movimientos */}
      <View style={styles.movementsHeader}>
        <Text style={styles.movementsTitle}>movimientos</Text>


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
