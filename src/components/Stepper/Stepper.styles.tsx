import { colors, radius } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	track: {
		height: 6,
		borderRadius: radius.pill,
		backgroundColor: colors.border,
		overflow: "hidden",
		width: "70%",
		alignSelf: "center",
	},
	fill: {
		height: "100%",
		backgroundColor: colors.primary,
	},
});