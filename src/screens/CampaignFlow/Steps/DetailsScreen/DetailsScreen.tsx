import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Screen from "@/components/Screen/Screen";
import Stepper from "@/components/Stepper/Stepper";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { styles } from "./DetailsScreen.styles";

type Params = {
  campaignId?: string;
};

export default function DetailsScreen() {
  const { campaignId } = useLocalSearchParams<Params>();
  const router = useRouter();

  const [name, setName] = React.useState<string>("");

  const canContinue = name.trim().length > 0;
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Stepper current={1} total={4} />,
    });
  }, [navigation]);

  return (
    <Screen>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled>
        <Text style={styles.title}>What&apos;s your name?</Text>
        <Input
          label="Name"
          value={name}
          onChangeText={(v) => {
            setName(v);
          }}
          placeholder="Enter your name"
        />
        <View style={styles.buttonContainer}>
          <Button
            label="Continue"
            disabled={!canContinue}
            style={styles.button}
            onPress={() => {
              const encoded = encodeURIComponent(name);
              router.push(`/flow/${campaignId}/terms?name=${encoded}`);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
