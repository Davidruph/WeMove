import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topNav/TopNav";
import PageContent from "./pageContent/PageContent";
// import Footer from "./footer/Footer";
import LogoutModal from "./logoutModal/LogoutModal";

function Index() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Topbar />
          <PageContent />
          {/* <Footer /> */}
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default Index;
