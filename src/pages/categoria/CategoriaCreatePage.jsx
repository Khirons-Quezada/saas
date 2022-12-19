import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUDNSelector } from "../../api/forms/getUDNSelector";
import { toast } from "react-toast";

export default function CategoriaCreatePage() {
  // SELECTOR UDN
  const dataUDN = getUDNSelector();
  // CAPTURA FORMULARIO
  const [datosForm, setDatosForm] = useState({
    categoria: "",
    udn: "",
    estado: false,
    prime: false,
    cat: false,
    especial: false,
    couponing: false,
  });

  const handleInputChangeCheckbox = (event) => {
    setDatosForm({
      ...datosForm,
      [event.target.name]: event.target.checked ? true : false,
    });
  };
  const handleInputChange = (event) => {
    setDatosForm({
      ...datosForm,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://172.18.2.30/services/post/categorias/post_create_categoria.php",
        datosForm
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success("¡Categoría creada!", {
            color: "#ffffff",
            backgroundColor: "#48BA16",
          });
          console.log(response);
        } else {
          toast.error(
            "¡Error al crear categoría!",
            {
              color: "#ffffff",
              backgroundColor: "#DB3847",
            }
          );
        }
      });
  };

  return (
    <>
      {/* <PageLoader /> */}
      <div className="tovvl-main">
        <div className="container">
          <div className="main-content">
            <div className="main-body">
              {/* HEADER */}
              <div className="card-heading d-flex a-i-center j-c-between">
                <h4 className="card-heading-title">Crear Categoría</h4>
                <div className="card-heading-breadcrumb">
                  <Link
                    to="/private/gestionar/categorias"
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
                    <form onSubmit={enviarDatos}>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Categoría</strong>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={handleInputChange}
                              value={datosForm.categoria}
                              placeholder="Categoría"
                              id="categoria"
                              name="categoria"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>UDN</strong>
                            </label>
                            <select
                              name="udn"
                              id="udn"
                              className="form-control"
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Seleccione</option>
                              {dataUDN.status &&
                                dataUDN.data.map((i) => (
                                  <option value={`${i.descripcion}`}>
                                    {i.descripcion}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-12">
                          <strong>Configuración</strong>
                          <table className="table mt-5">
                            <tr className="">
                              <td style={{ width: "250px" }}>
                                <strong>¿Se Asignará Automáticamente?</strong>
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  onChange={handleInputChangeCheckbox}
                                  value={datosForm.estado}
                                  placeholder="¿Está Activo?"
                                  id="estado"
                                  name="estado"
                                  checked={datosForm.estado}
                                />
                              </td>
                              <td style={{ width: "250px" }}>
                                <strong>¿Es Prime?</strong>
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  onChange={handleInputChangeCheckbox}
                                  value={datosForm.prime}
                                  placeholder="¿Es Prime?"
                                  id="prime"
                                  name="prime"
                                  checked={datosForm.prime}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ width: "250px" }}>
                                <strong>¿Es CAT?</strong>
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  onChange={handleInputChangeCheckbox}
                                  value={datosForm.cat}
                                  placeholder="¿Es CAT?"
                                  id="cat"
                                  name="cat"
                                  checked={datosForm.cat}
                                />
                              </td>
                              <td style={{ width: "250px" }}>
                                <strong>¿Es Especial?</strong>
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  onChange={handleInputChangeCheckbox}
                                  value={datosForm.especial}
                                  placeholder="¿Es Especial?"
                                  id="especial"
                                  name="especial"
                                  checked={datosForm.especial}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ width: "250px" }}>
                                <strong>¿Es Couponing?</strong>
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  onChange={handleInputChangeCheckbox}
                                  value={datosForm.couponing}
                                  placeholder="¿Es Couponing?"
                                  id="couponing"
                                  name="couponing"
                                  checked={datosForm.couponing}
                                />
                              </td>
                              <td style={{ width: "250px" }}></td>
                              <td></td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <hr />
                      <div className="row mt-5">
                        <div className="col-sm-12 d-flex a-i-center j-c-between">
                          <strong>Jerarquías Asignadas</strong>
                          <button className="btn btn-primary">
                            <span className="fa fa-plus"></span> Agregar
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
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-12 mt-5 text-center">
                          <div className="form-group mb-0">
                            <button className="btn btn-primary" type="submit">
                              <span className="fa fa-save"></span>&nbsp;Crear
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
