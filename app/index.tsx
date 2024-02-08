import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import color from "../shared/constans/color";

const HomePage = () => {
  const onPressButton = () => {
    router.navigate("/characters");
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainText}>
          <Text style={styles.boldText}>Find</Text> all your favorite{" "}
          <Text style={styles.boldText}>character</Text>
        </Text>
        <Text style={styles.descriptionText}>
          You can find out all the information about your favorite characters
        </Text>
        <Pressable style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonText}>See more...</Text>
        </Pressable>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 50,
  },
  mainText: {
    color: "#fff",
    fontSize: 55,
  },
  boldText: {
    fontWeight: "700",
  },
  descriptionText: {
    color: "#fff",
    fontSize: 25,
    marginTop: 25,
  },
  button: {
    marginTop: 30,
    backgroundColor: color.yellow,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 170,
  },
  buttonText: {
    color: color.text,
    fontSize: 20,
  },
});

export default HomePage;
