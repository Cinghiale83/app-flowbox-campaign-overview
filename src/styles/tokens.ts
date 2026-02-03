import { StyleSheet } from "react-native";

export const colors = {
  background: "#FEFBF6",
  white: "#FFFFFF",
  primary: "#190041",
  active: "#6A00FF",
  primaryDisabled: "rgba(25,0,65,0.20)",
  text: "#1E1E1E",
  disabled: "rgba(25,0,65,0.20)",
  border: "#F0EAE0",
  overlay: "rgba(0,0,0,0.35)",
  gradientEnd: "rgba(0,0,0,0.70)",
  error: "#8B0000",
  transparent: "transparent",
} as const;

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const gaps = {
  sm: 12,
  md: 18,
  lg: 26,
} as const;

export const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

export const typography = {
  title18: { fontSize: 18, lineHeight: 28, fontWeight: "600" as const },
  body14: { fontSize: 14, lineHeight: 20, fontWeight: "400" as const },
  button14: { fontSize: 14, lineHeight: 20, fontWeight: "600" as const },
  heading: { fontSize: 30, lineHeight: 38, fontWeight: "600", paragraphSpacing: 30 as const },
  label12: { fontSize: 12, lineHeight: 16, fontWeight: "400" as const },
} as const;

export const common = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.lg,
  },
  card: {
    borderRadius: radius.lg,
    overflow: "hidden",
    backgroundColor: colors.white,
    height: 264,
  }
});
