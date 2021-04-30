import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      variant="ghost"
      leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    >
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ColorModeToggler;
