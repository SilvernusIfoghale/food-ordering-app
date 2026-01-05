import { StyleSheet, View } from "react-native";
import React from "react";
import FoodLogo from "../src/assets/FoodLogo";
import SunIcon from "../src/assets/SunIcon";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <SunIcon style={styles.sunIcon} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sunIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
