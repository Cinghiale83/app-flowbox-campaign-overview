import Button from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import useStepperHeader from "@/hooks/useStepperHeader";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./SuccessScreen.styles";


export default function SuccessScreen() {
  const router = useRouter();
  const { applicationId } = useLocalSearchParams<{
    applicationId?: string;
  }>();
  useStepperHeader({ current: 4, total: 4 });

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Success!</Text>

        <Image
          source={require("../../../../../assets/images/success-icon.png")}
          style={styles.successIcon}
          contentFit="contain"
          accessibilityLabel="Success icon"
        />

        <Text style={styles.description}>
          You have successfully joined the campaign id {applicationId}.
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            label="Close"
            style={styles.button}
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
