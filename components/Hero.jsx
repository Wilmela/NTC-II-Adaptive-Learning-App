import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Vibration,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import AppButton from "../components/AppButton";
import { COLORS, FONTS, SIZES } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Linking } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";


const Hero = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <FocusedStatusBar barStyle="light-content" />

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/ADApp-bg.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.welcome}>WELCOME</Text>
          <Text style={styles.title}>
            NTC-II ELECTRICAL INSTALLATION WORKS ADAPTIVE LEARNING APP.
          </Text>
          <View style={styles.instructorWrapper}>
            <Text style={styles.instructor}>
              Instructor - Onuotu, Lionel Young
            </Text>
          </View>
          <View style={styles.contact}>
            <Ionicons
              name="md-phone-portrait-outline"
              size={20}
              color={`${COLORS.white}`}
              onPress={() => Linking.openURL("tel: +2348064757934")}
            />
            <Ionicons
              name="md-logo-whatsapp"
              size={20}
              color={`${COLORS.white}`}
              onPress={() =>
                Linking.openURL("whatsapp://send?=hello&phone=+2348064757934")
              }
            />
            <Ionicons
              name="md-mail-outline"
              size={20}
              color={`${COLORS.white}`}
              onPress={() => Linking.openURL("mailto: onuotuyoung@gmail.com")}
            />
          </View>

          <View style={styles.btn}>
            <AppButton
              title="Learn"
              color={`${COLORS.white}`}
              style={{
                marginBottom: "5%",
                backgroundColor: COLORS.secondary,
              }}
              onPress={() => {
                Vibration.vibrate(100);
                navigate("subjects");
              }}
            />
            <AppButton
              title="Quiz"
              color={`${COLORS.white}`}
              onPress={() => {
                Vibration.vibrate(100);
                navigate("quizList");
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",

    alignItems: "center",
  },
  btn: {
    position: "absolute",
    bottom: "8%",

    width: "50%",
  },
  welcome: {
    fontFamily: FONTS.bold,
    fontSize: RFPercentage(6),
    color: COLORS.white,
    position: "absolute",
    top: '25%',
  },
  title: {
    color: "#ccc",
    fontFamily: FONTS.bold,
    fontSize: RFPercentage(2.7),

    position: "absolute",
    top: "43%",
    lineHeight: 40,
    textAlign: "center",
  },
  instructorWrapper: {
    width: "70%",
    position: "absolute",
    bottom: "40.5%",
    right: 0,
  },
  instructor: {
    color: COLORS.white,
    fontFamily: FONTS.light,
    fontSize: SIZES.large - 2,
  },
  contact: {
    width: "41%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: "36%",
    right: 0,
  },
});
export default Hero;
//eas build -p android --profile preview
