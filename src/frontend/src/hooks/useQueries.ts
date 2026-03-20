import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error("Not connected");
      const timestamp = BigInt(Date.now());
      await actor.submitForm(
        data.name,
        data.email,
        data.phone,
        data.message,
        timestamp,
      );
    },
  });
}
