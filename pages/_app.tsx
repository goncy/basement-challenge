import type {AppProps} from "next/app";
import Head from "next/head";
import {ChakraProvider, Container} from "@chakra-ui/react";

import "../theme.css";
import theme from "../theme";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Basement studio - Challenge</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Container height="100%" maxWidth="container.xl">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
}
export default App;
