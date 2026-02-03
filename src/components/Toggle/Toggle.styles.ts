import { colors, spacing, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";

const toggleBaseStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  label: {
    flex: 1,
    color: colors.text,
    ...typography.body14,
  },
});

export const styles = {
  ...toggleBaseStyles,
  switchColors: {
    track: { true: colors.active, false: colors.primaryDisabled },
    thumb: colors.white,
    iosBackground: colors.primaryDisabled,
  },
};
