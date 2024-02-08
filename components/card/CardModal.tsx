import { Modal, StyleSheet, View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ICharacters } from "../../types/type";
import Size from "../Size";
import Tags from "./Tags";

const hermaphroditeIcon = require("../../shared/assets/genders/hermaphrodite.png");
const maleIcon = require("../../shared/assets/genders/male.png");
const femailIcon = require("../../shared/assets/genders/female.png");

enum gendersImg {
  male = maleIcon,
  female = femailIcon,
  hermaphrodite = hermaphroditeIcon,
  "n/a" = hermaphroditeIcon,
}
interface ModalProps {
  visible: boolean;
  data: ICharacters;
  closeModal: (arg) => void;
}
const ModalWindow = ({ visible, closeModal, data }: ModalProps) => {
  if (!data) return;

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        closeModal(false);
      }}
    >
      <View style={styles.modalcentred}>
        <View style={styles.modalView}>
          <Pressable style={styles.close} onPress={closeModal}>
            <Image
              source={require("../../shared/assets/closeIcon.png")}
              style={{ width: "100%", resizeMode: "contain" }}
            />
          </Pressable>

          <View style={styles.poster}>
            <View style={{ maxHeight: 200 }}>
              <Image
                source={gendersImg[data.gender]}
                style={{ objectFit: "contain", height: "100%" }}
              />
            </View>
            <Tags data={{ birth_year: data.birth_year, gender: data.gender }} />
          </View>
          <LinearGradient colors={["#1f2a63", "#17002f"]} style={styles.info}>
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.infoList}>
              <Text>hair color: {data.hair_color}</Text>
              <Text>skin color - {data.skin_color} </Text>
              <Text>eye color: {data.eye_color}</Text>
            </View>
            <View style={styles.sizes}>
              <View style={styles.sizeWrapper}>
                <Size label="Height" value={data.height} />
              </View>
              <View style={styles.sizeWrapper}>
                <Size label="Mass" value={data.mass} />
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalcentred: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
    width: "90%",
  },
  close: {
    position: "absolute",
    top: -30,
    right: 0,
    width: 25,
  },
  poster: {
    backgroundColor: "#1F2A63",
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  info: {
    width: "100%",
    padding: 20,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  infoList: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  sizes: {
    flexDirection: "row",
    gap: 20,
    marginTop: 15,
  },
  sizeWrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
  },
});

export default ModalWindow;
