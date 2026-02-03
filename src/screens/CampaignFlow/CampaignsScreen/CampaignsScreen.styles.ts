import { colors, gaps, spacing, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bodyText: {
    ...typography.body14,
    color: colors.disabled,
  },
  screen: {
    paddingHorizontal: 0,
  },
  listContent: {
    gap: gaps.sm,
    paddingHorizontal: spacing.md,
    paddingBottom: gaps.lg,
  },
  errorText: {
    ...typography.body14,
    color: colors.error,
  },
});
