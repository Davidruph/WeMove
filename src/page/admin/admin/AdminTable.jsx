import { Sidebar, TopNav, LogoutModal } from "../../../components";
import { Form, Field } from "react-final-form";
import { useQueryClient, useQuery } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAdminService } from "../../../services/admin";
import { NEW_ADMIN_FORM } from "../../../routes/constant";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

function AdminTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();
  const adminService = useAdminService();

  const { data, error, isLoading } = useQuery("fetchAdmin", async () => {
    const result = await adminService.fetchAdmin();
    return result;
  });

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        adminService.deleteAdmin(id);
        queryClient.invalidateQueries("fetchAdmin");
        toast.success("Admin data deleted successfully");
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
    try {
      adminService.updateAdmin(values);
      toast.success("Admin data updated successfully");
      queryClient.invalidateQueries("fetchAdmin");
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

  const resultData = data ? data.user : [];

  // Paginate data
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = resultData.slice(startIndex, endIndex);

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <TopNav />

          <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-5">
              <h1 className="h3 mb-0 text-gray-800">Admin List</h1>
              <Link className="btn btn-success" to={NEW_ADMIN_FORM}>
                <i className="fa fa-plus pr-2"></i> Create Admin
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
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.name}</td>
                          <td>{row.email}</td>
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
                  Admin Edit
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
                    onSubmit={async (values) => {
                      const formData = {
                        ...values,
                        roleId: 1,
                      };

                      try {
                        await onSubmit(formData);
                      } catch (error) {
                        console.error("Submission error:", error);
                      }
                    }}
                    initialValues={selectedRecord}
                    render={({ handleSubmit, submitting }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                          <div className="col">
                            <label htmlFor="floatingInput">Full Name</label>
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
                            <label htmlFor="floatingInput">Email</label>
                            <Field
                              name="email"
                              component="input"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <Field name="id" component="input" type="hidden" />
                        <div className="buttons pb-3">
                          <button
                            className="btn btn-success w-100"
                            type="submit"
                            disabled={submitting}
                          >
                            {adminService.isUpdateAdminLoading ? (
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

export default AdminTable;
