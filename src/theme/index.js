import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
  colors: {
    background: (props) =>
      props.colorMode === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
  },
  components: {
    variants: {
      solid: (props) => ({
        bg: props.colorMode === "dark" ? "red.300" : "red.500",
      }),
    },
  },
});
