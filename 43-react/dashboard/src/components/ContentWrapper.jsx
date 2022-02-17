import React from "react";
import ContentRowTop from "./ContentRowTop";

const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light topbar static-top mb-4 bg-white shadow">
          {/* <!-- Sidebar Toggle (Topbar) --> */}
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i className="fa fa-bars"></i>
          </button>

          {/* <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">
            {/* <!-- Nav Item - Alerts --> */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="alertsDropdown"
              >
                <i className="fas fa-bell fa-fw"></i>
                {/* <!-- Counter - Alerts --> */}
                <span className="badge badge-danger badge-counter">3+</span>
              </a>
            </li>

            {/* <!-- Nav Item - Messages --> */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="messagesDropdown"
              >
                <i className="fas fa-envelope fa-fw"></i>
                {/* <!-- Counter - Messages --> */}
                <span className="badge badge-danger badge-counter">7</span>
              </a>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

            {/* <!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="userDropdown"
              >
                <span className="d-none d-lg-inline small mr-2 text-gray-600">
                  Jordan Walke
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="assets/images/jordan-walke.png"
                  alt="Jordan Walke - Creador de React"
                  width="60"
                />
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- End of Topbar --> */}
        {/* <!-- Content Row Top --> */}
        <ContentRowTop />
        {/* <!--End Content Row Top--> */}
      </div>
      {/* <!-- End of MainContent --> */}

      {/*  */}

      {/* <!-- Footer --> */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright my-auto text-center">
            <span>Copyright &copy; Dashboard 2021</span>
          </div>
        </div>
      </footer>
      {/* <!-- End of Footer --> */}
    </div>
  );
};

export default ContentWrapper;
