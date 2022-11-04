import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, quizQuestions } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { BackButton } from "../components";

const QuizList = ({ navigation: { goBack, navigate } }) => {
  return (
    <>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <BackButton onPress={() => goBack()} />

      <View style={styles.container}>
        <Text style={styles.headingText}>Take a quiz on</Text>

        <View style={styles.subjectContainer}>
          <Text
            style={styles.subjects}
            onPress={() =>
              navigate("quiz", {
                questions: quizQuestions[0].questions,
              })
            }
          >
            1. Basic Electricity
          </Text>
          <Text
            style={styles.subjects}
            onPress={() =>
              navigate("quiz", {
                questions: quizQuestions[1].questions,
              })
            }
          >
            2. Domestic Installation
          </Text>
          <Text
            style={styles.subjects}
            onPress={() =>
              navigate("quiz", {
                questions: quizQuestions[2].questions,
              })
            }
          >
            3. Industrial Installation and Motors
          </Text>
          <Text
            style={styles.subjects}
            onPress={() =>
              navigate("quiz", {
                questions: quizQuestions[3].questions,
              })
            }
          >
            4. Cable Jointing
          </Text>
          <Text
            style={styles.subjects}
            onPress={() =>
              navigate("quiz", {
                questions: quizQuestions[4].questions,
              })
            }
          >
            5. Battery Charging
          </Text>
          <Text
            style={styles.subjects}
            onPress={() =>
              navigate("quiz", {
                questions: quizQuestions[5].questions,
              })
            }
          >
            6. Winding of Electrical Machines
          </Text>
        </View>
      </View>
    </>
  );
};

export default QuizList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    marginTop: "20%",
  },
  headingText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge + 5,
    color: COLORS.primary,
    textAlign: "center",
    marginVertical: "10%",
  },
  subjectContainer: {
    width: "100%",
    paddingHorizontal: "10%",
  },
  subjects: {
    fontFamily: FONTS.light,
    fontSize: SIZES.large,
    lineHeight: 35,

    color: COLORS.gray,
  },
});
