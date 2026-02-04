import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Screen from "@/components/Screen/Screen";
import useStepperHeader from "@/hooks/useStepperHeader";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { styles } from "./DetailsScreen.styles";

type Params = {
  campaignId?: string;
  title?: string;
};

export default function DetailsScreen() {
  const { campaignId, title } = useLocalSearchParams<Params>();
  const router = useRouter();

  const [name, setName] = useState<string>("");

  const canContinue = name.trim().length > 0;

  useStepperHeader({ current: 1, total: 4 });

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
              router.push({
                pathname: "/flow/[campaignId]/terms",
                params: {
                  campaignId: campaignId ?? "",
                  name: encoded,
                  title: title ?? "",
                },
              });
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
