import Button from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import Stepper from "@/components/Stepper/Stepper";
import Toggle from "@/components/Toggle/Toggle";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
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
  const campaignTitle = title?.toString() ?? "—";

  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);

  const progressCurrent = termsAccepted ? 3 : 2;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Stepper current={progressCurrent} total={4} />,
    });
  }, [navigation, progressCurrent]);

  const onSubmit = () => {
    // TODO: Implement submit
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Campaign terms</Text>
        <Text style={styles.description}>
          Make sure to read and understand payment & platform Terms & Conditions.
        </Text>

        <Toggle
          label="Accept Terms & Conditions"
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
    </Screen>
  );
}
