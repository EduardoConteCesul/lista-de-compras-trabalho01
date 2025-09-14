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
  },
  list: {
    flexGrow: 1,
  },
  containerTextBox: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  containerFlatList: {
    marginTop: 20,
    borderTopColor: "#D9D9D9",
    borderTopWidth: 1
  },
  textList: {
    flex: 1,
    alignItems: "center",
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingRight: 20 
  },
  textFlatListPrimary: {
    color: "#808080",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 19.6,
    marginTop: 16,
    
  },
  textFlatListSecundary: {
    color: "#808080",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 19.6,
  },
  
})