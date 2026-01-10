import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { Camera } from "../src/assets/Icons";

interface MeditationCardProps {
  title: string;
  imageUri: string;
  date: string;
}

const PHONEWIDTH = Dimensions.get("window").width;
const CARDWIDTH = (PHONEWIDTH - s(12) * 3) / 2; //equal spaces of 16px and for the 3 sections (left, middle, and right) then half of the screen

const MeditationCard: React.FC<MeditationCardProps> = ({
  title,
  imageUri,
  date,
}) => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: imageUri,
        }}
        style={styles.imageContainer}
        imageStyle={styles.imageMain}
      >
        <View style={styles.overlay} />
        <View style={styles.liveContainer}>
          <Text style={styles.liveText}>Live</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.meditationText}>{title}</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Camera />
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imageContainer: {
    width: CARDWIDTH,
    height: vs(145),
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  imageMain: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.50)",
  },
  liveContainer: {
    position: "absolute",
    right: 7,
    top: 7,
    justifyContent: "center",
    alignItems: "center",
    height: vs(22),
    width: s(39),
    borderRadius: 90,
    backgroundColor: "#E41111",
    overflow: "hidden",
  },
  liveText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: 600,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 7,
    marginStart: 13,
  },
  meditationText: {
    fontWeight: 600,
    fontSize: s(12),
    color: "#ffffff",
  },
  dateText: {
    fontWeight: 400,
    fontSize: s(12),
    color: "#ffffff",
  },
  bottomTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingTop: 2,
  },
});
