import { colors, typography } from "@/styles/tokens";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerTitleAlign: "left",
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: { ...typography.heading },
        }}
      >
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
