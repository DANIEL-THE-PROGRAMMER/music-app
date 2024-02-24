import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { MusicSection } from "./home/components/musicsection";
import { SearchInput } from "../components/searchinput";
import { useState } from "react";
import { MusicCardHorizontal } from "./home/components/musiccardhorizontal";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View
          style={{
            paddingTop: 45,
            paddingBottom: 25,
            flex: 1,
          }}
        >
          <View style={styles.header}>
            <Text style={styles.searchText}>Search</Text>
          </View>
          <SearchInput search={search} setSearch={setSearch} />
          {search && (
            <View
              style={{
                marginHorizontal: 10,
                flex: 1,
              }}
            >
              <View style={styles.playedsongsbox}>
                {Array.from({ length: 1 }, (_, index) => {
                  return <MusicCardHorizontal index={index} />;
                })}
              </View>
            </View>
          )}
          <View style={{ gap: 24 }}>
            <MusicSection title="You may like" option="Song" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  searchText: {
    fontSize: 20,
    fontFamily: "Georama",
    letterSpacing: -0.22,
    lineHeight: 30,
  },
  playedsongsbox: {
    gap: 20,
    marginBottom: 20,
  },
});
