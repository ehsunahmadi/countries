import { Image } from "@chakra-ui/image";
import {
  AspectRatio,
  Box,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { name, alpha3Code, flag, population, region, capital } = country || {};
  return (
    <Link as={RouterLink} to={`/${alpha3Code}`}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image src={flag} alt={name} />
        </AspectRatio>

        <Box p="6">
          <Box
            fontSize="lg"
            mt="1"
            mb="4"
            fontWeight="bold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>

          <Box fontWeight="semibold" fontSize="sm">
            <List spacing={1}>
              <CountryItem title="population">{population}</CountryItem>
              <CountryItem title="region">{region}</CountryItem>
              <CountryItem title="capital">{capital}</CountryItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

const CountryItem = ({ title, children }) => (
  <ListItem>
    {title}:{" "}
    <Text fontWeight="light" display="inline">
      {children}
    </Text>
  </ListItem>
);

export default CountryCard;
