import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function VerificarClientePage() {
  const [postCupon, setPostCupon] = React.useState(null);
  const [rut, setRut] = useState("");

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    console.log(event.target.value);
    setRut(event.target.value);
  };
  const enviarDatos = (event) => {};
  return (
    <>
      {/* <PageLoader /> */}
      <div className="tovvl-main">
        <div className="container">
          <div className="main-content">
            <div className="main-body">
              {/* HEADER */}
              <div className="card-heading d-flex a-i-center j-c-between">
                <h4 className="card-heading-title">Verificar Cliente</h4>
              </div>
              {/* TABLE */}
              <div className="card">
                <div className="card-body">
                  <Fragment>
                    <form onSubmit={enviarDatos}>
                      <div className="row">
                        <div className="col-lg-3 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Rut</strong>
                            </label>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                onChange={handleInputChange}
                                value={rut}
                                placeholder="Rut"
                                id="rut"
                                name="rut"
                                autoComplete="off"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Mes</strong>
                            </label>
                            <div className="input-group mb-3">
                              <input
                                type="month"
                                className="form-control"
                                id="mes"
                                name="mes"
                                autoComplete="off"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>&nbsp;</strong>
                            </label>
                            <div className="input-group mb-5 pt-3">
                              <button className="btn btn-primary" type="submit">
                                <span className="fa fa-search"></span> Buscar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Fragment>
                </div>
              </div>
              {/* RESULTADO */}
              <div className="row">
                <div className="col-sm-12">
                  {postCupon ? (
                    <div className="card-heading d-flex a-i-center j-c-between">
                      <h4 className="card-heading-title">
                        <span className="fa fa-user"></span>{" "}
                        {/* {postCupon.data[0]["nombre"]} */}
                      </h4>
                    </div>
                  ) : (
                    <div className="card-heading d-flex a-i-center j-c-between">
                      <h4 className="card-heading-title">
                        <span className="fa fa-user"></span> Khirons Quezada
                        {/* {post.data[0]["nombre"]} */}
                      </h4>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-12">
                      <table className="table table-sm text-center">
                        <thead className="thead-dark">
                          <tr>
                            <th>Cupón</th>
                            <th>Tipo</th>
                            <th>Meta</th>
                            <th>Premio</th>
                            <th>¿Activado?</th>
                            <th>¿Logrado?</th>
                            <th>Compra Real Cliente</th>
                            <th>¿Puntos Pagados?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a
                                className="text-primary"
                                data-toggle="collapse"
                                href="#collapseExample"
                              >
                                Café
                              </a>
                            </td>
                            <td>Puntos</td>
                            <td>$3.000</td>
                            <td>x4</td>
                            <td>
                              <span className="text-success fa fa-thumbs-up"></span>
                            </td>
                            <td>
                              100%
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  role="progressbar"
                                  style={{ width: "100%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>$4.500</td>
                            <td>
                              <span className="text-danger fa fa-thumbs-down"></span>
                            </td>
                          </tr>
                          <tr id="collapseExample" className="collapse">
                            <td colspan="7">
                              <table className="table table-sm">
                                <thead className="thead-dark">
                                  <tr>
                                    <th>Transacciones</th>
                                    <th>Puntos</th>
                                    <th>Compra</th>
                                    <th>etc</th>
                                    <th>etc</th>
                                    <th>etc</th>
                                    <th>etc</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr data-toggle="modal" data-target="#exampleModal">
                            <td>
                              <a href="#">Yogurt y leche cultivada</a>
                            </td>
                            <td>Puntos</td>
                            <td>$4.000</td>
                            <td>200</td>
                            <td>
                              <span className="text-danger fa fa-thumbs-down"></span>
                            </td>
                            <td>
                              50%
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>$6.500</td>
                            <td>
                              <span className="text-success fa fa-thumbs-up"></span> / 500 pts.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="">Cervezas</a>
                            </td>
                            <td>Mensual</td>
                            <td>$5.000</td>
                            <td>1.200</td>
                            <td>
                              <span className="text-success fa fa-thumbs-up"></span>
                            </td>
                            <td>
                              76%
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped bg-success"
                                  role="progressbar"
                                  style={{ width: "76%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </td>
                            <td>$9.500</td>
                            <td>
                              <span className="text-danger fa fa-thumbs-down"></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Transacciones
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-sm">
                <thead className="thead-dark">
                  <tr>
                    <th>Transacciones</th>
                    <th>Puntos</th>
                    <th>Compra</th>
                    <th>etc</th>
                    <th>etc</th>
                    <th>etc</th>
                    <th>etc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
