import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        }}
        style={styles.image}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  image: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
  },
});
