import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8
  },
  textCount: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Inter",
    color: "#333",
    backgroundColor: "#D9D9D9",
    borderRadius: 99,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
  },
  textPrimary: {
    color: "#31C667",
    fontSize: 14,
    fontWeight: 700
  },
  textSecundary: {
    color: "#7A4A9E",
    fontSize: 14,
    fontWeight: 700
  }
})