import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { LoginPage, DashboardPage, CompanyForm, CompanyTable } from "../page";
import {
  LOGIN,
  DASHBOARD,
  LOGIN_PAGE,
  CREATE_ORGANIZATION_FORM,
  COMPANY_LIST,
} from "./constant";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const MAX_IDLE_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

const ProtectedWrapper = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const hasShownToast = useRef(false);
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());

  useEffect(() => {
    const updateActivityTime = () => {
      setLastActivityTime(Date.now());
    };

    document.addEventListener("mousemove", updateActivityTime);
    document.addEventListener("keydown", updateActivityTime);

    const timeoutId = setTimeout(() => {
      // Calculate the time elapsed since the last user activity.
      const elapsedTime = Date.now() - lastActivityTime;

      if (!token && !hasShownToast.current) {
        toast.error("Please login first!");
        hasShownToast.current = true;
        navigate(LOGIN_PAGE);
      } else if (elapsedTime >= MAX_IDLE_TIME) {
        localStorage.removeItem("accessToken");
        toast.error("You were inactive for 1 hour, pls login again!");
        hasShownToast.current = true;
        navigate(LOGIN_PAGE);
      }

      return () => {
        // Clean up event listeners when the component unmounts.
        document.removeEventListener("mousemove", updateActivityTime);
        document.removeEventListener("keydown", updateActivityTime);
        clearTimeout(timeoutId);
      };
    }, MAX_IDLE_TIME);
  }, [navigate, token, lastActivityTime]);

  return <Outlet />;
};

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={LOGIN_PAGE} element={<LoginPage />} />
        <Route path={DASHBOARD} element={<ProtectedWrapper />}>
          <Route index element={<DashboardPage />} />
        </Route>
        <Route path={CREATE_ORGANIZATION_FORM} element={<ProtectedWrapper />}>
          <Route index element={<CompanyForm />} />
        </Route>
        <Route path={COMPANY_LIST} element={<ProtectedWrapper />}>
          <Route index element={<CompanyTable />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouterConfig;
