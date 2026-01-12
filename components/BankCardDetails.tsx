import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import MainCardDetails from "../src/assets/MainCardDetails";

const PHONE_WIDTH = Dimensions.get("window").width;
const BankCardDetails = () => {
  return (
    <View style={styles.container}>
      <MainCardDetails />
      <Text style={styles.titleText}>No master card added</Text>
      <Text style={styles.descriptionText}>
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

export default BankCardDetails;

const styles = StyleSheet.create({
  container: {
    marginVertical: s(20),
    marginHorizontal: s(16),
    backgroundColor: "#F7F8F9",
    width: s(327),
    height: vs(237),
    borderRadius: s(10),
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "#32343E",
    fontSize: 18,
    fontWeight: 700,
    paddingTop: vs(10),
  },
  descriptionText: {
    color: "#2D2D2D",
    fontSize: 16,
    paddingTop: s(6),
    width: PHONE_WIDTH / 2,
    textAlign: "center",
  },
});
