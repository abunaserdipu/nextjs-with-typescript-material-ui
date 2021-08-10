import React from "react";
import "../pages/src/components/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./src/components/layout";
import { ThemeProvider } from "@material-ui/core";
import Theme from "./src/components/theme";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
