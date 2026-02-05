import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

import { colors } from "@/styles/tokens";

export default function FlowLayout() {
    const router = useRouter();

    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                headerBackVisible: false,
                headerBackTitle: "",
                headerStyle: { backgroundColor: colors.background },
                headerTitleAlign: "center",
                /* Uncomment the following lines to enable animation between steps */
                // animation: "fade", // use "none" for no animation
                // animationDuration: 150,
                headerLeft: () => (
                    <Pressable onPress={() => router.back()} accessibilityRole="button">
                        <Ionicons name="arrow-back" size={24} color={colors.text} />
                    </Pressable>
                ),
                gestureEnabled: true,
            }}
        />
    );
}
