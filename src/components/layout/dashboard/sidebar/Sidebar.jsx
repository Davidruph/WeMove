import { Link } from "react-router-dom";
import {
  CREATE_ORGANIZATION_FORM,
  DASHBOARD,
  COMPANY_LIST,
  NEW_ADMIN_FORM,
  ADMIN_LIST,
} from "../../../../routes/constant";
import { useEffect } from "react";
import {
  handleSidebarToggle,
  handleResize,
  handleScroll,
  handleScrollToTop,
} from "../../../../utils/Toggle";

function Sidebar() {
  useEffect(() => {
    const sidebarToggles = document.querySelectorAll(
      "#sidebarToggle, #sidebarToggleTop"
    );
    sidebarToggles.forEach((toggle) =>
      toggle.addEventListener("click", handleSidebarToggle)
    );

    window.addEventListener("resize", handleResize);
    document.addEventListener("scroll", handleScroll);

    const scrollToTopElems = document.querySelectorAll("a.scroll-to-top");
    scrollToTopElems.forEach((elem) =>
      elem.addEventListener("click", handleScrollToTop)
    );

    return () => {
      sidebarToggles.forEach((toggle) =>
        toggle.removeEventListener("click", handleSidebarToggle)
      );
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scroll", handleScroll);
      scrollToTopElems.forEach((elem) =>
        elem.removeEventListener("click", handleScrollToTop)
      );
    };
  }, []);

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to={DASHBOARD}
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-taxi"></i>
        </div>
        <div className="sidebar-brand-text mx-3 ">WeMove</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to={DASHBOARD}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Navigations</div>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#Admin"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-user-cog"></i>
          <span>Manage Admin</span>
        </a>
        <div
          id="Admin"
          className="collapse"
          aria-labelledby="Admin"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to={NEW_ADMIN_FORM}>
              New Admin
            </Link>
            <Link className="collapse-item" to={ADMIN_LIST}>
              View all Admin
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-building"></i>
          <span>Company</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to={CREATE_ORGANIZATION_FORM}>
              Create Organization
            </Link>
            <Link className="collapse-item" to={COMPANY_LIST}>
              View all Organization
            </Link>
          </div>
        </div>
      </li>

      {/* <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse3"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-users"></i>
          <span>Users</span>
        </a>
        <div
          id="collapse3"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse4"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-user-tag"></i>
          <span>Roles</span>
        </a>
        <div
          id="collapse4"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse5"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-car"></i>
          <span>Vehicle Type</span>
        </a>
        <div
          id="collapse5"
          className="collapse"
          aria-labelledby="heading5"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse6"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-car"></i>
          <span>Vehicle Make</span>
        </a>
        <div
          id="collapse6"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse7"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-car"></i>
          <span>Vehicle Model</span>
        </a>
        <div
          id="collapse7"
          className="collapse"
          aria-labelledby="heading7"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse8"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-users-cog"></i>
          <span>Drivers</span>
        </a>
        <div
          id="collapse8"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse9"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-user"></i>
          <span>Riders</span>
        </a>
        <div
          id="collapse9"
          className="collapse"
          aria-labelledby="heading8"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse10"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-comment"></i>
          <span>Cancel Reason</span>
        </a>
        <div
          id="collapse10"
          className="collapse"
          aria-labelledby="heading9"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse11"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-taxi"></i>
          <span>Vehicle</span>
        </a>
        <div
          id="collapse11"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse12"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-money-bill"></i>
          <span>Fare</span>
        </a>
        <div
          id="collapse12"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse13"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-car-side"></i>
          <span>Trips</span>
        </a>
        <div
          id="collapse13"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse14"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-file-invoice-dollar"></i>
          <span>Statement</span>
        </a>
        <div
          id="collapse14"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse15"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-envelope"></i>
          <span>Messaging</span>
        </a>
        <div
          id="collapse15"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="#">
              #####
            </a>
            <a className="collapse-item" href="#">
              ######
            </a>
          </div>
        </div>
      </li> */}
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
