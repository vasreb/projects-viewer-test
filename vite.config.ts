import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";

import graphqlCodegen from "vite-plugin-graphql-codegen";

import path from "path";

export default defineConfig({
  plugins: [react(), graphqlCodegen({}), svgr({})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      Generated: path.resolve(
        __dirname,
        "./src/shared/api/generated/graphql.tsx"
      ),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
