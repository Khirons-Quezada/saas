import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "../components/router/PublicRoute";
import PrivateRoute from "../components/router/PrivateRoute";
import { AuthContextProvider } from "../contexts/authContext";

// PATHS
import {
  LOGOUT,
  PRIVATE,
  LOGIN,
  CATEGORIA,
  CATEGORIACREAR,
  CATEGORIAS,
  PROMOTEXTS,
  PROMOTEXT,
  PROMOTEXTCREAR,
  JERARQUIAS,
  JERARQUIA,
  JERARQUIACREAR,
  CUPONES,
  VERIFICARCLIENTE,
  ASIGNARMANUAL,
  ADMINISTRACION,
  CREARCUPONMASIVO,
  COPIAROFFERCODE,
  CARGADATAHANA,
  SUBIRIMAGENS3,
  SACVERIFICACLIENTE,
} from "../config/routes/paths";

// LOGIN
import LoginPage from "../pages/login/LoginPage";
import LogoutPage from "../pages/login/LogoutPage";

// PAGES
import HomePage from "../pages/HomePage";

// CATEGORÍAS
import CategoriasPage from "../pages/categoria/CategoriasPage";
import CategoriaCreatePage from "../pages/categoria/CategoriaCreatePage";
import CategoriaEditPage from "../pages/categoria/CategoriaEditPage";

// PROMOTEXTS
import PromotextsPage from "../pages/promotext/PromotextsPage";
import PromotextEditPage from "../pages/promotext/PromotextEditPage";
import PromotextCreatePage from "../pages/promotext/PromotextCreatePage";

// JERARQUIAS
import JerarquiaCreatePage from "../pages/jerarquia/JerarquiaCreatePage";
import JerarquiaEditPage from "../pages/jerarquia/JerarquiaEditPage";
import JerarquiasPage from "../pages/jerarquia/JerarquiasPage";

// CUPONES
import CuponesPage from "../pages/CuponesPage";

// VERIFICAR
import VerificarClientePage from "../pages/verificar/VerificarClientePage";

// ASIGNAR
import AsignarManualPage from "../pages/AsignarManualPage";

// ADMINISTRACION
import AdministracionPage from "../pages/AdministracionPage";
import CargarDataHana from "../pages/administracion/CargarDataHana";
import CopiarOffercode from "../pages/administracion/CopiarOffercode";
import CrearCuponMasivoPage from "../pages/administracion/CrearCuponMasivoPage";
import SubirImagenesS3 from "../pages/administracion/SubirImagenesS3";

// SAC
import VerificarClienteSacPage from "../pages/sac/VerificarClientePage";

// ERROR
import Error404Page from "../pages/Error404Page";

export default function AppRouter() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<PublicRoute />}>
            <Route path={LOGIN} element={<LoginPage />} />
          </Route>
          {/* PRIVATE */}
          <Route path={PRIVATE} element={<PrivateRoute />}>
            {/* MONITOREO */}
            <Route path={PRIVATE} element={<HomePage />} />
            {/* CATEGORÍAS */}
            <Route path={CATEGORIAS} element={<CategoriasPage />} />
            <Route path={CATEGORIA} element={<CategoriaEditPage />} />
            <Route path={CATEGORIACREAR} element={<CategoriaCreatePage />} />
            {/* PROMOTEXTS */}
            <Route path={PROMOTEXTS} element={<PromotextsPage />} />
            <Route path={PROMOTEXT} element={<PromotextEditPage />} />
            <Route path={PROMOTEXTCREAR} element={<PromotextCreatePage />} />
            {/* JERARQUIAS */}
            <Route path={JERARQUIAS} element={<JerarquiasPage />} />
            <Route path={JERARQUIA} element={<JerarquiaEditPage />} />
            <Route path={JERARQUIACREAR} element={<JerarquiaCreatePage />} />
            {/* CUPONES */}
            <Route path={CUPONES} element={<CuponesPage />} />
            {/* VERIFICAR */}
            <Route path={VERIFICARCLIENTE} element={<VerificarClientePage />} />
            {/* ASIGNAR */}
            <Route path={ASIGNARMANUAL} element={<AsignarManualPage />} />
            {/* ADMINISTRACION */}
            <Route path={ADMINISTRACION} element={<AdministracionPage />} />
            <Route path={CREARCUPONMASIVO} element={<CrearCuponMasivoPage />} />
            <Route path={COPIAROFFERCODE} element={<CopiarOffercode />} />
            <Route path={CARGADATAHANA} element={<CargarDataHana />} />
            <Route path={SUBIRIMAGENS3} element={<SubirImagenesS3 />} />
            <Route
              path={SACVERIFICACLIENTE}
              element={<VerificarClienteSacPage />}
            />
            <Route path={LOGOUT} element={<LogoutPage />} />
          </Route>
          {/* OTROS */}
          <Route path="*" element={<><Error404Page /></>} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}
