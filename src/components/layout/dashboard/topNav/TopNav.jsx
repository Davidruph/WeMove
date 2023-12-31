import { profileImg, avatar } from "../../../../assets";
import { getUserName } from "../../../../api/getUserDetails";
import { Link } from "react-router-dom";
import { PROFILE_PAGE, SETTINGS_PAGE } from "../../../../routes/constant";

function TopNav() {
  const userName = getUserName();
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {userName}
            </span>
            <img className="img-profile rounded-circle" src={avatar} />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" to={PROFILE_PAGE}>
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </Link>
            <Link className="dropdown-item" to={SETTINGS_PAGE}>
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </Link>
            <Link className="dropdown-item" href="#">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Activity Log
            </Link>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
