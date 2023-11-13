import { Sidebar, TopNav, LogoutModal } from "../../../components";
import { Form, Field } from "react-final-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ADMIN_LIST } from "../../../routes/constant";
import { Link } from "react-router-dom";
import { useAdminService } from "../../../services/admin";

function NewAdminForm() {
  const { createAdmin, isCreateAdminLoading } = useAdminService();

  const onSubmit = async (values) => {
    try {
      //   console.log(values);
      createAdmin(values);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const allFieldsFilled = (values) => {
    const requiredFields = [
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
              <h1 className="h3 mb-0 text-gray-800">Create Admin</h1>
              <Link className="btn btn-success" to={ADMIN_LIST}>
                View Admin List
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
                          roleId: 1,
                        };

                        try {
                          await onSubmit(formData);
                          form.reset();
                        } catch (error) {
                          console.error("Submission error:", error);
                        }
                      }}
                      render={({ handleSubmit, submitting, values }) => (
                        <form onSubmit={handleSubmit} autoComplete="off">
                          <div className="row mb-3">
                            <div className="col">
                              <label htmlFor="floatingInput">Full Name *</label>
                              <Field
                                name="name"
                                component="input"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label htmlFor="floatingInput">Email *</label>
                              <Field
                                name="email"
                                component="input"
                                type="email"
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
                                type="password"
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
                                type="password"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row mb-5">
                            <div className="col">
                              <label htmlFor="floatingInput">
                                Phone Number *
                              </label>
                              <Field
                                name="phone_number"
                                component="input"
                                type="number"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-success w-100 btn-lg mb-4"
                            disabled={
                              submitting ||
                              isCreateAdminLoading ||
                              !allFieldsFilled(values)
                            }
                          >
                            {isCreateAdminLoading ? (
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

export default NewAdminForm;
