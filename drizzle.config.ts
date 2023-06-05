import type { Config } from "drizzle-kit";
import "dotenv/config";

const { DATABASE_URL } = process.env;

if (!DATABASE_URL)
  throw new Error(
    "❌ No DATABASE_URL found. Remember to add it to your .env file"
  );

const config: Config = {
  schema: "./src/server/db/schema/*",
  connectionString: process.env.DATABASE_URL,
};

export default config;
