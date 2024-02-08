import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useMemo, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { router } from "expo-router";

import Card from "../../components/card/Card";
import ModalWindow from "../../components/card/CardModal";
import useFetch from "../../shared/hooks/useFetch";
import color from "../../shared/constans/color";
import { IFetchCharacters } from "../../shared/types/type";
import { getUniqueOptions } from "../../shared/utils/getUniqueOptions";

const CharactersPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useFetch<IFetchCharacters>(
    `https://swapi.dev/api/people?page=${page}`
  );
  const selectData = useMemo(() => getUniqueOptions("eye_color", data), [data]);

  const [selectedColor, setSelectedColor] = useState(selectData[0].label);

  const header = (
    <>
      <Text style={style.title}>
        <Text style={style.titleSpan}>{data?.count} Peoples</Text> for you to
        choose your favorite
      </Text>
      <View style={style.selectWrapper}>
        <Text style={style.selectTitle}>color eye</Text>
        <Dropdown
          data={selectData}
          style={style.dropdown}
          containerStyle={style.dropdownList}
          labelField="label"
          valueField="value"
          value={selectedColor}
          onChange={(item) => {
            setSelectedColor(item.label);
          }}
        />
      </View>
    </>
  );
  const loader = !!loading && (
    <View style={style.loader}>
      <ActivityIndicator size="large" color="#1f2a63" />
    </View>
  );

  if (error) router.push("/404");

  if (!data)
    return (
      <View style={style.loaderTop}>
        <ActivityIndicator />
      </View>
    );
  const filteredData =
    selectedColor === "all"
      ? data.results
      : data.results.filter((item) => item.eye_color === selectedColor);

  const loadMore = () => {
    if (data.next && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <View style={style.container}>
      <FlatList
        data={filteredData}
        ListHeaderComponent={header}
        ListFooterComponent={loader}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        style={style.cardList}
        onEndReached={loadMore}
        renderItem={(item) => (
          <Card
            data={item.item}
            onPress={() => {
              setModalData(item.item);
              setModalVisible(true);
            }}
          />
        )}
      />
      <ModalWindow
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        data={modalData}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginTop: 50,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  titleSpan: {
    fontWeight: "700",
  },
  selectWrapper: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  selectTitle: {
    color: color.text,
    fontSize: 16,
  },
  dropdown: {
    flex: 1,
    maxWidth: 180,
    backgroundColor: color.backgroundGray,
    borderColor: "rgba(33, 33, 33, 0.1)",
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  dropdownList: {
    backgroundColor: color.backgroundGray,
    borderColor: "rgba(33, 33, 33, 0.1)",
    marginTop: 10,
  },
  cardList: {},
  loaderTop: {
    justifyContent: "center",
    marginTop: 10,
  },
  loader: {
    justifyContent: "center",
    paddingVertical: 20,
  },
});
export default CharactersPage;
