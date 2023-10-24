import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigation } from "@react-navigation/native";
import SignInScreen from "./SignInScreen";
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/WelcomeScreen.png")}
      />
      <Text style={styles.headingText}>Welcome to FoodSwift</Text>
      <Text style={styles.Text}>
        Yorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("SignInScreen");
        }}
      >
        <View style={styles.signIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      >
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.continue}>or continue with</Text>
      <View style={styles.icons}>
        <FontAwesomeIcon icon={faGoogle} size={26} color="#F9AD1B" />
        <Text> </Text>
        <FontAwesomeIcon icon={faFacebook} size={26} color="#F9AD1B" />
        <Text> </Text>
        <FontAwesomeIcon icon={faInstagram} size={26} color="#F9AD1B" />
      </View>
      <Text style={styles.descriptionText}>
        By{" "}
        <Text
          style={styles.agree}
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
        >
          Sign Up{" "}
        </Text>{" "}
        or{" "}
        <Text
          style={styles.agree}
          onPress={() => {
            navigation.navigate("SignInScreen");
          }}
        >
          Sign In{" "}
        </Text>{" "}
        you have agreed to these{" "}
        <Text style={styles.agree}>Terms and Condition. </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  signIn: {
    backgroundColor: "#F9AD1B",
    padding: 10,
    alignItems: "center",
    width: "75%",
    alignSelf: "center",
    top: "20%",
  },
  signInText: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "700",
    fontSize: 25,
  },
  signUp: {
    padding: 10,
    alignItems: "center",
    width: "75%",
    alignSelf: "center",
    top: "25%",
    borderWidth: 1,
  },
  signUpText: {
    textTransform: "uppercase",
    color: "black",
    fontWeight: "700",
    fontSize: 25,
  },
  continue: {
    color: "#858282",
    textAlign: "center",
    top: "32%",
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    top: "50%",
    alignSelf: "center",
  },
  descriptionText: {
    flexDirection: "row",
    textAlign: "center",
    top: "60%",
    fontSize: 16,
  },
  agree: {
    color: "#F9AD1B",
    fontWeight: "700",
  },
});

export default WelcomeScreen;
