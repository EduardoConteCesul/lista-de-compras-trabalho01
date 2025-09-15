import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  testeView: {
    flexDirection: "row",
    height: 56,
    borderWidth: 1,
    borderColor: "#808080",
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    padding: 12,
    gap: 8
  },
  testeOpacityItem: {
    flex: 1,
    gap: 8,
    flexDirection: "row",
    height: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: "center",
  },
  testeOpacityRemoveItem: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 8,
    borderBottomEndRadius: 8
  },
  text: {
    fontSize: 14,
    textAlignVertical: "center",
    fontWeight: 400,
    lineHeight: 19.6,
    color: "#262626"
  },
  textSeleted: {
    fontSize: 14,
    textAlignVertical: "center",
    fontWeight: 400,
    lineHeight: 19.6,
    color: "#808080",
    textDecorationLine: "line-through"
  }
})