import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function DetailScreen({ route, navigation, updateStatus }) {

  const { item } = route.params;
  const [status, setStatus] = useState(item.status);

  const handleSimpan = () => {
    updateStatus(item.id, status);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Detail Inspeksi</Text>

      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <Text style={styles.text}>Item: {item.nama}</Text>

      <Text style={styles.text}>Standar: Tidak ada cacat visual</Text>

      {/* DROPDOWN */}
      <View style={styles.box}>
        <Text>Pilih Status:</Text>

        <Picker
          selectedValue={status}
          onValueChange={(val) => setStatus(val)}
        >
          <Picker.Item label="Lolos" value="lolos" />
          <Picker.Item label="Gagal" value="gagal" />
        </Picker>
      </View>

      <Button title="Simpan & Kembali" onPress={handleSimpan} />

      {/* CONDITIONAL RENDERING */}
      {status === 'gagal' && (
        <View style={{ marginTop: 10 }}>
          <Button
            title="Request Perbaikan QC"
            color="red"
            onPress={() => Alert.alert("Request dikirim")}
          />
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },

  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 10
  },

  text: {
    marginBottom: 5
  },

  box: {
    marginVertical: 10
  }
});

export default DetailScreen;