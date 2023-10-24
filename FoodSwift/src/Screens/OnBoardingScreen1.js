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
const OnBoardingScreen1 = () => {
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
          source={require("../../assets/OnBoarding1.png")}
        />
        <Text style={styles.headingText}>Discover restaurants near you</Text>
        <Text style={styles.Text}>
          Yorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
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
    top: "20%",
  },
  headingText: {
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    top: "20%",
  },
  Text: {
    top: "20%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
  },
});

export default OnBoardingScreen1;
