import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import { s, vs } from "react-native-size-matters";
import { CashIcon } from "../src/assets/Icons";
import Entypo from "@expo/vector-icons/Entypo";

interface PaymentCardProps {
  isSelected: boolean;
  name: string;
  icon: ReactNode;
  onPress: () => void;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  isSelected = false,
  name,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isSelected && (
        <View style={styles.checked}>
          <Entypo name="check" size={16} color="white" />
        </View>
      )}
      <View style={[styles.card, isSelected && styles.selected]}>{icon}</View>
      <View>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    width: s(85),
    height: s(93),
    justifyContent: "center",
    alignItems: "center",
    gap: s(5),
    // marginRight: s(14),
  },
  card: {
    width: s(85),
    height: s(72),
    backgroundColor: "#F0F5FA",
    borderRadius: s(9.62),
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    color: "#464E57",
    fontSize: 14,
    fontWeight: 400,
  },
  selected: {
    borderWidth: 2,
    borderColor: "#FF7622",
    borderRadius: s(9.62),
    backgroundColor: "#ffffff",
  },
  checked: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    right: -4,
    top: -7,
    width: s(24),
    height: s(24),
    borderRadius: s(12),
    backgroundColor: "#FF7622",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
});
