import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = ({ barStyle }) => {
  const isFocused = useIsFocused();
  return (
    isFocused && (
      <StatusBar
        barStyle={barStyle || "dark-content"}
        backgroundColor="transparent"
        animated={true}
        translucent={true}
        // {...props}
      />
    )
  );
};

export default FocusedStatusBar;
