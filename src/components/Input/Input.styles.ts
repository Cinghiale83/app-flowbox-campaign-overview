import { colors, radius, spacing, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    minHeight: 68,
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  innerLabel: {
    color: colors.primary,
    marginBottom: spacing.xs,
    ...typography.label12,
  },
  input: {
    color: colors.primary,
    paddingRight: spacing.xl,
    paddingVertical: 0,
    minHeight: typography.title18.lineHeight,
    textAlignVertical: "top",
    includeFontPadding: false,
    ...typography.title18,
  },
  clearButton: {
    position: "absolute",
    right: spacing.md,
    top: spacing.lg,
    width: spacing.xl,
    height: spacing.xl,
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.border,
  },
  clearIcon: {
    ...typography.title18,
    color: colors.text,
  },
});
