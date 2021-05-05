import { useCallback } from "react";
import { useQuery } from "react-query";
import { fetchAllCountries } from "../configs/providers";

export const useCountry = (params) => {
  const { data: countries, ...rest } = useQuery("countries", () =>
    fetchAllCountries()
  );

  const getCountry = useCallback(() => {
    if (countries) {
      for (const country of countries) {
        for (const paramKey of Object.keys(params)) {
          if (country[paramKey] === params[paramKey]) {
            return country;
          }
        }
      }
    }
    return undefined;
  }, [countries, params]);

  return { data: getCountry(), ...rest };
};
