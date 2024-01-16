import { View, StyleSheet } from "react-native";

import { Hero } from "../components";

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
