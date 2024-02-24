import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MusicCardHorizontal } from "./home/components/musiccardhorizontal";
import { MusicCard } from "./home/components/musicard";

export default function Favourites() {
  const [display, setDisplay] = useState("grid");

  const grid = require("./../assets/grid.png");
  const flex = require("./../assets/flex.png");

  const toggleDisplay = () => {
    setDisplay((prevDisplay) => (prevDisplay === "grid" ? "flex" : "grid"));
  };

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
          }}
        >
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Your Favourites</Text>
            <TouchableOpacity onPress={toggleDisplay}>
              <Image
                source={display === "grid" ? grid : flex}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            {display === "grid" ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {Array.from({ length: 12 }, (_, index) => (
                  <View
                    key={index}
                    style={{
                      flexBasis: 114,
                      flexGrow: 1,
                    }}
                  >
                    <MusicCard index={index} />
                  </View>
                ))}
              </View>
            ) : (
             <View style={{
                gap:20
             }}>
                {
                     Array.from({ length: 6 }, (_, index) => (
                        <MusicCardHorizontal key={index} index={index} />
                      ))
                }
             </View>
            )}
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
  welcomeText: {
    fontSize: 20,
    fontFamily: "Georama",
    letterSpacing: -0.22,
    lineHeight: 30,
  },
});
