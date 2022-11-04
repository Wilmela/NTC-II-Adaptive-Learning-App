import { FlatList, StyleSheet, View } from "react-native";
import { BackButton, SubjectCard } from "../components";
import { COLORS } from "../constants";
import subjects from '../constants/subjects';
import FocusedStatusBar from "../components/FocusedStatusBar";

const Subjects = ({ navigation: { goBack } }) => {
  return (
    <>
      <FocusedStatusBar/>
      <BackButton onPress={() => goBack()} />

      <View style={styles.container}>
        <FlatList
          data={subjects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SubjectCard
              subject={item.id}
              topics={item.topics}
              imgUrl={item.imgUrl}
              code={item.code}
            />
          )}
        />
      </View>
    </>
  );
};

export default Subjects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    marginTop: "20%",
  },
});
