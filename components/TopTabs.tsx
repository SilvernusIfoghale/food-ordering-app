import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const ACTIVE_TAB = "#75563B";
const INACTIVE_TAB = "#F5F5F4";

const ACTIVE_TEXT = "#FFFFFF";
const INACTIVE_TEXT = "#2C2016";

const tabs = ["Live", "Recorded"];

const TopTabs = () => {
  const [activatedTab, setActivatedTab] = useState("Live");
  return (
    <View style={styles.container}>
      {tabs.map((item, index) => {
        const isActive = activatedTab === item;
        return (
          <Pressable
            onPress={() => setActivatedTab(item)}
            style={[
              styles.buttons,
              isActive ? styles.activeTab : styles.inactiveTab,
            ]}
            key={index}
          >
            <Text
              style={[
                styles.btnText,
                isActive ? styles.activeText : styles.inactiveText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    padding: s(4),
    height: vs(40),
  },
  buttons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: s(10),
    height: vs(32),
    borderRadius: s(8),
  },
  btnText: {
    fontWeight: 600,
    fontSize: 14,
  },
  activeTab: {
    backgroundColor: ACTIVE_TAB,
  },
  inactiveTab: {
    backgroundColor: INACTIVE_TAB,
  },
  activeText: {
    color: ACTIVE_TEXT,
  },
  inactiveText: {
    color: INACTIVE_TEXT,
  },
});
