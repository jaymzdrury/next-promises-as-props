import { envSchema } from "@/types";

export const data = fetch(`${envSchema.URL}/api`, {
  cache: "no-cache",
}).then((res) => res.json());
