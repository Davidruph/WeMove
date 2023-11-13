import { Sidebar, TopNav, LogoutModal } from "../../../components";
import { Form, Field } from "react-final-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COMPANY_LIST } from "../../../routes/constant";
import { Link } from "react-router-dom";
import { useCompanyService } from "../../../services/company";
import { useCountryService } from "../../../services/country";
import { useFetchStatesByCountry } from "../../../services/state";
import { useState } from "react";
import { useEffect } from "react";

function CompanyForm() {
  const { createOrganization, isCreateOrganizationLoading } =
    useCompanyService();

  const { getCountryQuery, refetchCountry, isLoadingCountry } =
    useCountryService();
  const [selectedCountry, setSelectedCountry] = useState("");
  const {
    refetchStates,
    data: statesData,
    isLoading: isStatesLoading,
  } = useFetchStatesByCountry(selectedCountry);

  const fetchCountry = () => {
    refetchCountry();
  };

  const fetchStates = () => {
    refetchStates();
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  useEffect(() => {
    fetchStates();
  }, [selectedCountry]);

  const onSubmit = async (values) => {
    try {
      createOrganization(values);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const countries = getCountryQuery?.country;

  const handleCountryChange = (newCountry) => {
    setSelectedCountry(newCountry);
  };

  const states = isStatesLoading ? [] : statesData || [];

  const allFieldsFilled = (values) => {
    const requiredFields = [
      "company_name",
      "name",
      "email",
      "phone_number",
      "password",
      "confirm_password",
    ];
    return requiredFields.every((field) => !!values[field]);
  };

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <TopNav />

          {/* page content */}
          <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-5">
              <h1 className="h3 mb-0 text-gray-800">Create Company</h1>
              <Link className="btn btn-success" to={COMPANY_LIST}>
                View Company List
              </Link>
            </div>

            <div className="row pt-3 pb-5">
              <div className="col-lg-12">
                <div className="card pt-4">
                  <div className="p-4">
                    <Form
                      onSubmit={async (values, form) => {
                        const formData = {
                          ...values,
                          countryId: selectedCountry,
                        };

                        try {
                          await onSubmit(formData);
                          form.reset();
                        } catch (error) {
                          console.error("Submission error:", error);
                        }
                      }}
                      render={({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="row mb-3">
                            <div className="col">
                              <label htmlFor="floatingInput">
                                Company Name *
                              </label>
                              <Field
                                name="company_name"
                                component="input"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label htmlFor="floatingInput">VAT Number</label>
                              <Field
                                name="vat_number"
                                component="input"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor="floatingInput">Postal Code</label>
                              <Field
                                name="postal_code"
                                component="input"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor="floatingInput">Address</label>
                              <Field
                                name="address"
                                component="input"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label htmlFor="floatingInput">Country</label>
                              <Field
                                name="countryId"
                                component={({ input }) => (
                                  <select
                                    {...input}
                                    className="form-control"
                                    value={selectedCountry}
                                    onChange={(e) =>
                                      handleCountryChange(e.target.value)
                                    }
                                  >
                                    <option value="">Select a country</option>
                                    {countries?.map((country) => (
                                      <option
                                        key={country.id}
                                        value={country.id}
                                      >
                                        {country.name}
                                      </option>
                                    ))}
                                  </select>
                                )}
                              />
                            </div>
                            <div className="col">
                              <label htmlFor="floatingInput">State</label>
                              <Field
                                name="stateId"
                                component="select"
                                className="form-control"
                              >
                                {states.map((state) => (
                                  <option key={state.id} value={state.id}>
                                    {state.name}
                                  </option>
                                ))}
                              </Field>
                            </div>
                            <div className="col">
                              <label htmlFor="floatingInput">City</label>
                              <Field
                                name="city"
                                component="input"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label htmlFor="floatingInput">Name *</label>
                              <Field
                                name="name"
                                component="input"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor="floatingInput">Email *</label>
                              <Field
                                name="email"
                                component="input"
                                type="email"
                                className="form-control"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor="floatingInput">
                                Phone number *
                              </label>
                              <Field
                                name="phone_number"
                                component="input"
                                type="number"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label htmlFor="floatingInput">Password *</label>
                              <Field
                                name="password"
                                component="input"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor="floatingInput">
                                Confirm Password *
                              </label>
                              <Field
                                name="confirm_password"
                                component="input"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row mb-5">
                            <div className="col">
                              <label htmlFor="floatingInput">
                                Company Photo
                              </label>
                              <Field name="company_photo">
                                {({ input }) => (
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="form-control"
                                    onChange={(e) => {
                                      const selectedFile = e.target.files[0];
                                      input.onChange(selectedFile);
                                    }}
                                  />
                                )}
                              </Field>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-success w-100 btn-lg mb-4"
                            disabled={
                              submitting ||
                              isCreateOrganizationLoading ||
                              !allFieldsFilled(values)
                            }
                          >
                            {isCreateOrganizationLoading ? (
                              <>
                                <span className="loading-dots">
                                  <span className="loading-dots-dot"></span>
                                  <span className="loading-dots-dot"></span>
                                  <span className="loading-dots-dot"></span>
                                </span>
                              </>
                            ) : (
                              "CREATE"
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
          {/* page content */}
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default CompanyForm;
