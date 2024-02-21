import { View, StyleSheet } from "react-native";

export const ArtistImage = ({ image, key }) => {
  return <View style={styles.polygon}></View>;
};

const styles = StyleSheet.create({
  polygon: {
    width: 86,
    height: 86,
    borderWidth: 3,
    borderColor: "transparent",
    borderTopColor: "blue",
    borderRadius: 10,
    backgroundColor: "lightgrey",
  },
});
