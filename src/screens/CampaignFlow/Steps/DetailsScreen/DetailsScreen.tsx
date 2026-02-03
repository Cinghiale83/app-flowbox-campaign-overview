import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "./DetailsScreen.styles";

export default function DetailsScreen() {
  const { title } = useLocalSearchParams<{ title?: string }>();
  const navigation = useNavigation();

  const headerTitle = title ? `Join ${title}` : "Join campaign";

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: headerTitle });
  }, [headerTitle, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{headerTitle}</Text>
      <Text style={styles.description}>Name here...</Text>
    </View>
  );
}
