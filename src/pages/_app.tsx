import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as ga from "../lib/ga";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);


  return <Component {...pageProps} />;
}
