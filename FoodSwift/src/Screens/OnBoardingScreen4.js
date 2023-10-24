import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const OnBoardingScreen4 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("SignInScreen");
        }}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableWithoutFeedback>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/OnBoarding4.png")}
        />
        <Text style={styles.headingText}>Rate your food</Text>
        <Text style={styles.Text}>
          Yorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("WelcomeScreen");
          }}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Get Started</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipText: {
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "500",
    alignSelf: "flex-end",
  },
  image: {
    alignSelf: "center",
    top: "10%",
  },
  headingText: {
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    top: "10%",
  },
  Text: {
    top: "10%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
  },
  btn: {
    backgroundColor: "#F9AD1B",
    padding: 10,
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
    top: "30%",
  },
  btnText: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "700",
    fontSize: 25,
  },
});

export default OnBoardingScreen4;
