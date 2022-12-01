import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import VerificaJerarquia from "./components/VerificaJerarquia";
import { ToastContainer, toast } from "react-toast";

// APIS
import { getUDNSelector } from "../../api/forms/getUDNSelector";

// COMPONENTS
import { InputForm } from "../../components/InputForm";

export default function CategoriaEditPage() {
  // SELECTOR UDN
  const dataUDN = getUDNSelector();

  // COMBINACION JERARQUIA
  const [comJerarquia, setComJerarquia] = useState(null);
  // CHECKBOX
  const [estadoChk, setEstadoChk] = useState(false);
  // CAPTURA FORMULARIO

  const [datosForm, setDatosForm] = useState({
    idCategoria: 0,
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
        "http://172.18.2.30/services/post/categorias/post_update_categoria.php",
        datosForm
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success("¡Categoría " + datosForm.idCategoria + " actualizada!", {
            color: "#ffffff",
            backgroundColor: "#48BA16",
          });
        } else {
          toast.error("¡Error al actualizar categoría " + datosForm.idCategoria + "!", {
            color: "#ffffff",
            backgroundColor: "#DB3847",
          });
        }
      });
  };

  const params = useParams();
  // console.log(params);
  const baseURL =
    "http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/services/svc_get_categoria.php?id=" +
    params.id;

  // GET DATA
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);

      // COMBINACION JERARQUIA
      setComJerarquia(response.data.data[0]["combinacion_jer"].split(";"));

      // CONFIGURACION CATEGORÍA
      setDatosForm({
        idCategoria: response.data.data[0]["id_categoria"],
        categoria: `${response.data.data[0]["categoria"]}`,
        udn: `${response.data.data[0]["udn"]}`,
        estado:
          response.data.data[0]["is_active"] === "null" ||
          response.data.data[0]["is_active"] === "" ||
          response.data.data[0]["is_active"] === "0"
            ? false
            : true,
        prime:
          response.data.data[0]["is_prime"] === "null" ||
          response.data.data[0]["is_prime"] === "" ||
          response.data.data[0]["is_prime"] === "0"
            ? false
            : true,
        cat:
          response.data.data[0]["is_cat"] === "null" ||
          response.data.data[0]["is_cat"] === "" ||
          response.data.data[0]["is_cat"] === "0"
            ? false
            : true,
        especial:
          response.data.data[0]["is_specialday"] === "null" ||
          response.data.data[0]["is_specialday"] === "" ||
          response.data.data[0]["is_specialday"] === "0"
            ? false
            : true,
        couponing:
          response.data.data[0]["is_couponing"] === "null" ||
          response.data.data[0]["is_couponing"] === "" ||
          response.data.data[0]["is_couponing"] === "0"
            ? false
            : true,
      });

      // console.log(datosForm)
    });
  }, []);
  if (!post) return null;

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
                  Editar Categoría - # {params.id}
                </h4>
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
                            >
                              {dataUDN.status &&
                                dataUDN.data.map((i) => (
                                  <option
                                    value={`${i.descripcion}`}
                                    selected={
                                      datosForm.udn == i.descripcion ||
                                      datosForm.udn == i.id_uc
                                        ? true
                                        : false
                                    }
                                  >
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
                            <tbody>
                              {comJerarquia.map((j) => (
                                <VerificaJerarquia
                                  jerarquias={post.data[0].combinacion_jer}
                                  jerarquia={j}
                                />
                              ))}
                            </tbody>
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
  );
}
