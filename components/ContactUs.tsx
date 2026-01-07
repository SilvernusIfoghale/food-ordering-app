import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Socials from "./Socials";
import {
  Instagram,
  SnapChat,
  TikTok,
  WhatsAppIcon,
  X,
} from "../src/assets/Icons";

const ContactUs = () => {
  const socialsContent = [
    { id: 1, title: "WhatsApp", icon: <WhatsAppIcon /> },
    { id: 2, title: "Twitter", icon: <X /> },
    { id: 3, title: "Instagram", icon: <Instagram /> },
    { id: 4, title: "Snap Chat", icon: <SnapChat /> },
    { id: 5, title: "Tik Tok", icon: <TikTok /> },
  ];
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Contact Us</Text>
      </View>
      {/* Social Media Platforms   */}
      <View style={styles.socialContainer}>
        <Text style={styles.titleText}>Social Media Platforms</Text>
        {socialsContent.map((item) => (
          <Socials title={item.title} icon={item.icon} key={item.id} />
        ))}
      </View>
    </>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    marginVertical: s(24),
  },
  text: {
    fontSize: s(28),
    fontWeight: 600,
    paddingLeft: s(10),
  },
  titleText: {
    fontWeight: 600,
    fontSize: s(16),
    paddingBottom: 13,
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    padding: s(18),
    borderRadius: s(14),
  },
});
