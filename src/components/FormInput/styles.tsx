import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexWrap: "nowrap",
    position: "relative",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    borderStyle: "solid"
  },    
  textInput: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    height: 54,
    padding: 16,
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 5,
    color: "#808080",    
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: 22.4
  },
  button: {
    backgroundColor: "#31C667",
    height: 52,
    width: 52,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  }
})