import Stepper from "@/components/Stepper/Stepper";
import { useNavigation } from "expo-router";
import { createElement, useLayoutEffect } from "react";

type StepperHeaderParams = {
  current: number;
  total: number;
};

export default function useStepperHeader({ current, total }: StepperHeaderParams): void {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => createElement(Stepper, { current, total }),
    });
  }, [navigation, current, total]);
}
