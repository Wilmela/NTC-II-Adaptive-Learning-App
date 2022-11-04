import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
  Vibration,
} from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";

const screenWidth = Dimensions.get("window").width;

const QuizFinish = ({ route, navigation }) => {
  const { score, missed, questions } = route.params;
  const { height } = useWindowDimensions();
  return (
    <>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={styles.container}>
        <View style={{ height: height / 2.5 }}>
          <Image
            source={images.finish}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={styles.info}>
          <Text
            style={{
              fontFamily: FONTS.light,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            {score < 50 && "This is a NO NO, try again.."}
            {score > 50 && score < 70 && "Good job, you can do better."}
            {score > 70 && score < 100 && "Almost perfect, one more try."}
            {score == 100 && "Perfect, Now try another quiz."}
          </Text>
          <Text style={{ ...styles.text, ...{ color: COLORS.primary } }}>
            Your score is : {score}
          </Text>
          <Text style={styles.text}>
            You Missed : {missed} out of {questions}
          </Text>
        </View>

        <View style={styles.btn}>
          <Text
            onPress={() => {
              Vibration.vibrate(100);
              navigation.navigate("home");
            }}
            style={styles.goHome}
          >
            Go Home
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  text: {
    fontFamily: FONTS.medium,
    fontSize: screenWidth < 350 ? 16 : 20,
    marginTop: "10%",
    color: COLORS.primary,
  },
  info: {
    flex: 4.5,
    alignItems: "center",
  },
  btn: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  goHome: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    fontSize: SIZES.extraLarge,
  },
});

export default QuizFinish;
