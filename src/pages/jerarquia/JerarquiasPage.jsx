import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJerarquias } from "../../api/jerarquia/getJerarquias";
import PageLoader from "../../components/PageLoader";

const baseURL =
  "http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/services/svc_get_promotexts.php";

export default function JerarquiasPage() {
  const dataJerarquias = getJerarquias();

  if (!dataJerarquias.status) return <PageLoader />;
  return (
    <>
      <div className="tovvl-main">
        <div className="container">
          <div className="main-content">
            <div className="main-body">
              {/* HEADER */}
              <div className="card-heading d-flex a-i-center j-c-between">
                <h4 className="card-heading-title">Lista de Jerarquías</h4>
                <div className="card-heading-breadcrumb">
                  <Link
                    className="btn btn-primary"
                    to={`/private/gestionar/jerarquia/crear`}
                  >
                    <span className="fa fa-plus"></span> Crear Jerarquía
                  </Link>
                </div>
              </div>
              {/* TABLE */}
              <div className="card">
                <div className="card-body">
                  <div className="tableFixHead">
                    <table
                      className="table table-bordered table-scroll"
                      id="table-categorias"
                    >
                      <thead className="bg-dark">
                        <tr>
                          <th className="text-white">#</th>
                          <th className="text-white">ID Jerarquía</th>
                          <th className="text-white">Nivel</th>
                          <th className="text-white">Detalle</th>
                          <th className="text-white">UDN</th>
                          <th className="text-white">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataJerarquias.status &&
                          dataJerarquias.data.map((item) => (
                            <tr>
                              <td>{item.id_fila}</td>
                              <td>{item.id_jerarquia}</td>
                              <td>{item.nivel}</td>
                              <td>{item.detalle}</td>
                              <td>{item.udn}</td>
                              <td>
                                <Link
                                  className="btn btn-primary btn-sm"
                                  to={`/private/gestionar/jerarquia/${item.id_fila}`}
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
      </div>
    </>
  );
}
