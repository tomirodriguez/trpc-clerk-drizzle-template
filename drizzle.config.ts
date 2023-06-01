import type { Config } from "drizzle-kit";
import "dotenv/config";

const { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } =
  process.env;

if (
  !DATABASE_HOST ||
  !DATABASE_USERNAME ||
  !DATABASE_PASSWORD ||
  !DATABASE_NAME
)
  throw new Error("INVALID ENV VARIABLES");

const config: Config = {
  schema: "./src/server/db/schema/*",
  connectionString: `mysql://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}?ssl={"rejectUnauthorized":true}`,
};

export default config;
