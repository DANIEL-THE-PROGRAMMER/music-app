
import { View, StyleSheet, Text } from "react-native"
import { LikeIcon } from "../../../components/icon"

export const MusicCard = ({ index, image, title, liked, option, name }) => {
    return (
        <View key={index} style={styles.container}>
            <View style={styles.imageBox}></View>
            <View style={styles.contentbox}>
                <View style={styles.innercontentbox}>
                    <Text style={styles.title}>Highway</Text>
                    <LikeIcon />
                </View>
                <View style={styles.innercontentbox}>
                    <Text style={styles.name}>Charles Boe</Text>
                    <Text style={styles.option}>{option}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        marginTop:12,
        backgroundColor: "#FDEBE4",
        flex: 1,
    },
    imageBox: {
        height: 107,
    },
    contentbox: {
        paddingTop:4,
        paddingBottom:8,
        paddingHorizontal:8
    },
    innercontentbox:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    title: {
        fontFamily: "Georama",
        fontSize:14,
        letterSpacing: -0.154
    },
    name: {
        fontFamily: "Georama",
        fontSize:8,
        letterSpacing: -0.088
    },
    option : {
        color:"#621D00",
        fontFamily: "Georama",
        fontSize:8,
        letterSpacing: -0.088
    }
})

