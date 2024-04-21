import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'drizzle-kit';

const dev = process.env.VERCEL_ENV !== 'production';
loadEnvConfig('./', dev);

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
});
