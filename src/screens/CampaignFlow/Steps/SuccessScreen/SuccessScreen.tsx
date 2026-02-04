import Button from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import Stepper from "@/components/Stepper/Stepper";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./SuccessScreen.styles";


export default function SuccessScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { status, applicationId } = useLocalSearchParams<{
    status?: string;
    applicationId?: string;
  }>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Stepper current={4} total={4} />,
    });
  }, [navigation]);

  useEffect(() => {
    if (!status) {
      return;
    }
    // eslint-disable-next-line no-console
    console.warn("Submit status:", {
      status,
      applicationId: applicationId?.toString(),
    });
  }, [applicationId, status]);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Success</Text>
        <Text style={styles.description}>
          You have successfully joined the campaign.
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            label="Close"
            onPress={() => {
              router.replace("/campaigns");
              return undefined;
            }}
          />
        </View>
      </View>
    </Screen>
  );
}
