import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { s } from "react-native-size-matters";
import { TelegramIcon } from "../src/assets/Icons";

interface SocialsProps {
  title: String;
  icon: ReactNode;
}

const Socials: React.FC<SocialsProps> = ({ title, icon }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.socialIcon}>{icon}</View>
      <Text style={styles.socialText}>{title}</Text>
      <View style={styles.socialIconTelegram}>
        <TelegramIcon />
      </View>
    </View>
  );
};

export default Socials;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
    paddingBottom: s(12),
    marginVertical: s(12),
  },
  socialText: {
    color: "#8083A3",
    fontSize: 15,
    marginStart: 10,
    flex: 1,
  },
  socialIcon: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: s(23),
    width: s(46),
    height: s(46),
    borderColor: "#E4E6E8",
  },
  socialIconTelegram: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(23),
    width: s(46),
    height: s(46),
    backgroundColor: "#1077AF",
  },
});
