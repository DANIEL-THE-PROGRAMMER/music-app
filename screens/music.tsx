import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { MusicSection } from "./home/components/musicsection";
import { useEffect, useState } from "react";
import { CustomModal } from "./home/components/custommodal";

export default function Music() {
  const aucostic = require("./../assets/aucostic.png");
  const prev = require("./../assets/prev.png");
  const next = require("./../assets/next.png");
  const play = require("./../assets/play.png");
  const lyrics = require("./../assets/lyrics.png");

  const [open, setOpen] = useState(false);
  const [aucMode, setAucMode] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open && aucMode === false) {
      setAucMode(true);
    } 

    if(open && aucMode === true){
      setAucMode(false);
    }
  }, [open]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.container}>
          <CustomModal open={open} onClose={toggleModal} />
          <View style={[styles.music_image, !aucMode && { height: 353 }, aucMode && { flex: 1 }]}></View>
          <View style={styles.durationcontainer}>
            <Text style={styles.minute}>00:59</Text>
            <View style={styles.duration}></View>
            <Text style={styles.minute}>03:50</Text>
          </View>
          <View style={styles.functions}>
            <TouchableOpacity
              onPress={() => setOpen(!open)}
              style={styles.func}
            >
              <Image source={aucostic} style={styles.image} />
            </TouchableOpacity>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexGrow: 1,
                },
              ]}
            >
              <View style={styles.func}>
                <Image source={prev} style={styles.image} />
              </View>
              <View style={styles.play}>
                <Image
                  source={play}
                  style={[
                    styles.func,
                    {
                      marginLeft: 10,
                    },
                  ]}
                />
              </View>
              <View style={styles.func}>
                <Image source={next} style={styles.image} />
              </View>
            </View>
            <View style={styles.func}>
              <Image source={lyrics} style={styles.image} />
            </View>
          </View>
          {aucMode ? "" :  <MusicSection title="New Podcasts" option="Podcast" />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  minute: {
    fontSize: 13,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  music_image: {
    marginTop: 25,
    borderRadius: 10,
    backgroundColor: "lightgrey",
    position: "relative",
  },
  func: {
    width: 30,
    height: 30,
  },
  play: {
    width: 53,
    height: 53,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDEBE4",
    borderRadius: 100,
  },
  functions: {
    marginBottom: 35,
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  duration: {
    height: 3,
    flexGrow: 1,
    backgroundColor: "black",
  },
  durationcontainer: {
    flexDirection: "row",
    marginVertical: 35,
    alignItems: "center",
    gap: 5,
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
