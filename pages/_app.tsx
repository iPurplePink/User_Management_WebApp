import React, { useEffect } from "react";
import "../styles/main.scss";
import initializeFirebase from "../settings/firebase";

export default function AppRoot({ Component, pageProps }: any) {
  useEffect(() => {
    initializeFirebase();
  }, []);
  return <Component {...pageProps} />;
}
