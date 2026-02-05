import { ReactNode } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./BottomSheet.styles";

type Props = {
	visible: boolean;
	height?: number;
	title?: string;
	description?: string;
	onDismiss: () => void;
	children?: ReactNode;
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
			isVisible={visible}
			onBackdropPress={onDismiss}
			onBackButtonPress={onDismiss}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			backdropTransitionOutTiming={0}
			style={styles.modal}
		>
			<View style={[styles.sheet, { height }]}>
				<View style={styles.content}>
					{title ? <Text style={styles.title}>{title}</Text> : null}
					{description ? <Text style={styles.description}>{description}</Text> : null}
					{children}
				</View>
			</View>
		</Modal>
	);
}
