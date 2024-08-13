import { ApolloProvider } from "@apollo/client";
import { client } from "@/shared/api/client";

import "@/shared/config/common.scss";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Router from "./routes/Router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </StrictMode>
);
