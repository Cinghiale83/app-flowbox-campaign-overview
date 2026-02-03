import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

type StepperProps = ActivityIndicatorProps;

export default function Stepper(props: StepperProps) {
  return <ActivityIndicator {...props} />;
}
