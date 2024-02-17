import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingOne from "./screens/onboarding/onboarding_one";
import OnBoardingTwo from "./screens/onboarding/onboarding_two";
import { useFonts, Georama_500Medium } from '@expo-google-fonts/georama';
import * as SplashScreen from 'expo-splash-screen';
import { View } from "react-native";
import { useCallback } from "react";
import SignUp from "./screens/authscreen/signup";
import SignIn from "./screens/authscreen/signin";
import {BottomTabNavigator} from "./screens/tabnavigator/tabnavigator"



const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Georama_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{  flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Navigator initialRouteName="home">
          <Stack.Group
          >
            <Stack.Screen name="onboardingone" component={OnBoardingOne} />
            <Stack.Screen name="onboardingtwo" component={OnBoardingTwo} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="signin" component={SignIn} />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="home" component={BottomTabNavigator} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

