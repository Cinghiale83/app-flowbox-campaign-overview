import { Pressable, Text } from "react-native";
import { styles } from "./Button.styles";

type Props = {
  label: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "neutral";
  onPress?: () => null;
};

export default function Button({
  label,
  disabled,
  variant = "primary",
  onPress,
}: Props) {
  const variantStyle =
    variant === "secondary"
      ? styles.secondary
      : variant === "neutral"
        ? styles.neutral
        : styles.primary;
  const labelStyle = variant === "neutral" ? styles.neutralLabel : styles.label;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.base, variantStyle, disabled ? styles.disabled : null]}
      accessibilityRole="button"
      accessibilityState={{ disabled: Boolean(disabled) }}
      accessibilityLabel={`${label} button`}
    >
      <Text style={labelStyle}>{label}</Text>
    </Pressable>
  );
}
