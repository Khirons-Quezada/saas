import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toast";

export default function CuponEditPage() {
  const params = useParams();

  const [formData, setFormData] = useState(null);

  // GET DATA
  const baseURL =
    "http://172.18.2.30/services/data/cupon/get_data_cupon.php?id=" +
    params.id;

  // GET DATA
  const [post, setPost] = React.useState(null);

  

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
                  Editar Cupon - # {params.id}
                </h4>
                <div className="card-heading-breadcrumb">
                  <Link
                    to="/private/gestionar/cupones"
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
                    <form >
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Categoría</strong>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Categoría"
                              id="categoria"
                              name="categoria"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>UDN</strong>
                            </label>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-12">
                          <strong>Configuración</strong>
                        </div>
                      </div>

                      <hr />
                      <div className="row mt-5">
                        <div className="col-sm-12 d-flex a-i-center j-c-between">
                          <strong>Jerarquías Asignadas</strong>
                          <button className="btn btn-primary">
                            <span className="fa fa-plus"></span>&nbsp;Agregar
                            Jerarquía
                          </button>
                        </div>
                        <div className="col-sm-12">
                          <table className="table table-sm">
                            <thead>
                              <tr>
                                <th>ID Jerarquía</th>
                                <th>Nivel</th>
                                <th>Detalle</th>
                                <th>UDN</th>
                                <th>Acción</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>

                      <div className="row mt-5">
                        <div className="col-sm-12 mt-5 text-center">
                          <div className="form-group mb-0">
                            <button className="btn btn-primary" type="submit">
                              <span className="fa fa-save"></span>&nbsp;
                              Actualizar
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
  )
}
