import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreen1 from "./src/Screens/OnBoardingScreen1";
import OnBoardingScreen2 from "./src/Screens/OnBoardingScreen2";
import OnBoardingScreen3 from "./src/Screens/OnBoardingScreen3";
import OnBoardingScreen4 from "./src/Screens/OnBoardingScreen4";
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#F9AD1B" },
          headerTintColor: "white",
        }}
      >
        {/* <Stack.Screen
          name="OnBoardingScreen4"
          component={OnBoardingScreen4}
          options={{}}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
