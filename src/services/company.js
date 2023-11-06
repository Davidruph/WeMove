import { useMutation } from "react-query";
import { apiClient } from "../api/apiClient";
import { toast } from "react-toastify";
import { CREATE_ORGANIZATION } from "../routes/constant";

export const useCompanyService = () => {
  // Fetch Organizations
  const fetchOrganizations = () => {
    return apiClient.get(CREATE_ORGANIZATION);
  };

  // Create Organization mutation
  const createOrganizationMutation = useMutation(
    (values) => apiClient.post(CREATE_ORGANIZATION, values, true),
    {
      onSuccess: () => {
        toast.success("Organization created successfully!");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const createOrganization = (values) => {
    createOrganizationMutation.mutate(values);
  };

  // Delete Organization mutation
  const deleteOrganizationMutation = useMutation((id) =>
    apiClient.delete(`${CREATE_ORGANIZATION}/${id}`)
  );

  const deleteOrganization = (id) => {
    deleteOrganizationMutation.mutate(id);
  };

  // Update Organization mutation
  const updateOrganizationMutation = useMutation((values) =>
    apiClient.put(`${CREATE_ORGANIZATION}/${values.id}`, values)
  );

  const updateOrganization = (values) => {
    updateOrganizationMutation.mutate(values);
  };

  return {
    fetchOrganizations,
    createOrganization,
    deleteOrganization,
    updateOrganization,
    isCreateOrganizationLoading: createOrganizationMutation.isLoading,
    isUpdateOrganizationLoading: updateOrganizationMutation.isLoading,
    isDeleteOrganizationLoading: deleteOrganizationMutation.isLoading,
  };
};
