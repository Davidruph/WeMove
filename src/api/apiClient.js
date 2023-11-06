const BASE_URL = "https://we-move.onrender.com/api/v1/";

function getHeaders(includeToken = true) {
  const token = localStorage.getItem("accessToken");

  if (includeToken && !token) {
    throw new Error("No access token found");
  }

  return {
    "Content-Type": "application/json",
    ...(includeToken && token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function request(endpoint, method = "GET", data, includeToken = true) {
  const headers = getHeaders(includeToken);

  const config = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const responseData = await response.json();
    throw new Error(responseData.message || "API request failed");
  }

  return response.json();
}

export const apiClient = {
  get: (endpoint, includeToken = true) =>
    request(endpoint, "GET", null, includeToken),
  post: (endpoint, data, includeToken = true) =>
    request(endpoint, "POST", data, includeToken),
  put: (endpoint, data, includeToken = true) =>
    request(endpoint, "PUT", data, includeToken),
  delete: (endpoint, includeToken = true) =>
    request(endpoint, "DELETE", null, includeToken),
};
