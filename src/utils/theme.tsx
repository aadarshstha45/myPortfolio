/* eslint-disable @typescript-eslint/no-explicit-any */
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        color: mode("black", "white")(props),
        lineHeight: "tall",
        bg: mode("#ffffff", "gray.800")(props),

        fontFamily: "Poppins",
      },
    }),
  },
});

export { theme };
