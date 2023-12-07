import { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useMutation } from "react-query";
import { apiClient } from "../api/apiClient";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ADMIN_LOGIN_ROUTE,
  // RIDER_LOGIN_ROUTE,
  // DRIVER_LOGIN_ROUTE,
  DASHBOARD,
} from "../routes/constant";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      const redirectTo = location.state?.from || DASHBOARD;
      navigate(redirectTo);
    }
  }, [token, navigate, location.state]);

  const mutation = useMutation(
    (values) => apiClient.post(ADMIN_LOGIN_ROUTE, values, false),
    {
      onSuccess: (data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user_details", JSON.stringify(data.user));
        navigate(DASHBOARD);
        toast.success("Successfully logged in!");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSubmit = (values) => {
    mutation.mutate(values);
  };

  const allFieldsFilled = (values) => {
    const requiredFields = ["email", "password"];
    return requiredFields.every((field) => !!values[field]);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-5">
              <div className="card shadow mt-5">
                <div className="form p-4">
                  <h3 className="pt-3 pb-4 text-center">
                    LOGIN TO <span className="text-success">WeMove Rides</span>
                  </h3>
                  <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, submitting, values }) => (
                      <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="mb-4">
                          <label htmlFor="">Email address</label>
                          <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="name@example.com"
                            className="form-control"
                            id="floatingInput"
                            autoComplete="off"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="floatingPassword">Password</label>
                          <Field
                            name="password"
                            component="input"
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            id="floatingPassword"
                            autoComplete="off"
                          />
                        </div>
                        <Link to="#" className="text-success pb-3 float-right">
                          Forgot Password
                        </Link>

                        {mutation.isError && (
                          <p className="text-danger pb-2">
                            {mutation.error.message}
                          </p>
                        )}

                        <button
                          type="submit"
                          className="btn btn-success w-100 btn-lg mb-4"
                          disabled={
                            submitting ||
                            mutation.isLoading ||
                            !allFieldsFilled(values)
                          }
                        >
                          {mutation.isLoading ? (
                            <>
                              <span className="loading-dots">
                                <span className="loading-dots-dot"></span>
                                <span className="loading-dots-dot"></span>
                                <span className="loading-dots-dot"></span>
                              </span>
                            </>
                          ) : (
                            "LOGIN"
                          )}
                        </button>
                      </form>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
