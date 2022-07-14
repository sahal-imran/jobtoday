import "../styles/globals.css";
import "../pages/i18nextConf";
import React, { Suspense } from "react";
import Layout from "../pages/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Suspense fallback="...Loading">
        <Component {...pageProps} />
      </Suspense>
    </Layout>
  );
}

export default MyApp;
