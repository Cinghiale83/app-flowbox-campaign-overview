import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./Input.styles";

type Props = {
  label?: string;
  value: string;
  placeholder?: string;
  onChangeText: (v: string) => undefined;
};

export default function Input({ label, value, placeholder, onChangeText }: Props) {
  const showReset = value.length > 0;
  return (
    <View style={styles.inputContainer}>
      {label ? <Text style={styles.innerLabel}>{label}</Text> : null}
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor="rgba(25,0,65,0.45)"
        autoCapitalize="words"
        onChangeText={onChangeText}
        style={styles.input}
      />

      {showReset ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Clear text"
          style={styles.clearButton}
          onPress={() => {
            onChangeText("");
            return undefined;
          }}
          hitSlop={10}
        >
          <Text style={styles.clearIcon}>x</Text>
        </Pressable>
      ) : null}
    </View>
  )
}
