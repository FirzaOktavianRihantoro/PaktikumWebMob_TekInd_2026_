import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView
} from 'react-native';

import { useState } from 'react';

export default function App() {

  const [halaman, setHalaman] = useState('dashboard');

  // =========================
  // HALAMAN PROFIL MESIN
  // =========================
  if (halaman === 'profilMesin') {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.pageTitle}>
          Profil Mesin Mobile
        </Text>

        <View style={styles.machineCard}>

          {/* Foto Mesin */}
          <Image
            source={require('./mesin.png')}
            style={styles.machineImage}
          />

          {/* Informasi Mesin */}
          <View style={styles.machineInfo}>

            <Text style={styles.machineTitle}>
              Mesin Conveyor X200
            </Text>

            <Text style={styles.machineText}>
              Tahun Pembuatan: 2022
            </Text>

            <Text style={styles.machineStatus}>
              Status: AKTIF
            </Text>

          </View>

        </View>

        {/* Tombol Kembali */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setHalaman('dashboard')}
        >
          <Text style={styles.backButtonText}>
            Kembali ke Dashboard
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    );
  }

  // =========================
  // HALAMAN DASHBOARD
  // =========================
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Bagian Header */}
      <View style={styles.header}>

        {/* Logo */}
        <Image
          source={require('./logo.png')}
          style={styles.logo}
        />

        <Text style={styles.headerTitle}>
          PT. Manufaktur Maju
        </Text>

        <Text style={styles.headerSubtitle}>
          Aplikasi Monitoring Gudang
        </Text>

      </View>

      {/* Bagian Konten Utama */}
      <ScrollView style={styles.content}>

        <Text style={styles.welcomeText}>
          Selamat Datang, Operator!
        </Text>

        {/* Card Gudang A */}
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            Alert.alert("Stok Gudang A", "Jumlah Barang: 1.250 Unit")
          }
        >
          <Text style={styles.cardTitle}>Status Gudang A</Text>
          <Text style={styles.cardValue}>Kapasitas: 85%</Text>
          <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
        </TouchableOpacity>

        {/* Gudang B */}
        <View style={[styles.card, styles.cardWarning]}>
          <Text style={styles.cardTitle}>Status Gudang B</Text>
          <Text style={styles.cardValue}>Kapasitas: 95%</Text>
          <Text style={styles.cardStatus}>PENUH</Text>
        </View>

        {/* Gudang C */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang C</Text>
          <Text style={styles.cardValue}>Kapasitas: 70%</Text>
          <Text style={styles.cardStatus}>TERSEDIA</Text>
        </View>

        {/* Gudang D */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang D</Text>
          <Text style={styles.cardValue}>Kapasitas: 65%</Text>
          <Text style={styles.cardStatus}>TERSEDIA</Text>
        </View>

        {/* Gudang E */}
        <View style={[styles.card, styles.cardWarning]}>
          <Text style={styles.cardTitle}>Status Gudang E</Text>
          <Text style={styles.cardValue}>Kapasitas: 98%</Text>
          <Text style={styles.cardStatus}>PENUH</Text>
        </View>

        {/* Gudang F */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang F</Text>
          <Text style={styles.cardValue}>Kapasitas: 50%</Text>
          <Text style={styles.cardStatus}>TERSEDIA</Text>
        </View>

        {/* Gudang G */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang G</Text>
          <Text style={styles.cardValue}>Kapasitas: 40%</Text>
          <Text style={styles.cardStatus}>TERSEDIA</Text>
        </View>

        {/* Gudang H */}
        <View style={[styles.card, styles.cardWarning]}>
          <Text style={styles.cardTitle}>Status Gudang H</Text>
          <Text style={styles.cardValue}>Kapasitas: 99%</Text>
          <Text style={styles.cardStatus}>PENUH</Text>
        </View>

        {/* Gudang I */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang I</Text>
          <Text style={styles.cardValue}>Kapasitas: 30%</Text>
          <Text style={styles.cardStatus}>TERSEDIA</Text>
        </View>

        {/* Gudang J */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang J</Text>
          <Text style={styles.cardValue}>Kapasitas: 75%</Text>
          <Text style={styles.cardStatus}>TERSEDIA</Text>
        </View>

        {/* Gudang K */}
        <View style={[styles.card, styles.cardWarning]}>
          <Text style={styles.cardTitle}>Status Gudang K</Text>
          <Text style={styles.cardValue}>Kapasitas: 97%</Text>
          <Text style={styles.cardStatus}>PENUH</Text>
        </View>

        {/* Gudang L */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang L</Text>
          <Text style={styles.cardValue}>Kapasitas: 55%</Text>
          <Text style={styles.cardStatus}>TERSEDIA</Text>
        </View>

        {/* PROFIL MESIN MOBILE */}
        <TouchableOpacity
          style={styles.machineCard}
          onPress={() => setHalaman('profilMesin')}
        >

          {/* Foto Mesin */}
          <Image
            source={require('./mesin.png')}
            style={styles.machineImage}
          />

          {/* Informasi Mesin */}
          <View style={styles.machineInfo}>

            <Text style={styles.machineTitle}>
              Mesin Conveyor X200
            </Text>

            <Text style={styles.machineText}>
              Tahun Pembuatan: 2022
            </Text>

            <Text style={styles.machineStatus}>
              Status: AKTIF
            </Text>

          </View>

        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// =========================
// STYLE
// =========================
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    elevation: 5,
    alignItems: 'center',
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 14,
  },

  content: {
    paddingHorizontal: 20,
  },

  welcomeText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardWarning: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  cardValue: {
    fontSize: 14,
    color: '#7f8c8d',
  },

  cardStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 5,
    textAlign: 'right',
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    color: '#2c3e50',
  },

  machineCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  machineImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },

  machineInfo: {
    flex: 1,
  },

  machineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },

  machineText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },

  machineStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },

  backButton: {
    backgroundColor: '#2c3e50',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});