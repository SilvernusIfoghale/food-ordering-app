import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { s, vs } from "react-native-size-matters";
import MainCardDetails from "../src/assets/MainCardDetails";
import LottieView from "lottie-react-native";

const PHONE_WIDTH = Dimensions.get("window").width;
const BankCardDetails = () => {
  const animation = useRef<LottieView>(null);
  // useEffect(() => {
  // animation.current?.play();
  // }, []);
  return (
    <View style={styles.container}>
      {/* <MainCardDetails /> */}
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../assets/CreditCard.json")}
      />
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
