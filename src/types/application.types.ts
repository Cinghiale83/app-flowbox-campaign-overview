export type SubmitPayload = {
  campaignId: string;
  name: string;
};

export type SubmitResult =
  | { ok: true; applicationId: string }
  | { ok: false; error: string };
