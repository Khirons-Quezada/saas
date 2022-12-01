import { NavMobile } from "../components/NavMobile";
import { NavPage } from "../components/NavPage";
import { FooterPage } from "../components/FooterPage";
import { PageLoader } from "../components/PageLoader";

import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export const CuponEditPage = () => {
  const { cuponId } = useParams();
  const baseURL =
    "http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/services/svc_get_cupon.php?id=" +
    cuponId;
  // GET DATA
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;
  console.log(post.data);
  return (
    <>
      {/* <PageLoader /> */}
      <div className="wrapper">
        <NavMobile />
        <NavPage />
        <div className="tovvl-main">
          <div className="container">
            <div className="main-content">
              <div className="main-body">
                {/* HEADER */}
                <div className="card-heading d-flex a-i-center j-c-between">
                  <h4 className="card-heading-title">Editar Cupón</h4>
                  <div className="card-heading-breadcrumb">
                    <a href="/Cupon-List" className="btn btn-primary">
                      <span className="fa fa-arrow-left"></span> Atras
                    </a>
                  </div>
                </div>
                {/* TABLE */}
                <div className="card">
                  <div className="card-body">
                    <form action="">
                      <div className="row">
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Producto</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Fecha Inicio</strong>
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              value="Input Value"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Fecha Término</strong>
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              value="Input Value"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Tipo Producto</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Tipo Meta</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Tipo Premio</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Duración Cupón</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>¿Con Tarjeta Cencosud?</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Tipo Oferta</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Unidad Comercial</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>FTP Imagen</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Categoría</strong>
                            </label>
                            <select name="" id="" className="form-control">
                              <option value="">Seleccione</option>
                              <option value="">1</option>
                              <option value="">2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Meta</strong>
                            </label>
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Premio</strong>
                            </label>
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Offercode</strong>
                            </label>
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div>{JSON.stringify(post.data)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
};
