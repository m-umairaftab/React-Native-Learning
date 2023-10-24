import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigation } from "@react-navigation/native";
const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/signIn.png")}
        />
        <Text style={styles.headingText}>Welcome Back!</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={(txt) => setEmail(txt)}
          keyboardType="email-address"
        />
        <TextInput
          style={{ ...styles.textInput, top: "25%" }}
          placeholder="Password"
          value={password}
          onChangeText={(txt) => setPassword(txt)}
          secureTextEntry={true}
        />
        <TouchableWithoutFeedback>
          <Text style={styles.forget}>Forget Password? </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.signIn}>
            <Text style={styles.signInText}>Sign In</Text>
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
          Don't Have an Account?{" "}
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          >
            <Text style={styles.signUp}>Sign Up </Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </SafeAreaView>
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
  textInput: {
    borderWidth: 1,
    top: "20%",
    alignSelf: "center",
    width: "80%",
    height: "10%",
    paddingHorizontal: 10,
  },
  forget: {
    color: "#F9AD1B",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "700",
    top: "28%",
    alignSelf: "flex-end",
  },
  signIn: {
    backgroundColor: "#F9AD1B",
    padding: 10,
    alignItems: "center",
    width: "75%",
    alignSelf: "center",
    top: "33%",
  },
  signInText: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "700",
    fontSize: 25,
  },
  continue: {
    color: "#858282",
    textAlign: "center",
    top: "38%",
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    top: "60%",
    alignSelf: "center",
  },
  descriptionText: {
    flexDirection: "row",
    textAlign: "center",
    top: "70%",
    fontSize: 16,
    fontWeight: "700",
    color: "grey",
  },
  signUp: {
    color: "#F9AD1B",
  },
});

export default SignInScreen;
