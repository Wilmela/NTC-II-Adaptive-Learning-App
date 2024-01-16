import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from "react-native";
import { useFonts } from "expo-font";

import { COLORS } from "./constants";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Home,
  Subjects,
  Topics,
  Quiz,
  Lesson,
  QuizList,
  QuizFinish,
  Videos,
} from "./screens";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  const { Navigator, Screen } = createNativeStackNavigator();

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!loaded) return null;

  const hideHeader = {
    headerShown: false
  };

  const StackNav = () => {
    return (
      <Navigator>
        <Screen name="home" component={Home} options={hideHeader} />
        <Screen name="subjects" component={Subjects} options={hideHeader} />
        <Screen name="topics" component={Topics} options={hideHeader} />
        <Screen name="lesson" component={Lesson} options={hideHeader} />
        <Screen name="quiz" component={Quiz} options={hideHeader} />
        <Screen name="quizList" component={QuizList} options={hideHeader} />
        <Screen name="quizFinish" component={QuizFinish} options={hideHeader} />
      </Navigator>
    );
  };

  const VidStack = () => {
    return (
      <Navigator>
        <Screen name="videos" component={Videos} options={hideHeader} />
      </Navigator>
    );
  };

  const BTab =
    Platform.OS === "android"
      ? createMaterialBottomTabNavigator()
      : createBottomTabNavigator();
  return (
    <NavigationContainer theme={theme}>
      <BTab.Navigator
        activeColor={COLORS.white}
        shifting={true}
        barStyle={{ backgroundColor: COLORS.primary }}
      >
        <BTab.Screen
          name="Home"
          component={StackNav}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-home" size={28} color={color} />
            ),
            tabBarLabel: "Home",
          }}
        />
        <BTab.Screen
          name="Videos"
          component={VidStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-videocam" size={28} color={color} />
            ),
            tabBarLabel: "Videos",
          }}
        />
      </BTab.Navigator>
    </NavigationContainer>
  );
}
