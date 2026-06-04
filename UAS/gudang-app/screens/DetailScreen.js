import React, { useState } from "react";

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { barang } = route.params;


  const [stok, setStok] = useState(barang.stok);


  const tambahStok = () => {
    setStok(stok + 1);
  };


  const kurangStok = () => {
    if (stok > 0) {
      setStok(stok - 1);
    }
  };


  const isCritical = stok < 5;

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.card}>

 
        <Text style={styles.label}>
          Nama Barang
        </Text>
        <Text style={styles.value}>
          {barang.namaBarang}
        </Text>

        <Text style={styles.label}>
          Kategori
        </Text>
        <Text style={styles.value}>
          {barang.kategori}
        </Text>

   
        <Text style={styles.label}>
          Stok Saat Ini
        </Text>
        <Text style={styles.stock}>
          {stok}
        </Text>


        {isCritical && (
          <Text style={styles.warning}>
            ⚠ Stok Kritis!
          </Text>
        )}


        <Text style={styles.label}>
          Lokasi Rak
        </Text>
        <Text style={styles.value}>
          {barang.lokasiRak}
        </Text>


        <View style={styles.buttonRow}>
          
          <TouchableOpacity
            style={styles.button}
            onPress={tambahStok}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={kurangStok}
          >
            <Text style={styles.buttonText}>
              -
            </Text>
          </TouchableOpacity>

        </View>


        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            Kembali
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },

  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },

  value: {
    fontSize: 16,
    fontWeight: "bold",
  },

  stock: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 10,
  },

  warning: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },

  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 8,
    width: 50,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },

  backButton: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  backText: {
    color: "white",
    fontWeight: "bold",
  },
});