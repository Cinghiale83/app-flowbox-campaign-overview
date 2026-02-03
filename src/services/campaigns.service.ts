// Endpoint: https://technical-case.dreaminfluencers.com/
import type { Campaign } from "@/types/campaign.types";

const ENDPOINT = "https://technical-case.dreaminfluencers.com/";

export async function getCampaigns(): Promise<Campaign[]> {
  const res = await fetch(ENDPOINT);

  if (!res.ok) {
    throw new Error(`Failed to fetch campaigns (${res.status})`);
  }

  const data: Campaign[] = await res.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid campaigns response (expected array)");
  }

  return data;
}
