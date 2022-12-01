import { NavList } from "./NavList";
import { NavLink } from "react-router-dom";

export const NavPC = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            {/* <!-- header left --> */}
            <div className="header-left hide-md">
              <div className="header-logo logo-type">
                <a href="index.html">
                  <img
                    src="/assets/images/logo.png"
                    className="img-fluid"
                    width="150"
                  />
                </a>
              </div>
            </div>
            {/* <!-- END / header left --> */}

            {/* <!-- header middle --> */}
            <div className="header-middle">
              <div className="header-searchbox">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                    />
                    <button>
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- END / header middle --> */}

            {/* <!-- header right --> */}
            <div className="header-right">
              {/* <!-- dropdown message --> */}
              <div className="dropdown header-message">
                <a href="" data-toggle="dropdown" className="dropdown-toggle">
                  <span className="feather-icon">
                    <i data-feather="mail"></i>
                  </span>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-header">
                    <div className="dropdown-title">
                      <span>Messages</span>
                    </div>
                    <div className="notification-counter">2</div>
                  </div>
                  <ul className="media-list">
                    <li className="dropdown-item">
                      <a href="#">
                        <div className="media-item">
                          <div className="media-circle bg-success">
                            <img
                              src="./assets/images/avatar1.jpg"
                              className="img-responsive"
                              alt="..."
                            />
                          </div>
                          <div className="media-item-text">
                            <span className="media-item-title">
                              2018 income-expense report
                            </span>
                            <span className="media-item-subtitle">Brad T.</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-item active">
                      <a href="#">
                        <div className="media-item">
                          <div className="media-circle bg-success">
                            <img
                              src="./assets/images/avatar2.jpg"
                              className="img-responsive"
                              alt="..."
                            />
                          </div>
                          <div className="media-item-text">
                            <span className="media-item-title">
                              Order notification #1344763
                            </span>
                            <span className="media-item-subtitle">
                              Scarlet P.
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <div className="media-item">
                          <div className="media-circle bg-success">
                            <img
                              src="./assets/images/avatar3.jpg"
                              className="img-responsive"
                              alt="..."
                            />
                          </div>
                          <div className="media-item-text">
                            <span className="media-item-title">
                              About the latest update
                            </span>
                            <span className="media-item-subtitle">
                              Carlos M.
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-item active">
                      <a href="#">
                        <div className="media-item">
                          <div className="media-circle bg-success">
                            <img
                              src="./assets/images/avatar4.jpg"
                              className="img-responsive"
                              alt="..."
                            />
                          </div>
                          <div className="media-item-text">
                            <span className="media-item-title">
                              Security settings
                            </span>
                            <span className="media-item-subtitle">
                              Shaddy E.
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END / dropdown message --> */}

              {/* <!-- dropdown notification --> */}
              <div className="dropdown header-notification ">
                <a href="" data-toggle="dropdown" className="dropdown-toggle">
                  <span className="feather-icon">
                    <i data-feather="bell"></i>
                  </span>
                  <span className="notification-dot"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-header">
                    <div className="dropdown-title">
                      <span>Notifications</span>
                    </div>
                    <div className="notification-counter">1</div>
                  </div>
                  <ul className="media-list">
                    <li className="dropdown-item">
                      <a href="#">
                        <div className="media-item">
                          <div className="media-circle bg-success">
                            <i className="fas fa-bell"></i>
                          </div>
                          <div className="media-item-text">
                            <span className="media-item-title">
                              Carl Jakson added a new product.
                            </span>
                            <span className="media-item-subtitle">
                              12 hours ago
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-item active">
                      <a href="#">
                        <div className="media-item">
                          <div className="media-circle bg-danger">
                            <i className="fas fa-times"></i>
                          </div>
                          <div className="media-item-text">
                            <span className="media-item-title">
                              Sales transaction canceled.
                            </span>
                            <span className="media-item-subtitle">
                              14 hours ago
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <div className="media-item">
                          <div className="media-circle bg-info">
                            <i className="fas fa-user"></i>
                          </div>
                          <div className="media-item-text">
                            <span className="media-item-title">
                              Today we have 17 orders
                            </span>
                            <span className="media-item-subtitle">
                              21 hours ago
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <div className="media-item">
                          <div className="media-circle bg-info">
                            <i className="fas fa-plus"></i>
                          </div>
                          <div className="media-item-text">
                            <span className="media-item-title">
                              20+ new products added.
                            </span>
                            <span className="media-item-subtitle">
                              2 day ago
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END / dropdown notification --> */}

              {/* <!-- dropdown profile --> */}
              <div className="dropdown header-profile">
                <a
                  href=""
                  data-toggle="dropdown"
                  className="avatar avatar-sm dropdown-toggle"
                >
                  <img
                    src="./assets/images/avatar1.jpg"
                    className="img-responsive"
                    alt="..."
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="header-profile-info">
                    <div className="user-img">
                      <img
                        src="./assets/images/header-avatar.jpg"
                        className="img-responsive"
                        alt="..."
                      />
                    </div>
                    <div className="user-name">Nombre Usuario</div>
                    <div className="user-title">Cargo Usuario</div>
                  </div>
                  <div className="header-profile-menu">
                    <a href="page-profile.html" className="dropdown-item">
                      <span className="feather-icon">
                        <i data-feather="user"></i>
                      </span>
                      Mi Perfil
                    </a>
                    <NavLink
                      to="/private/administracion"
                      className="dropdown-item"
                    >
                      <span className="feather-icon">
                        <i data-feather="settings"></i>
                      </span>
                      Administración
                    </NavLink>
                    <NavLink to="/private/logout" className="dropdown-item">
                      <span className="feather-icon">
                        <i data-feather="power"></i>
                      </span>
                      Salir
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* <!-- END / dropdown profile --> */}
            </div>
            {/* <!-- END / header right --> */}
          </div>
        </div>

        {/* <!-- Main Menu --> */}
        <div className="main-menu color-scheme-mix">
          <div className="container">
            <NavList />
          </div>
        </div>
      </header>
    </>
  );
};
