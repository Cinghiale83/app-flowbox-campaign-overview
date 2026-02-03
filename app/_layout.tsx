import { colors, typography } from "@/styles/tokens";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
  );
}
