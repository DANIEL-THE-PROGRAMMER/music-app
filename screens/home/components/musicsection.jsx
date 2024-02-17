import { View, Text, StyleSheet } from "react-native";
import { ArrowRight } from "../../../components/icon";
import { MusicCard } from "./musicard";

export const MusicSection = ({ title, option }) => {
  const cardNumber = 3;
  const items = Array.from({ length: cardNumber }, (_, index) => index + 1);

  const Song = items.map((_, index) => <MusicCard option="Song" />);

  const Album = items.map((_, index) => <MusicCard option="Album" />);

  const Podcast = items.map((_, index) => <MusicCard option="Podcast" />);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{title}</Text>
        <View style={styles.icon}>
          <ArrowRight />
        </View>
      </View>
      <View style={styles.musicontainer}>
        {option === "Song" && Song}
        {option === "Album" && Album}
        {option === "Podcast" && Podcast}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 16,
    fontFamily: "Georama",
    letterSpacing: -0.176,
    lineHeight: 24,
  },
  icon: {
    marginLeft: 10,
  },
  musicontainer: {
    gap: 12,
    flexDirection: "row",
  },
});
