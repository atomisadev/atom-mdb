import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProps, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: ChakraProps) => ({
    body: {
      bg: mode("gray.50", "#151a23")(props),
    },
  }),
};

const theme = extendTheme({ ...config, styles });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
