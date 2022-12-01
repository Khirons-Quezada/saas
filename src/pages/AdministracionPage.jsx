import React from "react";
import ButtonAdministracion from "../components/ButtonAdministracion";

export default function AdministracionPage() {
  return (
    <>
      <div className="tovvl-main">
        <div className="container">
          <div className="main-content">
            <div className="main-body">
              {/* HEADER */}
              <div className="card-heading d-flex a-i-center j-c-between">
                <h4 className="card-heading-title">Gestiones Disponibles</h4>
                <div className="card-heading-breadcrumb"></div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>
                    <b>SAC</b>
                  </h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <ButtonAdministracion
                      title="Verificar Cliente"
                      color="primary"
                      icon="user"
                      url="/private/administracion/sac-verifica-cliente"
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>
                    <b>Paso 1 - Gestión Local</b>
                  </h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <ButtonAdministracion
                      title="Carga data local"
                      color="primary"
                      icon="database"
                      url="/private/administracion/cargar-data-local"
                    />
                    <span
                      style={{ fontSize: "28px", paddingTop: "1.5%" }}
                      className="fa fa-arrow-right text-dark"
                    ></span>
                    <ButtonAdministracion
                      title="Crear cupones masivos"
                      color="success"
                      icon="clone"
                      url="/private/administracion/crear-cupon-masivo"
                    />
                    <span
                      style={{ fontSize: "28px", paddingTop: "1.5%" }}
                      className="fa fa-arrow-right text-dark"
                    ></span>
                    <ButtonAdministracion
                      title="Copiar offercodes"
                      color="warning"
                      icon="copy"
                      url="/private/administracion/copiar-offercode"
                    />
                    <ButtonAdministracion
                      title="Modificación de parámetros"
                      color="danger"
                      icon="edit"
                      url="/private/administracion/modificar-parametros"
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>
                    <b>Paso 2 - Exportar Datos</b>
                  </h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <ButtonAdministracion
                      title="Cargar data hana"
                      color="primary"
                      icon="database"
                      url="/private/administracion/cargar-data-hana"
                    />
                    <span
                      style={{ fontSize: "28px", paddingTop: "1.5%" }}
                      className="fa fa-arrow-right text-dark"
                    ></span>
                    <ButtonAdministracion
                      title="Cargar imagenes S3"
                      color="success"
                      icon="image"
                      url="/private/administracion/subir-imagenes-s3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
