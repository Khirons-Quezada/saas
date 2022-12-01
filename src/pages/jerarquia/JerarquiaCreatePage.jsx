import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PageLoader from "../../components/PageLoader";

// APIS
import { getJerarquia } from "../../api/jerarquia/getJerarquia";
import { getUDNSelector } from "../../api/forms/getUDNSelector";

export default function JerarquiaCreatePage() {
  // SELECTOR UDN
  const dataUDN = getUDNSelector();

  // DATOS FORM
  const [dataForm, setDataForm] = useState({
    idJerarquia: "",
    nivel: null,
    detalle: "",
    udn: "",
  });

  if (!dataUDN.status) return <PageLoader />;
  return (
    <>
      {/* <PageLoader /> */}
      <div className="tovvl-main">
        <div className="container">
          <div className="main-content">
            <div className="main-body">
              {/* HEADER */}
              <div className="card-heading d-flex a-i-center j-c-between">
                <h4 className="card-heading-title">
                  Crear Jerarquía
                </h4>
                <div className="card-heading-breadcrumb">
                  <Link
                    to="/private/gestionar/jerarquias"
                    className="btn btn-primary"
                  >
                    <span className="fa fa-arrow-left"></span> Volver
                  </Link>
                </div>
              </div>
              {/* TABLE */}
              <div className="card">
                <div className="card-body">
                  <Fragment>
                    <form>
                      <div className="row">
                        <div className="col-lg-4 col-sm-6">
                          <div className="form-group">
                            <label>
                              <strong>ID Jerarquía</strong>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ID Jerarquía"
                              id="idJerarquia"
                              name="idJerarquia"
                              value={dataForm.idJerarquia}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="form-group">
                            <label>
                              <strong>Nivel</strong>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ID Jerarquía"
                              id="nivel"
                              name="nivel"
                              value={dataForm.nivel}
                            />
                          </div>
                        </div>                        
                        <div className="col-lg-4 col-sm-6">
                          <div className="form-group">
                            <label>
                              <strong>UDN</strong>
                            </label>
                            <select
                              name="udn"
                              id="udn"
                              className="form-control"
                              //   onChange={handleInputChange}
                            >
                              {dataUDN.status &&
                                dataUDN.data.map((i) => (
                                  <option
                                    value={`${i.descripcion}`}
                                  >
                                    {i.descripcion}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-6">
                          <div className="form-group">
                            <label>
                              <strong>Detalle</strong>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Detalle"
                              id="detalle"
                              name="detalle"
                              value={dataForm.detalle}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 mt-5 text-center">
                          <div className="form-group mb-0">
                            <button className="btn btn-primary" type="submit">
                              <span className="fa fa-save"></span>
                              &nbsp;Actualizar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
