import axios from "axios";
import { application } from ".";

export const fetchAllCountries = async () => {
  const { data } = await axios.get(`${application.endpoint}/all`);
  return data;
};
