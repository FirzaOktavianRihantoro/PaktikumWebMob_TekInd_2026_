import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

function HomeScreen({ navigation, data }) {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { item })}
    >

      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <Text style={[
        styles.title,
        item.status === 'gagal' && { color: 'red' }
      ]}>
        {item.nama}
      </Text>

      <Text>Status: {item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>QC Inspection List</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },

  card: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8
  }
});

export default HomeScreen;