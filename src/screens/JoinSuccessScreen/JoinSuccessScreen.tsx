import { StyleSheet, Text, View } from "react-native";

export default function JoinSuccessScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All set</Text>
      <Text style={styles.subtitle}>You have joined the campaign</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#666666",
  },
});
