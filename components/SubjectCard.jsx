import { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from "react-native";

import SelectDropdown from "react-native-select-dropdown";
import { FONTS, SHADOWS, SIZES, COLORS } from "../constants";
import AppButton from "./AppButton";

import quizQuestions from "../constants/QuizQuestions";

const SubjectCard = ({ code, subject, imgUrl, topics }) => {
  const { height } = useWindowDimensions();

  const { navigate } = useNavigation();

  //Topic mapping
  const info = (selectedItem, topics, index) => {
    return {
      data: topics.map((topic) => {
        if (topic.title === selectedItem) {
          return topic.content;
        } else {
          return "";
        }
      }),
      topics,
      index,
    };
  };

  const focalTitle = (index) => topics[index - 1].title;

  //Scale animation
  const scaleValue = useRef(new Animated.Value(0)).current;
  const cardScale = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.1],
  });

  const init = () => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const end = () => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  // const fadeAnim = useRef(new Animated.Value(0)).current;
  // const [isFading, setIsFading] = useState(false);

  // const fadeIn = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 800,
  //     useNativeDriver: true,
  //   }).start();
  // };
  // const fadeOut = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 100,
  //   }).start();
  // };

  // useEffect(() => {
  //   setIsFading(true);

  //   isFading && fadeIn();
  // }, []);

  return (
    <TouchableWithoutFeedback onPressIn={init} onPressOut={end}>
      <Animated.View
        style={{
          ...styles.container,
          height: height / 2.2,
          transform: [{ scale: cardScale }],
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={imgUrl}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={styles.textAndBtn}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{subject}</Text>
          </View>

          <View style={styles.btnContainer}>
            <SelectDropdown
              defaultButtonText="Topics"
              data={topics.map((subject) => subject.title)}
              onSelect={(selectedItem, index) => {
                {
                  index === 0 || topics[index].completed
                    ? navigate("lesson", info(selectedItem, topics, index))
                    : Alert.alert(
                        "PAUSE✋🏾",
                        `Have you completed the lesson on ${focalTitle(
                          index
                        )}? If NO, Please go back and complete the lessons  - Onuotu, Lionel Young`,
                        [
                          {
                            text: "YES",
                            onPress: () => {
                              if (!topics[index].completed)
                                return Alert.alert(
                                  "STOP🛑",
                                  `Hey, don't cheat, You must complete lesson on ${focalTitle(
                                    index
                                  )} before proceeding.`,
                                  [{ text: "GO BACK", style: "destructive" }]
                                );

                              navigate(
                                "subjects",
                                info(selectedItem, topics, index)
                              );
                            },
                            style: "default",
                          },
                          {
                            text: "NO",
                            onPress: () => {
                              navigate("subjects");
                            },
                            style: "cancel",
                          },
                        ]
                      );
                }
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={{
                width: "35%",
                borderRadius: 35,
                height: "100%",
              }}
              buttonTextStyle={{
                fontFamily: FONTS.light,
                color: COLORS.primary,
              }}
              dropdownStyle={{
                width: "80%",
                borderRadius: 5,
                backgroundColor: COLORS.white,
              }}
              selectedRowTextStyle={{
                color: COLORS.primary,
              }}
              dropdownOverlayColor="transparent"
            />
            <View style={styles.btn}>
              <AppButton
                color={COLORS.white}
                title="Quiz"
                onPress={() =>
                  navigate("quiz", {
                    questions: quizQuestions[code].questions,
                  })
                }
              />
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: "5%",
    margin: "5%",
    padding: "5%",

    justifyContent: "space-between",

    backgroundColor: COLORS.white,

    borderRadius: 10,

    ...SHADOWS.light,
  },
  imageContainer: {
    height: "55%",
  },

  titleContainer: {},
  title: {
    marginTop: "2.5%",
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "2.5%",
  },
  btn: {
    width: "35%",
  },
  textAndBtn: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "40%",
  },
});

export default SubjectCard;
