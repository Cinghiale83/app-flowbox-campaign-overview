import Button from "@/components/Button/Button";
import Screen from "@/components/Screen/Screen";
import Stepper from "@/components/Stepper/Stepper";
import { useNavigation } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./TermsScreen.styles";


export default function TermsScreen() {
  const navigation = useNavigation();

  const [noticeOpen, setNoticeOpen] = React.useState<boolean>(false);

  const progressCurrent = noticeOpen ? 3 : 2;

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
        <Text style={styles.title}>Terms</Text>
        <Text style={styles.description}>
          Make sure to read and understand payment & platform Terms & Conditions.
        </Text>

        {/* TODO: Add toggle and BottomSheet */}

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            label="Join campaign"
            onPress={() => onSubmit()}
          />
        </View>
      </View>
    </Screen>
  );
}
