import Stepper from "@/components/Stepper/Stepper";
import { useNavigation } from "expo-router";
import React from "react";
import { Text, View } from "react-native";


export default function SuccessScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Stepper current={4} total={4} />,
    });
  }, [navigation]);

  return (
    <View>
      <Text>SUCCESS</Text>
      <Text>You have joined the campaign</Text>
    </View>
  );
}
