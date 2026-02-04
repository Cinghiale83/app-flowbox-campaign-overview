import { stepStyles } from "@/screens/CampaignFlow/Steps/stepStyles";
import { colors, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ...stepStyles,
  error: {
    ...typography.body14,
    color: colors.error,
  },
});
