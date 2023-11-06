import { useQuery } from "react-query";
import { apiClient } from "../api/apiClient";
import { COUNTRIES } from "../routes/constant";

export const useCountryService = () => {
  //   Get country query
  const getCountryQuery = useQuery("fetchCountry", async () => {
    const result = await apiClient.get(COUNTRIES);
    return result;
  });

  return {
    getCountryQuery: getCountryQuery.data,
  };
};
