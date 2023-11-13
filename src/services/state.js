import { useQuery } from "react-query";
import { apiClient } from "../api/apiClient";
import { STATES_BY_COUNTRY_ID } from "../routes/constant";

export function useFetchStatesByCountry(countryId) {
  const { refetch: refetchStates, ...statesQuery } = useQuery(
    ["fetchStatesByCountry", countryId],
    async () => {
      const result = await apiClient.get(
        `${STATES_BY_COUNTRY_ID}/${countryId}`
      );
      return result.data;
    },
    {
      enabled: false,
    }
  );

  return {
    ...statesQuery,
    refetchStates,
  };
}
