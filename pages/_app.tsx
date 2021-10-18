import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { useRouter } from "next/router";
import { I18nProvider } from "next-localization";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { lngDict, ...rest } = pageProps;

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <I18nProvider lngDict={lngDict} locale={router?.locale as string}>
        <Component {...rest} />
      </I18nProvider>
    </>
  );
}
export default MyApp;
