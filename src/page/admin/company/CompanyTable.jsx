/* eslint-disable react/prop-types */

import { Sidebar, TopNav, LogoutModal } from "../../../components";
import { Form, Field } from "react-final-form";
import { useQueryClient, useQuery } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCompanyService } from "../../../services/company";
import { CREATE_ORGANIZATION_FORM } from "../../../routes/constant";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { ClipLoader } from "react-spinners";

function CompanyTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();
  const companyService = useCompanyService(); // Use the service

  const { data, error, isLoading } = useQuery("fetchOrganization", async () => {
    const result = await companyService.fetchOrganizations();
    return result;
  });

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await companyService.deleteOrganization(id);
        toast.success("Operation successful");
        queryClient.invalidateQueries("fetchOrganization");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const handleEdit = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const onSubmit = async (values) => {
    console.log(values);
    try {
      await companyService.updateOrganization(values);
      toast.success("Update successful");
      queryClient.invalidateQueries("fetchOrganization");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (data && data.result) {
      setCurrentPage(1);
    }
  }, [data]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const resultData = data ? data.result : [];

  // Paginate data
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = resultData.slice(startIndex, endIndex);

  const [existingImageURL, setExistingImageURL] = useState(
    selectedRecord ? selectedRecord.company_photo_url : ""
  );

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <TopNav />

          <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-5">
              <h1 className="h3 mb-0 text-gray-800">Company List</h1>
              <Link className="btn btn-success" to={CREATE_ORGANIZATION_FORM}>
                <i className="fa fa-plus pr-2"></i> Create Company
              </Link>
            </div>

            <div>
              {isLoading ? (
                <div className="text-center text-dark pt-3 pb-3">
                  Loading Records...
                </div>
              ) : error ? (
                <div className="text-center text-dark pt-3 pb-3">
                  Error: {error.message}
                </div>
              ) : (
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead className="bg-success text-white">
                      <tr>
                        <th>Company Name</th>
                        <th>Admin Name</th>
                        <th>Admin Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Postal Address</th>
                        <th>Vat Number</th>
                        <th>Driver Count</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.company_name}</td>
                          <td>{row.admin_name}</td>
                          <td>{row.admin_email}</td>
                          <td>{row.admin_phone_number}</td>
                          <td>{row.address}</td>
                          <td>{row.city}</td>
                          <td>{row.postal_code}</td>
                          <td>{row.vat_number}</td>
                          <td>{row.driver_count}</td>
                          <td>
                            <button
                              className="btn btn-info mr-3"
                              data-toggle="modal"
                              data-target="#editModal"
                              onClick={() => handleEdit(row)}
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(row.id)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}

              <div className="d-flex justify-content-center">
                <Pagination>
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  <Pagination.Item active>{currentPage}</Pagination.Item>
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={
                      paginatedData.length < pageSize || endIndex >= data.length
                    }
                  />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoutModal />
      {isModalOpen && (
        <div
          className="modal fade"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          id="editModal"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Company Edit
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="p-1">
                  <Form
                    onSubmit={onSubmit}
                    initialValues={selectedRecord}
                    render={({ handleSubmit, submitting, pristine }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                          <div className="col">
                            <label htmlFor="floatingInput">Company Name</label>
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
                            <label htmlFor="floatingInput">Admin Name</label>
                            <Field
                              name="admin_name"
                              component="input"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="floatingInput">Email</label>
                            <Field
                              name="admin_email"
                              component="input"
                              type="email"
                              className="form-control"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="floatingInput">Phone Number</label>
                            <Field
                              name="admin_phone_number"
                              component="input"
                              type="number"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col">
                            <label htmlFor="floatingInput">Address</label>
                            <Field
                              name="address"
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
                        </div>
                        <div className="row mb-3">
                          <div className="col">
                            <label htmlFor="floatingInput">Country</label>
                            <Field
                              name="countryId"
                              component="input"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="floatingInput">State</label>
                            <Field
                              name="stateId"
                              component="input"
                              type="number"
                              className="form-control"
                            />
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
                            <label htmlFor="floatingInput">VAT Number</label>
                            <Field
                              name="vat_number"
                              component="input"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="row mb-5">
                          <div className="col">
                            <label htmlFor="floatingInput">Company Photo</label>
                            {existingImageURL && (
                              <img
                                src={existingImageURL}
                                alt="Existing Company Photo"
                                height={50}
                                width={100}
                              />
                            )}
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
                        <Field name="id" component="input" type="hidden" />
                        <div className="buttons pb-3">
                          <button
                            className="btn btn-success w-100"
                            type="submit"
                            disabled={submitting}
                          >
                            {companyService.isUpdateOrganizationLoading ? (
                              <>
                                <span className="loading-dots">
                                  <span className="loading-dots-dot"></span>
                                  <span className="loading-dots-dot"></span>
                                  <span className="loading-dots-dot"></span>
                                </span>
                              </>
                            ) : (
                              "Update"
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CompanyTable;
