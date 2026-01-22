import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleTop}>Meditations</Text>
          <Text style={styles.titleBottom}>
            Lorem Ipsum is simply dummy text
          </Text>
        </View>
        <View>
          <TopTabs />
          <FlatList
            data={dummyData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MeditationCard
                title={item.title}
                date={item.date}
                imageUri={item.image}
              />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: vs(16),
            }}
            contentContainerStyle={{
              paddingBottom: vs(100),
              paddingTop: vs(10),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(8),
    paddingTop: s(4),
  },
  topContainer: {
    marginBottom: 16,
  },
  titleTop: {
    fontSize: 20,
    fontWeight: 600,
    color: "#1D150F",
  },
  titleBottom: {
    fontSize: 14,
    paddingTop: 6,
  },
});
