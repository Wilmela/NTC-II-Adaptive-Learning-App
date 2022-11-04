import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Vibration,
  Alert,
  LogBox,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTS, SIZES } from "../constants";
import { BackButton } from "../components";
import FocusedStatusBar from "../components/FocusedStatusBar";

const Lesson = ({ route, navigation: { navigate } }) => {
  const { data, topics, index } = route.params;

  const currentIndex = useRef(index).current;

  const [completed, setCompleted] = useState(topics[currentIndex].completed);


  const completeATopic = async () => {
    try {
      const res = JSON.stringify(topics[currentIndex]);
      await AsyncStorage.setItem("@topic", res);

      if (currentIndex > 2) {
        Alert.alert(
          "Bravo!🎉🍾",
          "You have successfully completed this module, take a break and see you in class again! - Onuotu, Lionel Young"
        );
        return navigate("subjects");
      }

      if (!topics[currentIndex] === 0 && topics[currentIndex].completed) return;

      setCompleted((topics[currentIndex + 1].completed = true));

    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchData = async () => {
    try {
      const res = await AsyncStorage.getItem("@topic");

      return JSON.parse(res) || null;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();

  }, [data, completed]);

  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  return (
    <>
        <FocusedStatusBar />
        <BackButton onPress={() => navigate("subjects")} />

      <View style={styles.container}>
        {completed && (
          <ScrollView style={styles.content}>
            <View key={index} style={{ marginBottom: "5%" }}>
              {data}
            </View>

            <View style={styles.btn}>
              <Text
                style={styles.unlock}
                onPress={() => {
                  Vibration.vibrate(100);
                  completeATopic();
                  navigate("subjects");
                }}
              >
                {currentIndex > 2
                  ? "Finish the module "
                  : "Press to unlock the next lesson"}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
    backgroundColor: COLORS.bg,
  },
  content: {
    flex: 1,
    height: "100%",
  },
  unlock: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
  },
  btn: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    alignItems: "center",
  },
});
export default Lesson;
