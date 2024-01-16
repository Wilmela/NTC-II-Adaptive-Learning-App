import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants";

const BackButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="md-arrow-back"
        size={30}
        color={COLORS.primary}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "4%",
    left: "5%",
    marginBottom: 70,
  },
});
export default BackButton;
