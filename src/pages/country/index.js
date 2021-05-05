import { Image } from "@chakra-ui/image";
import { AspectRatio, Code, Wrap, WrapItem } from "@chakra-ui/layout";
import React, { useCallback } from "react";
import { Redirect, useParams } from "react-router";
import BackButton from "../../components/BackButton";
import { LoadingSpinner, Message } from "../../components/lib";
import { useCountry } from "../../utils/countries";
import CountryDetails from "./CountryDetails";

const Country = () => {
  const { id: alpha3Code } = useParams();
  const { data: country, status, error } = useCountry({ alpha3Code });

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
        return !!country ? (
          <Wrap justify="center" spacing="24px">
            <WrapItem>
              <AspectRatio ratio={4 / 3} minW="400px">
                <Image src={country?.flag} alt={country.name} />
              </AspectRatio>
            </WrapItem>
            <WrapItem>
              <CountryDetails country={country} />
            </WrapItem>
          </Wrap>
        ) : (
          <Redirect to="/" />
        );

      default:
        return null;
    }
  }, [country, error, status]);

  return (
    <div>
      <BackButton />
      {renderData()}
    </div>
  );
};

export default Country;
