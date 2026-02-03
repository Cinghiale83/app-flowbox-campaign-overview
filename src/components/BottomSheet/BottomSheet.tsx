import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./BottomSheet.styles";

type Props = {
	visible: boolean;
	height?: number;
	title?: string;
	description: string;
	onDismiss: () => void;
	children?: React.ReactNode;
};

export default function BottomSheet({
	visible,
	height,
	title,
	description,
	onDismiss,
	children,
}: Props) {
	return (
		<Modal
			visible={visible}
			transparent
			onDismiss={onDismiss}
			style={{ height }}
			animationType="fade"
		>
			<View style={styles.container}>
				<Pressable
					style={styles.backdrop}
					onPress={() => {
						onDismiss();
						return undefined;
					}}
					accessibilityRole="button"
					accessibilityLabel="Dismiss bottom sheet"
				/>

				<View style={[styles.sheet, { height }]}>
					<View style={styles.content}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.description}>{description}</Text>
						{children}
					</View>
				</View>
			</View>

		</Modal>
	);
}
