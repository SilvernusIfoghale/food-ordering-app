import { StyleSheet, View } from "react-native";
import IntroScreen from "./screens/IntroScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView>
      {/* <IntroScreen /> */}
      {/* <ProfileScreen /> */}
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
