import { StyleSheet, View } from "react-native";
import React, { Component } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { s } from "react-native-size-matters";

export default class BackButton extends Component {
  render() {
    return (
      <View style={styles.icon}>
        <Ionicons name="chevron-back" size={18} color="#181C2E" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },
});
