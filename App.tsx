import { StyleSheet, View } from "react-native";
import IntroScreen from "./screens/IntroScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import PaymentScreen from "./screens/PaymentScreen";

export default function App() {
  return (
    <SafeAreaView>
      {/* <IntroScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <HomeScreen /> */}
      <PaymentScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
