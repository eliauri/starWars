import { View, Text, StyleSheet, Pressable } from "react-native";
import Size from "../Size";
import { ICharacters } from "../../shared/types/type";
import color from "../../shared/constans/color";
import { memo } from "react";
import Tags from "./Tags";

interface Props {
  onPress: () => any;
  data: ICharacters;
}
const Card = memo(({ onPress, data }: Props) => {
  return (
    <Pressable onPress={onPress} style={style.card}>
      <View style={style.cardWrapper}>
        <Text style={style.name}>{data.name}</Text>
        <View style={style.sizes}>
          <Size label="Height" value={data.height} />
          <Size label="Mass" value={data.mass} />
        </View>
        <Tags data={{ birth_year: data.birth_year, gender: data.gender }} />
      </View>
    </Pressable>
  );
});
const style = StyleSheet.create({
  card: {
    flex: 1,
  },
  cardWrapper: {
    backgroundColor: color.backgroundGray,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: "rgba(33, 33, 33, 0.1)",
    borderWidth: 1,
    marginTop: 10,
  },

  name: {
    color: color.text,
    fontSize: 18,
    fontWeight: "600",
  },
  sizes: {
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
  },
});
export default Card;
