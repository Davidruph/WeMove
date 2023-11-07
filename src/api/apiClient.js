const BASE_URL = "https://we-move.onrender.com/api/v1/";
import { getUserRefreshToken } from "../api/getUserDetails";
import { REFRESH_TOKEN } from "../routes/constant";

// Function to get the access token from local storage
function getAccessToken() {
  return localStorage.getItem("accessToken");
}

// Function to refresh the access token
async function refreshAccessToken() {
  try {
    const refreshToken = getUserRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token found");
    }

    const response = await fetch(REFRESH_TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Access token refresh failed");
    }

    const data = await response.json();
    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
    } else {
      throw new Error("No new access token received");
    }
  } catch (error) {
    console.error("Error refreshing access token", error);
    // Handle the error, e.g., redirect to the login page
  }
}

async function request(endpoint, method = "GET", data, includeToken = true) {
  try {
    const token = getAccessToken();
    const headers = getHeaders(includeToken, token);

    const config = {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    if (response.status === 401 && includeToken) {
      // Access token is invalid, attempt to refresh it
      await refreshAccessToken();
      // Retry the request with the new access token
      return request(endpoint, method, data, includeToken);
    }

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData.message || "API request failed");
    }

    return response.json();
  } catch (error) {
    throw new Error("API request failed: " + error.message);
  }
}

// Function to get headers with or without access token
function getHeaders(includeToken, token) {
  if (includeToken && !token) {
    throw new Error("No access token found");
  }

  return {
    "Content-Type": "application/json",
    ...(includeToken && token ? { Authorization: `Bearer ${token}` } : {}),
  };
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
