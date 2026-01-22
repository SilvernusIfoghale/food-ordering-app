import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import FoodLogo from "../src/assets/FoodLogo";
import SunIcon from "../src/assets/SunIcon";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  HomeScreen: undefined;
};

const IntroScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);
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
