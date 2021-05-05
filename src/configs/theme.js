import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    blue: "hsl(209, 23%, 22%)",
    darkBlue: "hsl(207, 26%, 17%)",
    veryDarkBlue: "hsl(200, 15%, 8%)",
    white: "hsl(0, 0%, 100%)",
    lightGray: "hsl(0, 0%, 98%)",
    darkGray: "hsl(0, 0%, 52%)",
  },
  sizes: {
    appBarHeight: 76,
    maxWidth: 1440,
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});
