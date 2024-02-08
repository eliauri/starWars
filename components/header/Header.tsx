import { Link, router } from "expo-router";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavLink from "./NavLink";
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ width: "20%" }}
          onPress={() => router.navigate("/")}
        >
          <Image
            source={require("../../shared/assets/logo.png")}
            style={{ width: "100%", resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <View style={styles.links}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/characters">Characters</NavLink>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    borderBottomColor: "rgba(255, 255, 255, 0.25);",
    borderBottomWidth: 2,
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  links: {
    flexDirection: "row",
    gap: 10,
  },
});
export default Header;
