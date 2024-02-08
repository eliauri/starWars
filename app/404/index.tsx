import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../shared/assets/404.png")}
        style={{ objectFit: "contain", width: "100%" }}
      />
      <Pressable style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Return</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#73D677",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 170,
  },
  buttonText: {},
});

export default index;
