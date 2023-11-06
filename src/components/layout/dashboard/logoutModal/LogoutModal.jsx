import { toast } from "react-toastify";
import { LOGIN_PAGE } from "../../../../routes/constant";
import { useQueryClient } from "react-query";

function LogoutModal() {
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user_details");
    toast.success("Logged out successfully!");
    queryClient.clear();
    window.location.href = LOGIN_PAGE;
  };
  return (
    <>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select Logout below if you are ready to end your current session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-light text-dark"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button className="btn btn-success" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoutModal;
