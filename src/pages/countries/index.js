import { Box, SimpleGrid } from "@chakra-ui/layout";
import React, { useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { LoadingSpinner, Message } from "../../components/lib";
import { fetchAllCountries } from "../../configs/providers";
import CountryCard from "./CountryCard";
import RegionSelect from "./RegionSelect";
import SearchCountry from "./SearchCountry";

const Countries = () => {
  const [params, setParams] = useState({ name: undefined, region: undefined });
  const { data: countries, status, error } = useQuery("countries", () =>
    fetchAllCountries()
  );


  const relevantCountries = useMemo(() => {
    if (!countries) {
      return [];
    }

    if (!!params.region && !!params.name) {
      const filteredByRegion = countries.filter(({ region }) => {
        return region === params.region;
      });
      return filteredByRegion.filter(({ name }) => name === params.name);
    }

    if (!!params.region) {
      return countries.filter(({ region }) => {
        return region === params.region;
      });
    }

    if (!!params.name) {
      return countries.filter(({ name }) => {
        return (
          name.toLowerCase().includes(params.name.toLowerCase()) ||
          name
            .toLowerCase()
            .replace(/[aeiou]/gi, "")
            .includes(params.name.toLowerCase())
        );
      });
    }

    return countries;
  }, [countries, params]);

  const renderData = useCallback(() => {
    switch (status) {
      case "loading":
        return <LoadingSpinner />;
      case "error":
        return (
          <Message
            status="error"
            title={error?.message ?? "There is a problem!"}
          />
        );
      case "success":
        return relevantCountries.length ? (
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing="64px"
            align="center"
          >
            {relevantCountries.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))}
          </SimpleGrid>
        ) : (
          <Message
            status="info"
            title="No country found!"
            description="Try adjusting your filters!"
          />
        );

      default:
        return null;
    }
  }, [error, relevantCountries, status]);

  return (
    <Box>
      <Box pt={6} pb={6}>
        <SearchCountry
          save={({ name }) => {
            console.log("recieved:", name);
            if (!name) {
              setParams((params) => {
                console.log("no name line ", { ...params, name: undefined });

                return { ...params, name: undefined };
              });
            } else {
              setParams((params) => ({ ...params, name }));
            }
          }}
          value={params.name}
        />
        <RegionSelect
          save={(region) => {
            if (region === "NONE") {
              setParams((params) => ({ ...params, region: undefined }));
            } else {
              setParams((params) => ({ ...params, region }));
            }
          }}
        />
      </Box>
      {renderData()}
    </Box>
  );
};

export default Countries;
