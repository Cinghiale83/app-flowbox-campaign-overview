import { colors, radius, spacing, typography } from "@/styles/tokens";
import { StyleSheet, TextStyle } from "react-native";

const labelBase: TextStyle = {
  textAlign: "center",
  ...typography.button14,
};

export const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: 40,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.active },
  neutral: { backgroundColor: colors.white },
  disabled: { backgroundColor: colors.primaryDisabled },
  label: { color: colors.white, ...labelBase },
  neutralLabel: {
    color: colors.primary,
    ...labelBase,
  },
});
