import React from "react";
import "../style/style.css";
import { CSVLink, CSVDownload } from "react-csv";
import { useState, useEffect } from "react";

export default function TableResumenCliente(props) {
  const [dataTable, setDataTable] = useState(props.data);
  const [filtros, setFiltros] = useState(props.filter);
  
  const countTipoOferta = (oferta) => {
    var cadena = oferta;
    var indices = [];
    for (var i = 0; i < cadena.length; i++) {
      if (cadena[i].toLowerCase() === "|") indices.push(i);
    }

    return indices.length;
  };
  useEffect(() => {
    setDataTable(props.data);
  }, [props.data])
  
  // EXPORTA CSV
  const csvDataCupones = listaCupones();
  function listaCupones() {
    
    let data = [];
    data.push(["Cupón", "Tipo", "Clasificación", "Meta", "Premio", "UDN"]);
    dataTable.map((i) => {
      data.push([
        i.DESCRIPCION,
        `${
          i.ID_TIPO_PRODUCTO === "6"
            ? "Descuento"
            : i.ID_TIPO_PRODUCTO === "1"
            ? "Desafío"
            : "Puntos"
        }`,
        i.CLASIFICACION,
        `${
          i.META != "-1" && "$" + new Intl.NumberFormat("de-DE").format(i.META)
        }`,
        `${
          i.META === "-1"
            ? i.BONIFICACION == "0"
              ? countTipoOferta(i.TIPOOFERTA_TEXTO1) === 3
                ? i.TIPOOFERTA_TEXTO1.replaceAll(" ", "")
                    .replaceAll("Dcto", "")
                    .replaceAll("|", "")
                    .replaceAll("Todomediodepago", "TMP/")
                    .replaceAll("PagandoconTarjeta", "TC")
                : i.TIPOOFERTA_TEXTO1.replaceAll(" ", "")
                    .replaceAll("Dcto", "")
                    .replaceAll("|", "")
                    .replaceAll("Todomediodepago", "TMP")
              : "X" + i.BONIFICACION
            : new Intl.NumberFormat("de-DE").format(i.BONIFICACION)
        }`,
        `${
          i.ID_UDN == "1"
            ? "SMK"
            : i.ID_UDN == "2"
            ? "TXD"
            : i.ID_UDN == "3"
            ? "MDH"
            : i.ID_UDN == "12"
            ? "Jumbo"
            : i.ID_UDN == "13"
            ? "SISA"
            : i.ID_UDN
        }`,
      ]);
    });
    return data;
  }
  // console.log(listaCupones());
  console.log(dataTable);
  const csvData = [
    ["", "N de Puntos", "N de Descuentos", "N de Desafíos", "Total"],
    [
      "Cross-Selling",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "CROSS-SELLING" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "CROSS-SELLING" &&
            o.ID_TIPO_PRODUCTO === "6"
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "CROSS-SELLING" &&
            o.ID_TIPO_PRODUCTO === "1"
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "CROSS-SELLING" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "Fugados",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "FUGADOS" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "FUGADOS" && o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "FUGADOS" && o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "FUGADOS" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "Rewarding",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "REWARDING" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "REWARDING" && o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "REWARDING" && o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "REWARDING" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "Activación UDN",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "ACTIVACION-UDN" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "ACTIVACION-UDN" && o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "ACTIVACION-UDN" && o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "ACTIVACION-UDN" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "Up-Selling",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "UP-SELLING" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "UP-SELLING" && o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "UP-SELLING" && o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "UP-SELLING" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "Campaña",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "CAMPANA" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "CAMPANA" && o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "CAMPANA" && o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "CAMPANA" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "Bienvenida",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "BIENVENIDA" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "BIENVENIDA" && o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "BIENVENIDA" && o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "BIENVENIDA" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "Penetración",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "PENETRACION" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "PENETRACION" && o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "PENETRACION" && o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "PENETRACION" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "No Definido",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "NO DEFINIDO" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "NO DEFINIDO" && o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "NO DEFINIDO" && o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "NO DEFINIDO" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "Sin Clasificación",
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "SIN CLASIFICACION" &&
            (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "SIN CLASIFICACION" && o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.CLASIFICACION === "SIN CLASIFICACION" && o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.CLASIFICACION === "SIN CLASIFICACION" &&
            (o.ID_TIPO_PRODUCTO === "6" ||
              o.ID_TIPO_PRODUCTO === "4" ||
              o.ID_TIPO_PRODUCTO === "7" ||
              o.ID_TIPO_PRODUCTO === "1")
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
    [
      "Total",
      `${
        dataTable.filter((o) => {
          if (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.ID_TIPO_PRODUCTO === "6") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (o.ID_TIPO_PRODUCTO === "1") {
            return true;
          }
          return false;
        }).length
      }`,
      `${
        dataTable.filter((o) => {
          if (
            o.ID_TIPO_PRODUCTO === "6" ||
            o.ID_TIPO_PRODUCTO === "4" ||
            o.ID_TIPO_PRODUCTO === "7" ||
            o.ID_TIPO_PRODUCTO === "1"
          ) {
            return true;
          }
          return false;
        }).length
      }`,
    ],
  ];
  return (
    <>
      {/* {JSON.stringify(props.filter)}
      {JSON.stringify(dataTable)} */}
      <div className="col-sm-12">
        <div className="card-heading d-flex a-i-center j-c-between">
          <h4 className="card-heading-title">Resumen de Cupones</h4>
          <CSVLink
            className="btn btn-success"
            data={csvData}
            separator={";"}
            filename={"resumen.csv"}
          >
            <span className="fa fa-download"></span>&nbsp; Descargar
          </CSVLink>
        </div>
        <table className="table table-sm table-bordered bg-white text-center mt-5">
          <tr className="thead-dark">
            <td className="bg-saas text-white"></td>
            <td className="bg-saas text-white">N° de Puntos</td>
            <td className="bg-saas text-white">N° de Descuentos</td>
            <td className="bg-saas text-white">N° de Desafíos</td>
            <td className="bg-saas text-white">Total</td>
          </tr>
          <tr>
            <td className="bg-saas text-white">Cross-Selling</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "CROSS-SELLING" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "CROSS-SELLING" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "CROSS-SELLING" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "CROSS-SELLING" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          <tr>
            <td className="bg-saas text-white">Fugados</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "FUGADOS" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "FUGADOS" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "FUGADOS" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "FUGADOS" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          <tr>
            <td className="bg-saas text-white">Rewarding</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "REWARDING" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "REWARDING" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "REWARDING" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "REWARDING" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          {/* ACTIVACION-UDN */}
          <tr>
            <td className="bg-saas text-white">Activación UDN</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "ACTIVACION-UDN" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "ACTIVACION-UDN" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "ACTIVACION-UDN" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "ACTIVACION-UDN" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          {/* UP-SELLING */}
          <tr>
            <td className="bg-saas text-white">Up-Selling</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "UP-SELLING" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "UP-SELLING" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "UP-SELLING" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "UP-SELLING" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          {/* CAMPANA */}
          <tr>
            <td className="bg-saas text-white">Campaña</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "CAMPANA" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "CAMPANA" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "CAMPANA" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "CAMPANA" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          {/* BIENVENIDA */}
          <tr>
            <td className="bg-saas text-white">Bienvenida</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "BIENVENIDA" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "BIENVENIDA" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "BIENVENIDA" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "BIENVENIDA" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          {/* PENETRACION */}
          <tr>
            <td className="bg-saas text-white">Penetración</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "PENETRACION" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "PENETRACION" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "PENETRACION" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "PENETRACION" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          {/* NO DEFINIDO */}
          <tr>
            <td className="bg-saas text-white">No Definido</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "NO DEFINIDO" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "NO DEFINIDO" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "NO DEFINIDO" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "NO DEFINIDO" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          {/* SIN CLASIFICACION */}
          <tr>
            <td className="bg-saas text-white">Sin Clasificación</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "SIN CLASIFICACION" &&
                    (o.ID_TIPO_PRODUCTO === "4" || o.ID_TIPO_PRODUCTO === "7")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "SIN CLASIFICACION" &&
                    o.ID_TIPO_PRODUCTO === "6"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "SIN CLASIFICACION" &&
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.CLASIFICACION === "SIN CLASIFICACION" &&
                    (o.ID_TIPO_PRODUCTO === "6" ||
                      o.ID_TIPO_PRODUCTO === "4" ||
                      o.ID_TIPO_PRODUCTO === "7" ||
                      o.ID_TIPO_PRODUCTO === "1")
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
          <tr>
            <td className="bg-saas text-white">Total</td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.ID_TIPO_PRODUCTO === "4" ||
                    o.ID_TIPO_PRODUCTO === "7"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (o.ID_TIPO_PRODUCTO === "6") {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (o.ID_TIPO_PRODUCTO === "1") {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
            <td>
              {
                dataTable.filter((o) => {
                  if (
                    o.ID_TIPO_PRODUCTO === "6" ||
                    o.ID_TIPO_PRODUCTO === "4" ||
                    o.ID_TIPO_PRODUCTO === "7" ||
                    o.ID_TIPO_PRODUCTO === "1"
                  ) {
                    return true;
                  }
                  return false;
                }).length
              }
            </td>
          </tr>
        </table>
      </div>
      <div className="col-sm-12 mt-5 pt-5">
        <div
          className="card-heading d-flex a-i-center j-c-between"
          style={{ marginTop: "5%" }}
        >
          <h4 className="card-heading-title">Lista de Cupones</h4>
          <CSVLink
            className="btn btn-success"
            data={csvDataCupones}
            separator={";"}
            filename={"Cupones.csv"}
          >
            <span className="fa fa-download"></span>&nbsp; Descargar
          </CSVLink>
        </div>
        <div className="tableFixHead">
          <table className="table table-sm table-bordered bg-white text-center">
            <thead>
              <tr style={{marginTop: "2%"}}>
                <th className="text-white">Cupón</th>
                <th className="text-white">Tipo</th>
                <th className="text-white">Clasificación</th>
                <th className="text-white">Meta</th>
                <th className="text-white">Premio</th>
                <th className="text-white">UDN</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((item) => (
                <tr>
                  <td>{item.DESCRIPCION}</td>
                  <td>
                    {item.ID_TIPO_PRODUCTO === "6"
                      ? "Descuento"
                      : item.ID_TIPO_PRODUCTO === "1"
                      ? "Desafío"
                      : "Puntos"}
                  </td>
                  <td>{item.CLASIFICACION}</td>
                  <td>
                    {item.META != "-1" &&
                      "$" + new Intl.NumberFormat("de-DE").format(item.META)}
                  </td>
                  <td>
                    {item.META === "-1"
                      ? item.BONIFICACION == "0"
                        ? countTipoOferta(item.TIPOOFERTA_TEXTO1) === 3
                          ? item.TIPOOFERTA_TEXTO1.replaceAll(" ", "")
                              .replaceAll("Dcto", "")
                              .replaceAll("|", "")
                              .replaceAll("Todomediodepago", "TMP/")
                              .replaceAll("PagandoconTarjeta", "TC")
                          : item.TIPOOFERTA_TEXTO1.replaceAll(" ", "")
                              .replaceAll("Dcto", "")
                              .replaceAll("|", "")
                              .replaceAll("Todomediodepago", "TMP")
                        : "X" + item.BONIFICACION
                      : new Intl.NumberFormat("de-DE").format(
                          item.BONIFICACION
                        )}
                  </td>
                  <td>
                    {item.ID_UDN == "1"
                      ? "SMK"
                      : item.ID_UDN == "2"
                      ? "TXD"
                      : item.ID_UDN == "3"
                      ? "MDH"
                      : item.ID_UDN == "12"
                      ? "Jumbo"
                      : item.ID_UDN == "13"
                      ? "SISA"
                      : item.ID_UDN}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
