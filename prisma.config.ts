import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "apps/api/prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
  migrations: {
    path: "apps/api/prisma/migrations",
    seed: "npx ts-node apps/api/prisma/seed.ts",
  },
});
