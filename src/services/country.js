import { useQuery } from "react-query";
import { apiClient } from "../api/apiClient";
import { COUNTRIES } from "../routes/constant";

export const useCountryService = () => {
  // Get country query
  const {
    data: countryData,
    refetch: refetchCountry,
    isLoading,
  } = useQuery(
    "fetchCountry",
    async () => {
      const result = await apiClient.get(COUNTRIES);
      return result;
    },
    {
      enabled: false, // Disable automatic fetching
    }
  );

  return {
    getCountryQuery: countryData,
    refetchCountry,
    isLoadingCountry: isLoading,
  };
};
