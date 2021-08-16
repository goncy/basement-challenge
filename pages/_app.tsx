import type {AppProps} from "next/app";
import Head from "next/head";

import "../theme.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Basement studio - Challenge</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
