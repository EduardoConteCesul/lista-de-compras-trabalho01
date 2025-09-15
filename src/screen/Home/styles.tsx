import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  box: {
    flex: 1,
    marginTop: -27,
    paddingLeft: 24,
    paddingRight: 24
  },
  textBoxFlatList: {
    marginTop: 57,
    flexDirection: "column"
  },
  textFinalizados: {
    color: "#7A4A9E",
    fontSize: 14,
    fontWeight: 700
  },
  list: {
    flexGrow: 1,
    gap: 8
  },
  containerTextBox: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  containerFlatList: {
    marginTop: 20,
  }
})