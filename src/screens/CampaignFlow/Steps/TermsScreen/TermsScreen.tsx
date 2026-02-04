import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Text, View } from "react-native";

import BottomSheet from "@/components/BottomSheet/BottomSheet";
import Button from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import Stepper from "@/components/Stepper/Stepper";
import Toggle from "@/components/Toggle/Toggle";
import { submitCampaignApplication } from "@/services/applications.service";
import { useLayoutEffect, useState } from "react";
import { styles } from "./TermsScreen.styles";

type Params = {
  campaignId?: string;
  title?: string;
};

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "error"; message: string };

function toStringOrEmpty(v: string | undefined): string {
  return v ? v.toString() : "";
}

export default function TermsScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  const { campaignId, title } = useLocalSearchParams<Params>();
  const campaignIdStr = toStringOrEmpty(campaignId);
  const campaignTitle = toStringOrEmpty(title);

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isTermsSheetVisible, setIsTermsSheetVisible] = useState(false);
  const [submit, setSubmit] = useState<SubmitState>({ status: "idle" });

  const isSubmitting = submit.status === "submitting";

  const progressCurrent = termsAccepted ? 3 : 2;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Stepper current={progressCurrent} total={4} />,
    });
  }, [navigation, progressCurrent]);

  const openTermsSheet = (): true => {
    setIsTermsSheetVisible(true);
    return true;
  };

  const closeTermsSheet = (): true => {
    setIsTermsSheetVisible(false);
    return true;
  };

  const onToggleAccepted = (isAccepted: boolean): true => {
    setTermsAccepted(isAccepted);
    return true;
  };

  const onSubmit = async (): Promise<true> => {
    if (!termsAccepted || isSubmitting) return true;

    setSubmit({ status: "submitting" });

    try {
      const response = await submitCampaignApplication({
        campaignId: campaignIdStr,
        name: campaignTitle,
      });

      if (!response.ok) {
        setSubmit({ status: "error", message: response.error });
        return true;
      }

      setSubmit({ status: "idle" });

      router.push({
        pathname: "/flow/[campaignId]/success",
        params: {
          campaignId: campaignIdStr,
          applicationId: response.applicationId,
        },
      });

      return true;
    } catch {
      setSubmit({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
      return true;
    }
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
            onPress={() => openTermsSheet()}
            value={termsAccepted}
            onChange={(isAccepted) => onToggleAccepted(isAccepted)}
          />
        </View>

        {submit.status === "error" ? <Text style={styles.error}>{submit.message}</Text> : null}

        <View style={styles.buttonContainer}>
          <Button
            disabled={!termsAccepted || isSubmitting}
            variant="secondary"
            style={styles.button}
            label={isSubmitting ? "Joining…" : "Join campaign"}
            onPress={() => onSubmit()}
          />
        </View>
      </View>

      <BottomSheet
        visible={isTermsSheetVisible}
        height={320}
        title="Instagram review notice"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onDismiss={() => closeTermsSheet()}
      >
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            label="Close"
            variant="primary"
            onPress={() => closeTermsSheet()}
          />
        </View>
      </BottomSheet>
    </Screen>
  );
}
