import { colors, common, radius, spacing, typography } from "@/styles/tokens";
import { StyleSheet } from "react-native";

const logoSize = 48;

export const styles = StyleSheet.create({
	card: {
		...common.card,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	overlay: {
		position: "absolute",
		left: spacing.md,
		right: spacing.md,
		bottom: spacing.md,
	},
	gradient: {
		...StyleSheet.absoluteFillObject,
	},
	logoWrap: {
		position: "absolute",
		top: spacing.md,
		left: spacing.md,
		width: logoSize,
		height: logoSize,
		borderRadius: radius.pill,
		backgroundColor: colors.white,
		borderWidth: 2,
		borderColor: colors.white,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: "100%",
		height: "100%",
		borderRadius: radius.pill,
		objectFit: "cover",
	},
	title: {
		color: colors.white,
		...typography.title18,
		marginBottom: spacing.xs,
	},
	description: {
		color: colors.white,
		...typography.body14,
		marginBottom: spacing.md,
	},
});
