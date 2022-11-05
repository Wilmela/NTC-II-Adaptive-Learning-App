import { View, Text, Image, useWindowDimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import {ZoomableImage} from 'react-native-zoomable-image'

const HeadText = ({ children }) => (
  <Text
    style={{
      color: COLORS.primary,
      fontFamily: FONTS.bold,
      fontSize: SIZES.extraLarge,
    }}
  >
    {children}
  </Text>
);

const SubHeadText = ({ children }) => (
  <Text
    style={{
      color: COLORS.secondary,
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.large + 2,
      marginTop: SIZES.font,
    }}
  >
    {children}
  </Text>
);

const ParagraphText = ({ children }) => (
  <Text
    style={{
      color: COLORS.gray,
      fontFamily: FONTS.regular,
      fontSize: SIZES.large - 1,
      marginTop: SIZES.base - 2,
      lineHeight: 26,
    }}
  >
    {children}
    {"\n"}
  </Text>
);

const LessonImage = ({ imgUrl }) => {
  const { height, width } = useWindowDimensions();
  return (
    <View>
      <ZoomableImage
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: width / 1.1,
          height: height / 2.9,
          marginVertical: SIZES.base - 10,
        }}
      />
    </View>
  );
};

const BodyText = (props) => (
  <View
    {...props}
    style={{
      paddingVertical: SIZES.font,
      paddingHorizontal: SIZES.font,
      width: "100%",
    }}
  >
    {props.children}
  </View>
);

export { HeadText, SubHeadText, BodyText, ParagraphText, LessonImage };
