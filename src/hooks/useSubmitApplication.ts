import { submitCampaignApplication } from "@/services/applications.service";
import { useState } from "react";

export type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "error"; message: string };

type SubmitParams = {
  campaignId: string;
  userName: string;
};

type SubmitOk = { ok: true; applicationId: string };
type SubmitResult = SubmitOk | { ok: false };

type SubmitResponse = {
  submit: SubmitState;
  isSubmitting: boolean;
  submitApplication: () => Promise<SubmitResult>;
};

export default function useSubmitApplication({
  campaignId,
  userName,
}: SubmitParams): SubmitResponse {
  const [submit, setSubmit] = useState<SubmitState>({ status: "idle" });

  const isSubmitting = submit.status === "submitting";

  const submitApplication = async (): Promise<SubmitResult> => {
    if (isSubmitting) return { ok: false };

    setSubmit({ status: "submitting" });

    try {
      const response = await submitCampaignApplication({
        campaignId,
        name: userName,
      });

      if (!response.ok) {
        setSubmit({ status: "error", message: response.error });
        return { ok: false };
      }

      setSubmit({ status: "idle" });
      return { ok: true, applicationId: response.applicationId };
    } catch {
      setSubmit({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
      return { ok: false };
    }
  };

  return { submit, isSubmitting, submitApplication };
}
