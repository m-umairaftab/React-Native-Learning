import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Button = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
        Get Started
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "60%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1CB04",
    borderRadius: 30,
  },
});

export default Button;
