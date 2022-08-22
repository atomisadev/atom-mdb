import "../styles/globals.css";
import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import Navbar from "./components/Header/Nav";
import theme from "./theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
