import { spacing, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const stepStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  title: {
    ...typography.heading,
    paddingBottom: spacing.lg,
    paddingTop: spacing.xl,
  },
  description: {
    ...typography.body14,
  },
  buttonContainer: {
    marginTop: "auto",
    paddingBottom: spacing.lg,
  },
  button: {
    width: "70%",
    alignSelf: "center",
    height: 50,
  },
});
