import { Children, ReactNode } from "react";
import { Text, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Screen.styles";

type ScreenProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export default function Screen({ children, style }: ScreenProps) {
  const content = Children.map(children, (child: ReactNode) => {
    if (typeof child === "string" || typeof child === "number") {
      return <Text>{child}</Text>;
    }

    return child;
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={["left", "right", "bottom"]}>
      <View style={[styles.container, style]}>{content}</View>
    </SafeAreaView>
  );
}
