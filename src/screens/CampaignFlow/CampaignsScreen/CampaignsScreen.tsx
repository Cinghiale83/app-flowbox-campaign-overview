import Card from "@/components/Card";
import Screen from "@/components/Screen";
import { getCampaigns } from "@/services/campaigns.service";
import type { Campaign } from "@/types/campaign.types";
import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { FlatList, Text } from "react-native";
import { styles } from "./CampaignsScreen.styles";

type LoadState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; campaigns: Campaign[] };

export default function CampaignsScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const [state, setState] = React.useState<LoadState>({ status: "loading" });

  const load = React.useCallback(async (): Promise<Campaign[]> => {
    setState({ status: "loading" });

    try {
      const campaigns = await getCampaigns();
      setState({ status: "ready", campaigns });
      return campaigns;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setState({ status: "error", message });
      throw err;
    }
  }, []);

  React.useEffect(() => {
    load().catch(() => null);
  }, [load]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: "Campaigns" });
  }, [navigation]);

  if (state.status === "loading") {
    return (
      <Screen>
        <Text style={styles.bodyText}>Loading…</Text> {/* NICE TO HAVE: Add loading indicator */}
      </Screen>
    );
  }

  if (state.status === "error") {
    return (
      <Screen>
        <Text style={styles.errorText}>{state.message}</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <FlatList
        data={state.campaigns}
        keyExtractor={(c, index) => `${c.uid}-${index}`}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Card
            campaign={item}
            onPressJoin={() => {
              router.push({
                pathname: "/flow/[campaignId]/details",
                params: { campaignId: item.uid, title: item.title ?? "" },
              });
              return null;
            }}
          />
        )}
      />
    </Screen>
  );
}
