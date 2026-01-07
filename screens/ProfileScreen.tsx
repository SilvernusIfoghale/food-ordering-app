import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s } from "react-native-size-matters";
import ContactUs from "../components/ContactUs";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <BackButton />
        <UserAvatar />
      </View>
      <View>
        <ContactUs />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(8),
    paddingTop: s(4),
  },
  topContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
