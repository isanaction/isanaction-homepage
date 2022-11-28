import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { theme } from "../lib/theme";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
ひひ
export default MyApp;
