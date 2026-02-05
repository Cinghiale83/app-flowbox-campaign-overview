// TermsScreen.tsx (minimal handlers/state, controlled BottomSheet)
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

import BottomSheet from "@/components/BottomSheet/BottomSheet";
import Button from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import Toggle from "@/components/Toggle/Toggle";
import useStepperHeader from "@/hooks/useStepperHeader";
import useSubmitApplication from "@/hooks/useSubmitApplication";
import { useState } from "react";
import { styles } from "./TermsScreen.styles";

type Params = {
	campaignId?: string;
	name?: string;
	title?: string;
};

function toStringOrEmpty(v: string | undefined): string {
	return v ? v.toString() : "";
}

export default function TermsScreen() {
	const router = useRouter();
	const { campaignId, name } = useLocalSearchParams<Params>();

	const campaignIdStr = toStringOrEmpty(campaignId);
	const userNameEncoded = toStringOrEmpty(name);
	const userName = userNameEncoded ? decodeURIComponent(userNameEncoded) : "";

	const [termsAccepted, setTermsAccepted] = useState(false);
	const [isTermsSheetVisible, setIsTermsSheetVisible] = useState(false);

	const { submit, isSubmitting, submitApplication } = useSubmitApplication({
		campaignId: campaignIdStr,
		userName,
	});

	useStepperHeader({ current: termsAccepted ? 3 : 2, total: 4 });

	const dismissTermsSheet = () => setIsTermsSheetVisible(false);

	const onSubmit = async () => {
		if (!termsAccepted || isSubmitting) return;

		const result = await submitApplication();
		if (!result.ok) return;

		router.push({
			pathname: "/flow/[campaignId]/success",
			params: {
				campaignId: campaignIdStr,
				applicationId: result.applicationId,
			},
		});
	};

	return (
		<Screen>
			<View style={styles.container}>
				<Text style={styles.title}>Campaign terms</Text>
				<Text style={styles.description}>
					Make sure to read and understand payment & platform Terms & Conditions.
				</Text>

				<View style={styles.toggleRow}>
					<Toggle
						label="Accept"
						linkText="Terms & Conditions"
						onPress={() => setIsTermsSheetVisible(true)}
						value={termsAccepted}
						onValueChange={setTermsAccepted}
					/>
				</View>

				{submit.status === "error" ? (
					<Text style={styles.error}>{submit.message}</Text>
				) : null}

				<View style={styles.buttonContainer}>
					<Button
						disabled={!termsAccepted || isSubmitting}
						variant="secondary"
						style={styles.button}
						label={isSubmitting ? "Joining…" : "Join campaign"}
						onPress={onSubmit}
					/>
				</View>
			</View>

			<BottomSheet
				height={320}
				visible={isTermsSheetVisible}
				title="Instagram review notice"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				onDismiss={dismissTermsSheet}
			>
				<View style={styles.buttonContainer}>
					<Button
						style={styles.button}
						label="Close"
						variant="primary"
						onPress={dismissTermsSheet}
					/>
				</View>
			</BottomSheet>
		</Screen>
	);
}
