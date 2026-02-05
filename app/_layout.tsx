import { colors, typography } from "@/styles/tokens";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        initialRouteName="campaigns/index"
        screenOptions={{
          headerShadowVisible: false,
          headerTitleAlign: "left",
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: { ...typography.heading },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="campaigns/index" />
        <Stack.Screen
          name="flow"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
