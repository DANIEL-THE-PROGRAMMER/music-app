import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";

export const CustomModal = ({ open, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={open}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.contextbox}>
          <Text
            style={{
              fontSize: 16,
              color: "#000",
              textAlign: "center",
            }}
          >
            You are requesting to switch to acoustic mode. Do you wish to
            proceed?
          </Text>
          <View style={styles.btncontainer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={[styles.btn, { backgroundColor: "#A33100" }]}>
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={[styles.btn, { backgroundColor: "#000" }]}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 20,
  },
  contextbox: {
    minHeight: 165,
    width: "90%",
    marginTop: 100,
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    gap: 25,
  },
  btncontainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 55,
    flexDirection: "row",
  },
  btn: {
    width: 67,
    height: 37,
    textAlign: "center",
    lineHeight: 37,
    fontSize: 14,
    color: "#fff",
    borderRadius: 35,
  },
});
