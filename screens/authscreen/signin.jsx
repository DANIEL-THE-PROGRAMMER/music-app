import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from "react-native";
import { MusicSvg } from "../../components/icon";
import { Input } from "../../components/auth/input";

export default function SignUp({ navigation }) {
  const handleLoginPress = () => {
    navigation.navigate("signup");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <View
          style={{
            paddingTop: 67,
            paddingBottom: 76,
          }}
        >
          <View
            style={{
              gap: 7,
              alignItems: "center",
            }}
          >
            <MusicSvg />
            <Text style={styles.mymusic}>My Music</Text>
          </View>
          <Text style={styles.text}>
            Continue listening to your favorite artists in a seamless
            environment
          </Text>
          <View
            style={{
              alignSelf: "stretch",
              paddingHorizontal: 16,
              gap: 10,
            }}
          >
            <Input type="email" label="Email address" />
            <Input type="password" label="Password" login />
            <View style={styles.btncontainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Text style={styles.label}>Don't have an account?</Text>
              <Text style={styles.loginLink} onPress={handleLoginPress}>
                Sign up
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  btncontainer: {
    marginTop: 157,
    marginBottom: 18,
  },
  mymusic: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Georama",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.176,
  },
  text: {
    color: "#621D00",
    textAlign: "center",
    fontFamily: "Georama",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 36,
    letterSpacing: -0.264,
    marginTop: 24,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  button: {
    display: "flex",
    padding: 12,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 48,
    backgroundColor: "#A33100",
    flexDirection: "row",
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Georama",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: -0.176,
  },
  label: {
    color: "#0E0E0E",
    textAlign: "center",
    fontFamily: "Georama",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.176,
  },
  loginLink: {
    color: "#A33100",
    fontFamily: "Georama",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.176,
    textAlign: "center",
    marginTop: 5,
    paddingBottom: 6,
  },
});
