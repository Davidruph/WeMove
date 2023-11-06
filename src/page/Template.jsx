import { Sidebar, TopNav, LogoutModal } from "../components";

function CompanyForm() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <TopNav />

          {/* page content */}
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center mb-5">
              <h1 className="h3 mb-0 text-gray-800">Create Company</h1>
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
