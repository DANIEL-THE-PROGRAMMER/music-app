import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const SearchInput = ({ search, setSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#A33100"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginHorizontal: 10,
  },
  searchInput: {
    height: 46,
    borderColor: "#A33100",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 15,
  },
});
