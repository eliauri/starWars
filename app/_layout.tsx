import { LinearGradient } from "expo-linear-gradient";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import Header from "../components/header/Header";

const Layout = () => {
  return (
    <LinearGradient colors={["#1f2a63", "#17002f"]} style={styles.container}>
      <Header />
      <Slot />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Layout;
