import dotenv from "dotenv";

dotenv.config();

export default {
  schema: {
    "https://api.github.com/graphql": {
      headers: {
        Authorization: `Bearer ${process.env.VITE_GITHUB_API_TOKEN}`,
        "User-Agent": "MyApp/1.0.0",
      },
    },
  },
  documents: "./src/**/*.graphql",
  generates: {
    "src/shared/api/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHOC: false,
        withComponent: false,
        withHooks: true,
      },
    },
  },
};
