import { View, Text, StyleSheet } from "react-native";
interface Props {
  label: string;
  value: string;
}
const Size = ({ label, value }: Props) => {
  return (
    <View>
      <View style={styles.border}>
        <Text style={styles.sizeText}>{value}</Text>
      </View>
      <Text style={styles.sizeTitle}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  sizeText: {
    fontSize: 16,
  },
  sizeTitle: {
    marginTop: 5,
    textAlign: "center",
    color: "#4b4b4b",
  },
  border: {
    borderColor: "#000",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});
export default Size;
