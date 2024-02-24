import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { MusicCardHorizontal } from "./home/components/musiccardhorizontal";

export default function Rewards() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.earnings}>
          <Text
            style={{
              color: "#A33100",
              fontSize: 20,
            }}
          >
            Your Earnings
          </Text>
          <View style={styles.earningcontainer}>
            <View
              style={[
                styles.earningbox,
                {
                  backgroundColor: "#FDEBE4",
                  color: "#000",
                },
              ]}
            >
              <View style={styles.uinner}>
                <Image
                  source={require("./../assets/Bank.png")}
                  style={{ width: 30, height: 30 }}
                />
                <Text style={{ fontSize: 14 }}>Coins Earned</Text>
              </View>
              <View style={styles.linner}>
                <Text style={{ fontSize: 40 }}>89</Text>
              </View>
            </View>
            <View
              style={[
                styles.earningbox,
                {
                  backgroundColor: "#000",
                },
              ]}
            >
              <View style={styles.uinner}>
                <Image
                  source={require("./../assets/music.png")}
                  style={{ width: 30, height: 30 }}
                />
                <Text style={{ fontSize: 14, color: "#fff" }}>
                  Songs played
                </Text>
              </View>
              <View style={styles.linner}>
                <Text style={{ fontSize: 40, color: "#fff" }}>54</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "black" }}>
            Most played songs
          </Text>
          <View style={styles.playedsongsbox}>
            { Array.from({ length: 7 }, (_, index) => {
                return (
                    <MusicCardHorizontal key={index} />
                )
            }) }
            
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
    paddingVertical:20
  },
  playedsongsbox:{
    gap: 20,
    marginTop:30
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  earnings: {
    paddingVertical: 30,
    gap: 30,
  },
  earningbox: {
    borderRadius: 15,
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
    alignItems: "center",
    flexBasis: 100,
  },
  earningcontainer: {
    flexDirection: "row",
    gap: 20,
  },
  linner: {
    justifyContent: "space-between",
  },
  uinner: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
});
