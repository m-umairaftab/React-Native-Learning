import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
} from "react-native";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
// import { auth } from "../../firebase";
import auth from "@react-native-firebase/auth";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [tc, setTc] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUp = async () => {
    console.log("Email:", email, password);
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
        });
    } catch (error) {
      console.log("Error: ", error);
    }

    // .catch((error) => {
    //  alert(error.message)
    // })
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/signUp.png")}
        />
        <Text style={styles.headingText}>Create Your Account</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={(txt) => setEmail(txt)}
          keyboardType="email-address"
        />
        <TextInput
          style={{ ...styles.textInput, top: "19%" }}
          placeholder="Password"
          value={password}
          onChangeText={(txt) => setPassword(txt)}
          secureTextEntry={true}
        />
        {/* <TextInput
          style={{ ...styles.textInput, top: "23%" }}
          placeholder="Password"
          value={confirmPassword}
          onChangeText={(txt) => setConfirmPassword(txt)}
          secureTextEntry={true}
        /> */}
        <View style={styles.checkBox}>
          <Checkbox
            value={tc}
            onValueChange={setTc}
            color={tc ? "#F9AD1B" : undefined}
          />
          <Text> I agree with privacy policy.</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            handleSignUp();
          }}
        >
          <View style={styles.signIn}>
            <Text style={styles.signInText}>Sign Up</Text>
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
          Already Registered?{" "}
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          >
            <Text style={styles.signUp}>Sign In Now </Text>
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
    top: "8%",
  },
  textInput: {
    borderWidth: 1,
    top: "15%",
    alignSelf: "center",
    width: "80%",
    height: "9%",
    paddingHorizontal: 10,
  },
  checkBox: {
    flexDirection: "row",
    top: "43%",
    left: "6%",
  },
  signIn: {
    backgroundColor: "#F9AD1B",
    padding: 10,
    alignItems: "center",
    width: "75%",
    alignSelf: "center",
    top: "32%",
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
    top: "35%",
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    top: "58%",
    alignSelf: "center",
  },
  descriptionText: {
    flexDirection: "row",
    textAlign: "center",
    top: "65%",
    fontSize: 16,
    fontWeight: "700",
    color: "grey",
  },
  signUp: {
    color: "#F9AD1B",
  },
});

export default SignUpScreen;
