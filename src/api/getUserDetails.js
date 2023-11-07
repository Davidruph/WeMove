function parseUserDetails() {
  const userData = localStorage.getItem("user_details");
  if (!userData) {
    return null;
  }

  try {
    return JSON.parse(userData);
  } catch (error) {
    console.error("Error parsing user details from localStorage:", error);
    return null;
  }
}

export function getUserName() {
  const userDetails = parseUserDetails();
  return userDetails?.name || null;
}

export function getUserEmail() {
  const userDetails = parseUserDetails();
  return userDetails?.email || null;
}

export function getUserID() {
  const userDetails = parseUserDetails();
  return userDetails?.id || null;
}

export function getUserCompanyID() {
  const userDetails = parseUserDetails();
  return userDetails?.companyId || null;
}

export function getUserPhone() {
  const userDetails = parseUserDetails();
  return userDetails?.phone_number || null;
}

export function getUserType() {
  const userDetails = parseUserDetails();
  return userDetails?.user_type || null;
}

export function getUserRoleID() {
  const userDetails = parseUserDetails();
  return userDetails?.roleId || null;
}
export function getUserRefreshToken() {
  const userDetails = parseUserDetails();
  return userDetails?.refresh_token || null;
}
