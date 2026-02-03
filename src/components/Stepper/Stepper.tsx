import { View } from "react-native";
import { styles } from "./Stepper.styles";

type Props = {
  current: number; // 1-based
  total: number;
};

export default function Stepper({ current, total }: Props) {
  const pctRaw = total <= 0 ? 0 : current / total;
  const pct = Math.max(0, Math.min(1, pctRaw));

  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${pct * 100}%` }]} />
    </View>
  );
}
