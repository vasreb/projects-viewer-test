import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import graphqlCodegen from "vite-plugin-graphql-codegen";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), graphqlCodegen({})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      Generated: path.resolve(
        __dirname,
        "./src/shared/api/generated/graphql.tsx"
      ),
    },
  },
});
