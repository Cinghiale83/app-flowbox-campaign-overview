import Button from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import Stepper from "@/components/Stepper/Stepper";
import { Image } from "expo-image";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./SuccessScreen.styles";


export default function SuccessScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { applicationId } = useLocalSearchParams<{
    applicationId?: string;
  }>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Stepper current={4} total={4} />,
    });
  }, [navigation]);

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
