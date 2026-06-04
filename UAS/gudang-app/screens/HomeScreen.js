import React, { useState } from "react";

import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import { DATA_GUDANG } from "../data/dataGudang";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);


  const filteredData = DATA_GUDANG.filter((item) =>
    item.namaBarang
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  const displayedData = isSorted
    ? [...filteredData].sort((a, b) =>
        a.namaBarang.localeCompare(b.namaBarang)
      )
    : filteredData;

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.headerTitle}>
        Data Gudang
      </Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Cari Barang..."
        value={search}
        onChangeText={setSearch}
      />

   
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setIsSorted(!isSorted)}
      >
        <Text style={styles.sortText}>
          {isSorted ? "Reset Urutan" : "Sort A-Z"}
        </Text>
      </TouchableOpacity>


      <FlatList
        data={displayedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Detail", {
                barang: item,
              })
            }
          >
            <Text style={styles.namaBarang}>
              {item.namaBarang}
            </Text>

            <Text>
              Kategori: {item.kategori}
            </Text>

            <Text>
              Stok: {item.stok}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  searchBar: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
  },

  sortButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },

  sortText: {
    color: "white",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#ddd",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },

  namaBarang: {
    fontWeight: "bold",
  },
});