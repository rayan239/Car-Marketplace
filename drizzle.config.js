import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  // out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_PD4t9XgwMRKF@ep-dry-rice-a5e6ww4m-pooler.us-east-2.aws.neon.tech/Car_MarketPlace?sslmode=require",
  },
});
