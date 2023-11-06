import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { LoginPage, DashboardPage, CompanyForm, CompanyTable } from "../page";
import {
  LOGIN,
  DASHBOARD,
  LOGIN_PAGE,
  CREATE_ORGANIZATION_FORM,
  COMPANY_LIST,
} from "./constant";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const ProtectedWrapper = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const hasShownToast = useRef(false); // Using ref to track if toast has been shown

  useEffect(() => {
    if (!token && !hasShownToast.current) {
      toast.error("Please login first!");
      hasShownToast.current = true; // Mark that the toast has been shown
      navigate(LOGIN_PAGE);
    }
  }, [navigate, token]);

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
