import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { BackButton } from "../components";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../constants";
import { Linking } from "react-native";

const Videos = ({ navigation: { goBack } }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const regex = /^[A-Za-z0-9]+$/;

  const search = (text) => {
    setSearchTerm(text);
    Linking.openURL(
      `https://www.youtube.com/results?search_query=${searchTerm}`
    );
  };
  return (
    <>

      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <BackButton onPress={() => goBack()} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.title}>videos</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={searchTerm}
              onChangeText={(text) => {
                if (text === "" || regex.test(text)) setSearchTerm(text);
              }}
              style={styles.input}
              autoFocus
              placeholder="Ask Youtube"
            />

            <View style={styles.btn}>
              <Button title="Search" onPress={search} color={COLORS.primary} />
            </View>
          </View>

          <View style={styles.links}>
            <Text
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=mc979OhitAg")
              }
              style={styles.link}
            >
              1. Basic Electricity
            </Text>

            <Text
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=syaGf_XUMxA")
              }
              style={styles.link}
            >
              2. Domestic Installation
            </Text>

            <Text
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=lNtmo5dK54o")
              }
              style={styles.link}
            >
              3. Industrial Installation and Electric Motors
            </Text>

            <Text
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=N8F6KcfB9Go")
              }
              style={styles.link}
            >
              4. Cable Jointing
            </Text>

            <Text
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=clVrcG8jV7Y")
              }
              style={styles.link}
            >
              5. Battery Charging and Repairs
            </Text>
            <Text
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=YYQayMrK4Fo")
              }
              style={styles.link}
            >
              6. Winding of Electrical Machines
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    marginTop: "20%",
    alignItems: "center",
  },
  title: {
    marginTop: "10%",
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge + 5,
    color: COLORS.primary,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    marginTop: "10%",

    marginBottom: "3%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray,

    width: "80%",
  },
  btn: {
    width: "30%",
    paddingVertical: "2%",
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  links: {
    marginTop: "10%",
    width: "100%",
    paddingHorizontal: "10%",
  },
  link: {
    fontFamily: FONTS.light,
    fontSize: SIZES.large,
    lineHeight: 35,

    color: COLORS.gray,
  },
});
export default Videos;
