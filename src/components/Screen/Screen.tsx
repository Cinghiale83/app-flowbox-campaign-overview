import { Children, ReactNode } from "react";
import { Text, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./Screen.styles";

type ScreenProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export default function Screen({ children, style }: ScreenProps) {
  const insets = useSafeAreaInsets();
  const content = Children.map(children, (child: ReactNode) => {
    if (typeof child === "string" || typeof child === "number") {
      return <Text>{child}</Text>;
    }

    return child;
  });

  return (
    <View style={[styles.safeArea, { paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom }]}>
      <View style={[styles.container, style]}>{content}</View>
    </View>
  );
}
