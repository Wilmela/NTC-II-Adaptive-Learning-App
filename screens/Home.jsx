import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Hero, SubjectCard } from "../components";
import { COLORS } from "../constants";

const Home = () => {
  return (
    <View style={styles.container}>
      <Hero />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
