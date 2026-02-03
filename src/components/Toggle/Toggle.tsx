import { Switch, Text, View } from "react-native";
import { styles } from "./Toggle.styles";

type Props = {
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
  linkText?: string;
  onPress?: () => void;
};

export default function Toggle({
  label,
  value,
  onChange,
  linkText,
  onPress,
}: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>
        {label}
        {linkText ? (
          <Text
            style={styles.link}
            onPress={onPress}
            accessibilityRole={onPress ? "link" : undefined}
            accessibilityLabel={onPress ? linkText : undefined}
          >
            {` ${linkText}`}
          </Text>
        ) : null}
      </Text>
      <Switch
        trackColor={styles.switchColors.track}
        thumbColor={styles.switchColors.thumb}
        ios_backgroundColor={styles.switchColors.iosBackground}
        value={value}
        onValueChange={onChange as (value: boolean) => void}
      />
    </View>
  );
}