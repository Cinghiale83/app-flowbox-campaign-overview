import BottomSheet from "@/components/BottomSheet/BottomSheet";
import Button from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import Stepper from "@/components/Stepper/Stepper";
import Toggle from "@/components/Toggle/Toggle";
import { submitCampaignApplication } from "@/services/applications.service";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./TermsScreen.styles";

type Params = {
  campaignId?: string;
  campaignName?: string;
  name?: string;
  title?: string;
};

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "error"; message: string };

export default function TermsScreen() {
  const navigation = useNavigation();
  const router = useRouter()
  const { campaignId, title } = useLocalSearchParams<Params>();
  const campaignTitle = title?.toString() ?? "";

  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [isTermsSheetVisible, setIsTermsSheetVisible] = useState<boolean>(false);
  const [submit, setSubmit] = useState<SubmitState>({ status: "idle" });

  const isSubmitting = submit.status === "submitting";
  const progressCurrent = termsAccepted ? 3 : 2;

  const closeTermsSheet = useCallback(() => {
    setIsTermsSheetVisible(false);
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Stepper current={progressCurrent} total={4} />,
    });
  }, [navigation, progressCurrent]);

  const onSubmit = async (): Promise<void> => {
    setSubmit({ status: "submitting" });
    try {
      const response = await submitCampaignApplication({
        campaignId: campaignId ?? "",
        name: campaignTitle,
      });

      const status = response.ok ? "ok" : "error";

      if (!response.ok) {
        setSubmit({ status: "error", message: response.error });
        return;
      }

      setSubmit({ status: "idle" });
      router.push({
        pathname: "/flow/[campaignId]/success",
        params: {
          campaignId: campaignId ?? "",
          applicationId: response.applicationId,
          status,
        },
      });
    } catch {
      setSubmit({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Campaign terms</Text>
        <Text style={styles.description}>
          Make sure to read and understand the campaign Terms & Conditions.
        </Text>

        <Toggle
          label="Accept"
          linkText="Terms & Conditions"
          onPress={() => setIsTermsSheetVisible(true)}
          value={termsAccepted}
          onChange={(isAccepted: boolean) => {
            setTermsAccepted(isAccepted);
          }}
        />
        <Text>Campaign Title: {campaignTitle}</Text>
        <Text>Campaign ID: {campaignId}</Text>

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
        visible={isTermsSheetVisible}
        height={320}
        title="Terms & Conditions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onDismiss={closeTermsSheet}
      >
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            label="Close"
            variant="primary"
            onPress={closeTermsSheet}
          />
        </View>
      </BottomSheet>
    </Screen>
  );
}
