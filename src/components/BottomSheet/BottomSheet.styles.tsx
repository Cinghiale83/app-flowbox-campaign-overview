import { colors, gaps, radius, spacing, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.overlay,
		justifyContent: "flex-end",
	},
	backdrop: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.overlay,
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
		gap: gaps.md,
	},
	title: {
		...typography.title18,
		paddingBottom: spacing.lg,
	},
	description: {
		...typography.body14,
	},
});
