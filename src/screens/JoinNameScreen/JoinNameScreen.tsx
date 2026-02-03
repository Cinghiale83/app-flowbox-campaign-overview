import { StyleSheet, Text, View } from "react-native";

export default function JoinNameScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join campaign</Text>
      <Text style={styles.subtitle}>Tell us your name to continue</Text>
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
