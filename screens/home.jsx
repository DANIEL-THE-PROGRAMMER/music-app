import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native"
import { NotificationIcon } from "../components/icon"
import { TrendingArtistsSection } from "./home/components/trendingartist";
import { MusicSection } from "./home/components/musicsection";

export default function Home(){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                style={styles.scrollView}       contentContainerStyle={styles.scrollViewContent}
            >
                <View style={{
                    paddingTop: 45,
                    paddingBottom: 25,
                }}>
                    <View style={styles.header}>
                        <Text style={styles.welcomeText}>Welcome Fien!</Text>
                        <NotificationIcon />
                    </View>
                    <TrendingArtistsSection />
                    <View style={{ gap: 24 }}>
                        <MusicSection title="Popular Songs" option="Song" />
                        <MusicSection title="Trending albums" option="Album" />
                        <MusicSection title="New Podcasts" option="Podcast" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollView: {
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      paddingHorizontal:16
    },
    welcomeText: {
      fontSize: 20,
      fontFamily: "Georama",
      letterSpacing: -0.22,
      lineHeight: 30 
    },
  });