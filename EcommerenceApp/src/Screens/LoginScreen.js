import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dialogBox}>
        <Text style={styles.dialogText}>Account Varification</Text>
      </View>
      <View style={{}}>
        <Text style={styles.Text}>
          Please enter your email to verify your account.
        </Text>
      </View>
      <View style={{}}>
        <TextInput
          style={styles.input}
          placeholder="Write Your Email"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
            Send Varification Code
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ top: "35%", alignSelf: "center" }}>
          <Text style={{ color: "grey", fontSize: 22, fontWeight: "bold" }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dialogBox: {
    height: "20%",
    backgroundColor: "#642ED7",
    borderBottomRightRadius: 200,
  },
  dialogText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 36,
    top: "50%",
    left: "10%",
  },
  Text: {
    top: "10%",
    paddingHorizontal: "10%",
    fontWeight: "400",
    lineHeight: 24,
    fontSize: 18,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderRadius: 15,
    fontSize: 15,
    color: "grey",
    backgroundColor: "lightgrey",
    top: "20%",
  },
  btn: {
    width: "80%",
    // height: "20%",
    padding: 10,
    top: "30%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1CB04",
    borderRadius: 30,
  },
});

export default LoginScreen;
