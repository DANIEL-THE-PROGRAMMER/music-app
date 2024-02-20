import { View, ScrollView, Text,StyleSheet } from "react-native";
import { ArrowRight } from "../../../components/icon";
import { ArtistImage } from "./artist";



export const TrendingArtistsSection = () => {
    const numberOfPolygons = 10;
  const items = Array.from({ length: numberOfPolygons }, (_, index) => index + 1);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Trending Artists</Text>
          <View style={styles.icon}>
            <ArrowRight />
          </View>
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            style={{
                marginTop: 12,
                marginBottom: 24,
            }}
            >
            {items.map((item) => (
                <ArtistImage key={item} image="" />
            ))}
            
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal:16
    },
    heading: {
      fontSize: 16,
      fontFamily:'Georama',
      letterSpacing:-0.176,
      lineHeight:24
    },
    icon: {
      marginLeft: 10,
    },
    scrollContainer: {
      paddingHorizontal: 16,
      flexDirection: 'row',
      gap: 6,
    },
  });


  /*
  
    <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            >
            {[1, 2, 3, 4, 5].map((item) => (
                <ArtistImage key={item} image="" />
            ))}
            
            </ScrollView>
  */