import type { SubmitPayload, SubmitResult } from "@/types/application.types";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function submitCampaignApplication(
  payload: SubmitPayload
): Promise<SubmitResult> {
  await delay(600);

  return {
    ok: true,
    applicationId: payload.campaignId,
  };
}
