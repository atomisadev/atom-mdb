import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Header/Nav";
import { AppProps } from "next/app";

// Chakra theme config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({ config })}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
