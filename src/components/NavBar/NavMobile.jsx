import { NavList } from "./NavList";

export const NavMobile = () => {
  return (
    <>
      <div className="mobile-menu">
        {/* <!-- mobil menu header --> */}
        <div className="mm-header">
          <div className="mm-logo">
            <div className="logo logo-type logo-white">
              <a href="" className="text-white">
                <img
                  src="/assets/images/logo_blanco.png"
                  className="img-fluid"
                  width="100"
                />
              </a>
            </div>
          </div>

          <div className="mm-buttons">
            <a href="" className="mm-trigger">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
        {/* <!-- END / mobil menu header --> */}

        {/* <!-- mobile menu body --> */}
        <div className="mm-body">
          <NavList />
        </div>
        {/* <!-- END / mobile menu body --> */}
      </div>
    </>
  );
};
