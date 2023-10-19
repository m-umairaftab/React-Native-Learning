import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LandingImage from "../../src/Photos/LandingImage.png";
import { useNavigation } from "@react-navigation/native";
const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={LandingImage} style={styles.imageBackground}>
        <LinearGradient
          colors={["#642ED7", "#6B0AEA", "#000046"]}
          style={styles.dialogBox}
        >
          <View style={styles.myShopTxtBox}>
            <Text style={styles.myText}>My</Text>
            <Text style={{ ...styles.myText, color: "white" }}> Shop</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.descriptionTxt}>
              This is the dummy app for ecommerce shopping online products and
              this design is made by
              <Text style={{ color: "#F1CB04", fontWeight: "bold" }}>
                {" "}
                Umair Aftab
              </Text>
            </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
                Get Started
              </Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    height: "703px",
    width: "350px",
  },
  dialogBox: {
    height: "40%",
    borderTopLeftRadius: 52,
    borderTopRightRadius: 52,
  },
  myShopTxtBox: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
  },
  myText: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#F1CB04",
  },
  descriptionTxt: {
    color: "white",
    padding: 30,
  },
  btn: {
    width: "60%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1CB04",
    borderRadius: 30,
  },

  line: {
    width: "30%",
    borderBottomWidth: 3,
    borderColor: "#fff",
    borderRadius: 10,
    marginVertical: 30,
  },
});

export default LandingScreen;
