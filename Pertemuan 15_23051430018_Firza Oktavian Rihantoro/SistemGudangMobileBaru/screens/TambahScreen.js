import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function TambahScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tambah Barang</Text>

      <TextInput placeholder="Nama Barang" style={styles.input} />
      <TextInput placeholder="Stok" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Lokasi" style={styles.input} />

      <Button
        title="Simpan"
        onPress={() => alert('Barang ditambahkan!')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8
  }
});

export default TambahScreen;