import { StyleSheet, View, Text } from "react-native";
import color from "../../shared/constans/color";

interface Props {
  data: {
    birth_year: string;
    gender: string;
  };
}
const Tags = ({ data }: Props) => {
  return (
    <View style={styles.tags}>
      {data.birth_year !== "unknown" && (
        <View style={[styles.tag, styles.tag_birh]}>
          <Text style={styles.genderTitle}>{data.birth_year}</Text>
        </View>
      )}

      {data.gender !== "n/a" && (
        <View style={[styles.tag, styles["gender_" + data.gender]]}>
          <Text style={styles.genderTitle}>{data.gender}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 11,
  },
  tag_birh: {
    backgroundColor: "#07d6f2",
  },
  gender_male: {
    backgroundColor: color.green,
  },
  gender_female: {
    backgroundColor: color.purple,
  },
  gender_hermaphrodite: {
    backgroundColor: color.lightYellow,
  },
  genderTitle: {
    textAlign: "center",
  },
});

export default Tags;
