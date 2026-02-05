import { useEffect, useRef } from "react";
import { Animated, Easing, View, useWindowDimensions } from "react-native";
import { styles } from "./Stepper.styles";

type Props = {
  current: number; // 1-based
  total: number;
};

export default function Stepper({ current, total }: Props) {
  const progress =
    total > 0 ? Math.min(Math.max(current / total, 0), 1) : 0;

  const { width } = useWindowDimensions();
  const trackWidth = Math.round(width * 0.5);

  const animatedProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [animatedProgress, progress]);

  const fillWidth = animatedProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, trackWidth],
    extrapolate: "clamp",
  });

  return (
    <View style={[styles.track, { width: trackWidth }]}>
      <Animated.View style={[styles.fill, { width: fillWidth }]} />
    </View>
  );
}