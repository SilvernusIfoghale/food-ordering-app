import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentCard from "../components/PaymentCard";
import {
  CashIcon,
  MasterCardIcon,
  PayPalIcon,
  VisaIcon,
} from "../src/assets/Icons";
import BankCardDetails from "../components/BankCardDetails";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentScreen = () => {
  const cardDetails = [
    { id: 1, name: "Cash", icon: <CashIcon /> },
    { id: 2, name: "Visa", icon: <VisaIcon /> },
    { id: 3, name: "MasterCard", icon: <MasterCardIcon /> },
    { id: 4, name: "PayPal", icon: <PayPalIcon /> },
  ];
  const [selectedCard, setSelectedCard] = useState("");

  return (
    <SafeAreaView>
      <View>
        <View style={styles.nav}>
          <BackButton />

          <Text style={styles.navText}>Payment</Text>
        </View>
        <View>
          <FlatList
            data={cardDetails}
            renderItem={({ item }) => (
              <PaymentCard
                isSelected={selectedCard === item.name}
                name={item.name}
                icon={item.icon}
                onPress={() => setSelectedCard(item.name)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: s(14), padding: s(16) }}
          />
        </View>
        <View>
          <BankCardDetails />
        </View>
        {/* Add new button  */}
        <View>
          <Pressable style={styles.addButton}>
            <AntDesign name="plus" size={18} color="#FF7622" />
            <Text style={styles.addText}>ADD NEW</Text>
          </Pressable>
        </View>
        {/* total  */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>TOTAL:</Text>
          <Text style={styles.totalPriceText}>$96</Text>
        </View>
        {/* Pay & confirm button  */}
        <View>
          <Pressable style={styles.payButton}>
            <Text style={styles.payText}>PAY & CONFIRM</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: s(14),
    marginBottom: s(7),
  },
  navText: {
    fontSize: s(14),
  },
  addButton: {
    borderColor: "#F0F5FA",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#ffffff",
    width: s(327),
    height: vs(45),
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    marginVertical: vs(10),
  },
  addText: {
    color: "#FF7622",
    fontWeight: 700,
    fontSize: 15,
  },
  totalContainer: {
    marginVertical: vs(10),
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  totalText: {
    color: "#A0A5BA",
    fontWeight: 500,
    fontSize: 15,
    marginStart: s(14),
  },
  totalPriceText: {
    color: "#181C2E",
    fontWeight: 400,
    fontSize: 30,
    // marginStart: s(14),
  },
  payButton: {
    borderRadius: 10,
    backgroundColor: "#FF7622",
    width: s(327),
    height: vs(45),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    marginVertical: vs(10),
  },
  payText: {
    color: "#ffffff",
    fontWeight: 700,
    fontSize: 15,
  },
});
