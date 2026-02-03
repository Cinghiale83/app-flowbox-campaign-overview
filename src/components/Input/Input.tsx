import { TextInput, TextInputProps } from "react-native";

import { styles } from "./Input.styles";

type InputProps = TextInputProps;

export default function Input(props: InputProps) {
  return <TextInput {...props} style={[styles.input, props.style]} />;
}
