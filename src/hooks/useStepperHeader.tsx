import Stepper from "@/components/Stepper/Stepper";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";

type StepperHeaderParams = {
  current: number;
  total: number;
};

export default function useStepperHeader({ current, total }: StepperHeaderParams): void {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => React.createElement(Stepper, { current, total }),
    });
  }, [navigation, current, total]);
}
