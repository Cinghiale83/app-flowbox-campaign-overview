import { colors, gaps, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bodyText: {
    ...typography.body14,
    color: colors.disabled,
  },
  listContent: {
    gap: gaps.sm,
    paddingBottom: gaps.lg,
  },
  errorText: {
    ...typography.body14,
    color: colors.error,
  },
});
