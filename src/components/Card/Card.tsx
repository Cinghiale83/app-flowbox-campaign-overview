import Button from "@/components/Button";
import type { Campaign } from "@/types/campaign.types";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { styles } from "./Card.styles";

type Props = {
	campaign: Campaign;
	onPressJoin: () => null;
};

export default function Card({ campaign, onPressJoin }: Props) {
	return (
		<View style={styles.card}>
			<Image
				source={{ uri: campaign.coverURL }}
				style={styles.image}
				contentFit="cover"
			/>

			<LinearGradient
				colors={["rgba(0,0,0,0.10)", "rgba(0,0,0,0.80)"]}
				locations={[0.3, 1]}
				style={styles.gradient}
			/>

			<View style={styles.logoWrap}>
				<Image
					source={{ uri: campaign.logoURL }}
					style={styles.logo}
				/>
			</View>

			<View style={styles.overlay}>
				<Text style={styles.title} numberOfLines={1}>
					{campaign.title}
				</Text>
				<Text style={styles.description} numberOfLines={2}>
					{campaign.description}
				</Text>
				<Button variant="neutral" label="Join Campaign" onPress={onPressJoin} />
			</View>
		</View>
	);
}
