import React from "react";
import { useParams } from "react-router";

const Country = () => {
  const { id } = useParams();
  return <h2>country {id}</h2>;
};

export default Country;
