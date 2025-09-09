import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  box: {
    flex: 1,
    marginTop: -27,
    borderColor: "#1c19dd",
    borderWidth: 1
  },
  textBoxFlatList: {
    marginTop: 57,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  textProducts: {
    color: "#31C667",
    fontSize: 14,
    fontWeight: 700
  },
  textFinalizados: {
    color: "#7A4A9E",
    fontSize: 14,
    fontWeight: 700
  },
  textBox: {
    flexDirection: "row",
    gap: 8
  },
  textCount: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Inter",
    color: "#333",
    backgroundColor: "#D9D9D9",
    borderRadius: 999,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2, 
    paddingBottom: 2, 
  }
})