import { colors, common } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: colors.background },
	container: { ...common.screen },
});
