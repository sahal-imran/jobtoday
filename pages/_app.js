import "../styles/globals.css";
import React, { Suspense } from "react";
import Layout from "../pages/layout";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar", "fr"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

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
