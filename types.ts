import { z } from "zod";

export const envSchema = z
  .object({ URL: z.string().min(1) })
  .parse(process.env);
