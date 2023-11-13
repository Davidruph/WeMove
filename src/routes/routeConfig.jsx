/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import {
  LoginPage,
  DashboardPage,
  CompanyForm,
  CompanyTable,
  NewAdminForm,
  AdminTable,
} from "../page";
import {
  LOGIN,
  DASHBOARD,
  LOGIN_PAGE,
  CREATE_ORGANIZATION_FORM,
  COMPANY_LIST,
  NEW_ADMIN_FORM,
  ADMIN_LIST,
  PROFILE_PAGE,
  SETTINGS_PAGE,
} from "./constant";

const MAX_IDLE_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

const SessionTimeout = ({ navigate }) => {
  const token = localStorage.getItem("accessToken");
  const hasShownToast = useRef(false);
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());

  useEffect(() => {
    if (!token && !hasShownToast.current) {
      toast.error("Please log in first!");
      hasShownToast.current = true;
      navigate(LOGIN_PAGE);
    }
  }, [token, navigate]);

  useEffect(() => {
    const updateActivityTime = () => {
      setLastActivityTime(Date.now());
    };

    const checkUserActivity = () => {
      const elapsedTime = Date.now() - lastActivityTime;
      if (elapsedTime >= MAX_IDLE_TIME) {
        localStorage.removeItem("accessToken");
        toast.error("You were inactive for 1 hour, please log in again.");
        hasShownToast.current = true;
        navigate(LOGIN_PAGE);
      }
    };

    document.addEventListener("mousemove", updateActivityTime);
    document.addEventListener("keydown", updateActivityTime);

    const activityCheckInterval = setInterval(checkUserActivity, 5000); // Check every 5 seconds

    return () => {
      // Clean up event listeners and interval when the component unmounts.
      document.removeEventListener("mousemove", updateActivityTime);
      document.removeEventListener("keydown", updateActivityTime);
      clearInterval(activityCheckInterval);
    };
  }, [navigate, token, lastActivityTime]);

  return <Outlet />;
};

const RouterConfig = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={LOGIN_PAGE} element={<LoginPage />} />
        <Route
          path={DASHBOARD}
          element={<SessionTimeout navigate={navigate} />}
        >
          <Route index element={<DashboardPage />} />
        </Route>
        <Route
          path={CREATE_ORGANIZATION_FORM}
          element={<SessionTimeout navigate={navigate} />}
        >
          <Route index element={<CompanyForm />} />
        </Route>
        <Route
          path={COMPANY_LIST}
          element={<SessionTimeout navigate={navigate} />}
        >
          <Route index element={<CompanyTable />} />
        </Route>
        <Route
          path={NEW_ADMIN_FORM}
          element={<SessionTimeout navigate={navigate} />}
        >
          <Route index element={<NewAdminForm />} />
        </Route>
        <Route
          path={ADMIN_LIST}
          element={<SessionTimeout navigate={navigate} />}
        >
          <Route index element={<AdminTable />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouterConfig;
