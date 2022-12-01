import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseURL =
  "http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/services/svc_get_cupones.php";

export default function CuponesPage() {
  // CALLAXIOS
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <div className="tovvl-main">
        <div className="container">
          <div className="main-content">
            <div className="main-body">
              {/* HEADER */}
              <div className="card-heading d-flex a-i-center j-c-between">
                <h4 className="card-heading-title">Lista de Cupones</h4>
                <div className="card-heading-breadcrumb">
                  <a href="/New-Cupon" className="btn btn-primary">
                    <span className="fa fa-plus"></span> Crear Cupón
                  </a>
                </div>
              </div>
              {/* TABLE */}
              <div className="card">
                <div className="card-body">
                  <table
                    className="table table-bordered table-scroll"
                    id="table-categorias"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Tipo Cupón</th>
                        <th>Categoría</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {post.data.map((item) => (
                        <tr>
                          <td>{item.id_cupon}</td>
                          <td>{item.attrib01}</td>
                          <td>{item.categoria_name}</td>
                          <td>
                            {item.habilitado == '1' 
                             ? <><span className="fa fa-toggle-on text-success"></span> Activo</>
                             : <><span className="fa fa-toggle-off text-danger"></span> Inactivo</> 
                            }
                            </td>
                          <td>
                            <Link
                              className="btn btn-primary"
                              to={`/cupon/${item.id_cupon}`}
                            >
                              <span className="fa fa-edit"></span>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
