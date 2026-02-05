import { StyleSheet } from "react-native";
import { stepStyles } from "../stepStyles";

export const styles = StyleSheet.create({
  ...stepStyles,
  successIcon: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  button: {
    width: "70%",
    alignSelf: "center",
    height: 50,
  },
});
