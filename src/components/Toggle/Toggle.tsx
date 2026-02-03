import { Switch, SwitchProps } from "react-native";

import { styles } from "./Toggle.styles";

type ToggleProps = SwitchProps;

export default function Toggle(props: ToggleProps) {
  return (
    <Switch
      {...props}
      trackColor={styles.trackColor}
      thumbColor={props.value ? styles.thumbOn : styles.thumbOff}
    />
  );
}
