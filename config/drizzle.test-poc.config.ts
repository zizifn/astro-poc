import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default process.env.drizzle_env === "production"
  ? defineConfig({
      out: "./drizzle/test-poc",
      schema: "./src/db/schema.ts",
      dialect: "sqlite",
      driver: "d1-http",
      tablesFilter: ["/^(?!.*_cf_KV).*$/"],
      dbCredentials: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
        databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
        token: process.env.CLOUDFLARE_D1_TOKEN!,
        // url: ".wrangler/state/v3/d1/miniflare-D1DatabaseObject/6db701a41c8e7cdbce4b4751fc2090d99055208972a1c41b11bf873a72d6aa07.sqlite",
      },
    })
  : defineConfig({
      out: "./drizzle/test-poc",
      schema: "./src/db/schema.ts",
      dialect: "sqlite",
      // driver: "d1-http",
      tablesFilter: ["/^(?!.*_cf_KV).*$/"],
      dbCredentials: {
        url: ".wrangler/state/v3/d1/miniflare-D1DatabaseObject/25d7590a2fa3d01d7b35d7458bd3ebe62347719609ee9b699fdb3eb53156da94.sqlite",
      },
    });
