import "dotenv/config.js";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  SECRET_KEY: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("🔴 Invalid environment variables: ");
  console.error(z.prettifyError(_env.error));

  throw new Error("Invalid environment variables, server cannot start.");
}

export const env = _env.data;
