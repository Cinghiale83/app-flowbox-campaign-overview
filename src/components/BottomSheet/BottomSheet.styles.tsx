import { colors, gaps, radius, spacing, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	modal: {
		justifyContent: "flex-end",
		margin: 0,
	},
	sheet: {
		backgroundColor: colors.white,
		borderTopLeftRadius: radius.lg,
		borderTopRightRadius: radius.lg,
		padding: spacing.md,
		overflow: "hidden",
	},
	content: {
		flex: 1,
		paddingHorizontal: spacing.md,
		paddingTop: spacing.md,
		gap: gaps.md,
	},
	title: {
		...typography.title18,
	},
	description: {
		...typography.body14,
	},
});
