import { View, StyleSheet, Text } from "react-native";
import { LikeIcon } from "../../../components/icon";

export const MusicCardHorizontal = ({
  key,
  image,
  title,
  liked,
  option,
  name,
}) => {
  return (
    <View style={styles.container} key={key}>
      <View style={styles.imageBox}></View>
      <View style={styles.contentbox}>
        <View style={styles.innercontentbox}>
          <Text style={styles.title}>Highway</Text>
          <LikeIcon />
        </View>
        <View style={styles.innercontentbox}>
          <Text style={styles.name}>Charles Boe</Text>
          <Text style={styles.option}></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: "#FDEBE4",
    flex: 1,
    flexDirection: "row",
    padding: 10,
    gap: 15,
  },
  imageBox: {
    height: 70,
    width: 83,
    backgroundColor: "#fafa",
    borderRadius: 5,
  },
  contentbox: {
    paddingTop: 4,
    paddingBottom: 8,
    paddingHorizontal: 8,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  innercontentbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Georama",
    fontSize: 14,
    letterSpacing: -0.154,
  },
  name: {
    fontFamily: "Georama",
    fontSize: 8,
    letterSpacing: -0.088,
  },
  option: {
    color: "#621D00",
    fontFamily: "Georama",
    fontSize: 8,
    letterSpacing: -0.088,
  },
});
