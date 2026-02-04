import { colors, spacing, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";
import { stepStyles } from "../stepStyles";

export const styles = StyleSheet.create({
  ...stepStyles,
  toggleRow: {
    marginTop: spacing.xl,
  },
  button: {
    width: "80%",
    alignSelf: "center",
    height: 50,
  },
  error: {
    ...typography.body14,
    color: colors.error,
    marginTop: spacing.md,
  },
});
