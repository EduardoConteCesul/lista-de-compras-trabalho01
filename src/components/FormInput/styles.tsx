import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: "row",
    gap: 4
  },
  textInput: {
    backgroundColor: "#F2F2F2",
    width: 289,
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
    padding: 18,
    alignItems: "center",
  }
})