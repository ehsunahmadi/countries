import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { Tag, TagLabel } from "@chakra-ui/tag";
import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import CountryDetailField from "./CountryDetailField";

const CountryDetails = ({ country }) => {
  const leftFields = useMemo(
    () => [
      { name: "Native Name", value: country.population },
      {
        name: "Population",
        value: new Intl.NumberFormat("en-IN").format(country.population),
      },
      { name: "Region", value: country.region },
      { name: "Sub Region", value: country.subregion },
      { name: "Capital", value: country.capital },
    ],
    [country]
  );
  const rightFields = useMemo(
    () => [
      { name: "Top Level Domain", value: country.topLevelDomain },
      {
        name: "Currencies",
        renderComponent: () => (
          <>
            {country.currencies.map(({ name }, index) => (
              <Text display="inline" key={index}>
                {name + ", "}
              </Text>
            ))}
          </>
        ),
      },
      {
        name: "Languages",
        renderComponent: () => (
          <>
            {country.languages.map(({ name }, index) => (
              <Text display="inline" key={index}>
                {name + ", "}
              </Text>
            ))}
          </>
        ),
      },
    ],
    [country]
  );

  return (
    <Box>
      <Heading as="h2" size="lg" pt="50px" pb="50px">
        {country.name}
      </Heading>
      <Wrap>
        <WrapItem>
          <Box>{renderFields(rightFields)}</Box>
        </WrapItem>
        <WrapItem>
          <Box>{renderFields(leftFields)}</Box>
        </WrapItem>
      </Wrap>
      <Wrap>
        <WrapItem>
          <Text fontWeight="bold">Border countries:</Text>
        </WrapItem>
        <WrapItem>
          {!country ? null : !!country.borders.length ? (
            <HStack spacing={4} alignItems="center">
              {country.borders.map((border) => (
                <Link as={RouterLink} to={`/${border}`} key={border}>
                  <Tag size="md" variant="outline">
                    <TagLabel>{border}</TagLabel>
                  </Tag>
                </Link>
              ))}
            </HStack>
          ) : (
            <Text>None</Text>
          )}
        </WrapItem>
      </Wrap>
    </Box>
  );
};

const renderFields = (fields) =>
  fields.map((field) => <CountryDetailField field={field} />);

export default CountryDetails;
