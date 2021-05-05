import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/menu";

const renderMenuItemOptions = (items) =>
  items.map((item) => <MenuItemOption value={item}>{item}</MenuItemOption>);

const menuItems = ["NONE", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const RegionSelect = ({ save }) => {
  return (
    <Box pt="25" pb="25">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Filter by Region
        </MenuButton>

        <MenuList>
          <MenuOptionGroup type="radio" onChange={save}>
            {renderMenuItemOptions(menuItems)}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default RegionSelect;
