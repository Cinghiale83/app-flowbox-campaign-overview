import BottomSheet from "@/components/BottomSheet/BottomSheet";
import Button from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import Stepper from "@/components/Stepper/Stepper";
import Toggle from "@/components/Toggle/Toggle";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./TermsScreen.styles";

type Params = {
  campaignId?: string;
  campaignName?: string;
  name?: string;
  title?: string;
};

export default function TermsScreen() {
  const navigation = useNavigation();
  const { campaignId, title } = useLocalSearchParams<Params>();
  const campaignTitle = title?.toString() ?? "";

  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [isTermsSheetVisible, setIsTermsSheetVisible] = useState<boolean>(false);

  const closeTermsSheet = useCallback(() => {
    setIsTermsSheetVisible(false);
  }, []);

  const progressCurrent = termsAccepted ? 3 : 2;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Stepper current={progressCurrent} total={4} />,
    });
  }, [navigation, progressCurrent]);

  const onSubmit = () => {
    setTermsAccepted(true);
    router.push({
      pathname: "/flow/[campaignId]/success",
      params: {
        campaignId: campaignId ?? "",
      },
    });
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

        <View style={styles.buttonContainer}>
          <Button
            disabled={!termsAccepted}
            variant="secondary"
            style={styles.button}
            label="Join campaign"
            onPress={() => onSubmit()}
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
