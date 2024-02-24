
import { StyleSheet, View, Image, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from "../../components/icon";

function OnBoardingOne() {
    return (
        <LinearGradient 
        colors={['rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.58)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
            style={styles.container}
            >
            <View style={{
                    gap:170,
                    alignItems:"center",
                    paddingHorizontal: 40
                }}>
                <Text style={{
                    color:"white",
                    textAlign:"center",
                    fontWeight: 500,
                    lineHeight:30,
                    letterSpacing: -0.22,
                    fontSize: 20,
                    fontFamily: "Georama_500Medium"
                }}>Get paid for listening to your favorite songs</Text>
                <CustomButton text="Next" route="onboardingtwo" />
            </View>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 391,
        alignItems:"center"
    }
})


export default OnBoardingOne