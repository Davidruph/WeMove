import { useMutation } from "react-query";
import { apiClient } from "../api/apiClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NEW_ADMIN } from "../routes/constant";

export const useAdminService = () => {
  // Fetch Admin
  const fetchAdmin = () => {
    return apiClient.get(NEW_ADMIN);
  };

  // Create Admin mutation
  const createAdminMutation = useMutation(
    (values) => apiClient.post(NEW_ADMIN, values, true),
    {
      onSuccess: () => {
        toast.success("Admin created successfully!");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const createAdmin = (values) => {
    createAdminMutation.mutate(values);
  };

  // Delete Admin mutation
  const deleteAdminMutation = useMutation((id) =>
    apiClient.delete(`${NEW_ADMIN}/${id}`)
  );

  const deleteAdmin = (id) => {
    deleteAdminMutation.mutate(id);
  };

  // Update Admin mutation
  const updateAdminMutation = useMutation((values) =>
    apiClient.put(`${NEW_ADMIN}/${values.id}`, values)
  );

  const updateAdmin = (values) => {
    updateAdminMutation.mutate(values);
  };

  return {
    fetchAdmin,
    createAdmin,
    deleteAdmin,
    updateAdmin,
    isCreateAdminLoading: createAdminMutation.isLoading,
    isUpdateAdminLoading: updateAdminMutation.isLoading,
    isDeleteAdminLoading: deleteAdminMutation.isLoading,
  };
};
