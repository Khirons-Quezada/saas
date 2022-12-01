import { NavLink } from "react-router-dom";

export const NavList = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link">
            <span className="feather-icon">
              <i data-feather="activity"></i>
            </span>
            <span>Monitoreo</span>
          </NavLink>
        </li>
        <li className="nav-item sub-item">
          <a href="#" className="nav-link sub-item-toggle">
            <span className="feather-icon">
              <span className="fa fa-list-check"></span>
            </span>
            <span>Gestionar</span>
          </a>
          <div className="sub-menu">
            <ul>
              <li>
                <NavLink to="/private/gestionar/cupones">
                  Lista de Cupones
                </NavLink>
              </li>
              <li>
                <NavLink to="/private/gestionar/categorias">
                  Lista de Categorías
                </NavLink>
              </li>
              <li>
                <NavLink to="/private/gestionar/promotexts">
                  Lista de Promotext
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item sub-item">
          <a href="#" className="nav-link sub-item-toggle">
            <span className="feather-icon">
              <span className="fa fa-eye"></span>
            </span>
            <span>Simular</span>
          </a>
          <div className="sub-menu">
            <ul>
              <li>
                <NavLink to="/private/simular/simular-general">
                  Escenario General
                </NavLink>
              </li>
              <li>
                <NavLink to="/private/simular/simular-por-cliente">
                  Específico por Cliente
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item sub-item">
          <a href="#" className="nav-link sub-item-toggle">
            <span className="feather-icon">
              <span className="fa fa-hand-point-up"></span>
            </span>
            <span>Asignar</span>
          </a>
          <div className="sub-menu">
            <ul>
              <li>
                <NavLink to="/private/asignar-manual">
                  Asignación Manual
                </NavLink>
              </li>
              <li>
                <NavLink to="/private/asignar-automatica">
                  Asignación Automática
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item sub-item">
          <a href="#" className="nav-link sub-item-toggle">
            <span className="feather-icon">
              <span className="fa fa-check"></span>
            </span>
            <span>Verificar</span>
          </a>
          <div className="sub-menu">
            <ul>
              <li>
                <NavLink to="/private/verificar/verificar-por-cliente">
                  Verificar Cupones por Cliente
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};
