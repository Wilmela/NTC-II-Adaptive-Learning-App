import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const AppButton = ({ title, style, color, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.btn, ...style }} onPress={onPress}>
      <Text style={{ ...styles.text, color }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 35,
    paddingVertical: "8%",
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontFamily: FONTS.light,
    color: COLORS.white,
    fontSize: SIZES.large,
  },
});
