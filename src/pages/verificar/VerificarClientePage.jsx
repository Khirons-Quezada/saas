import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

// COMPONENTS
import CardCuponCupon from "./components/CardCuponCupon";
import CardCuponDesafio from "./components/CardCuponDesafio";
import CardCuponDescuento from "./components/CardCuponDescuento";
import TableResumenCliente from "./components/TableResumenCliente";
import PageLoader from "../../components/PageLoader";

export default function VerificarClientePage() {
  // GET DATA CUPON
  const [postCupon, setPostCupon] = useState(null);
  // DATA TABLE
  const [dataTable, setDataTable] = useState(null);

  // IS STATE
  const [isState, setIsState] = useState(false);

  // IS LOADED
  const [isLoaded, setIsLoaded] = useState(false);

  //IS CHECKED
  const [isChecked, setisChecked] = useState({
    ordenCupon: "udn",
    filterEasy: false,
    filterJumbo: false,
    filterParis: false,
    filterSisa: false,
    filterSpid: false,
  });
  // CHANGE CHECKED
  const handleInputChangeChecked = (event) => {
    setisChecked({
      ...isChecked,
      [event.target.name]:
        event.target.name == "ordenCupon"
          ? event.target.value
          : event.target.checked,
    });
  };

  const [rut, setRut] = useState("");
  const [counts, setCounts] = useState({
    puntos: 0,
    desafio: 0,
    descuento: 0,
  });

  const handleInputChange = (event) => {
    setRut(event.target.value);
  };

  const enviarDatos = (event) => {
    setIsLoaded(true);
    event.preventDefault();

    const baseURL = `http://172.18.2.30/services/data/verificar/get_data_verificar_cliente.php?rut=${rut}`;

    axios.get(baseURL).then((response) => {
      // console.log(response);
      setCounts({
        puntos: 0,
        desafio: 0,
        descuento: 0,
      });
      if (response.data.data.length === 0) {
        setPostCupon(null);
        setDataTable(null);
        setIsLoaded(false);
        setIsState(false);
      } else {
        setIsState(true);
        setPostCupon(response.data.data);
        setDataTable(response.data.data);
        setIsLoaded(false);
        setCounts({
          puntos:
            response.data.data.filter((o) => o.ID_TIPO_PRODUCTO === "4")
              .length +
            response.data.data.filter((o) => o.ID_TIPO_PRODUCTO === "7").length,
          desafio: response.data.data.filter((o) => o.ID_TIPO_PRODUCTO === "1")
            .length,
          descuento: response.data.data.filter(
            (o) => o.ID_TIPO_PRODUCTO === "6"
          ).length,
        });
      }
    });
  };

  //   // GET DATA DESAFIO
  const [postDesafio, setPostDesafio] = React.useState(null);
  //   // GET DATA DESAFIO
  const [postDescuento, setPostDescuento] = React.useState(null);

  // const [arrayFilter, setArrayFilter] = useState([]);

  useEffect(() => {
    if (isState) {
      // (asc | desc)
      setPostCupon(
        sortJSON(
          postCupon,
          isChecked["ordenCupon"].substring(
            0,
            isChecked["ordenCupon"].length - 3
          ),
          isChecked["ordenCupon"].slice(-3).toLowerCase()
        )
      );

      console.log(filterItems());
    }
  }, [isChecked]);

  function filterItems() {
    return postCupon.filter(function (i, n) {
      if (
        !isChecked.filterEasy &&
        !isChecked.filterJumbo &&
        !isChecked.filterParis &&
        !isChecked.filterSisa &&
        !isChecked.filterSpid
      ) {
        return true;
      } else {
        return true;
      }
    });
  }
  // SORTING
  function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
      var x = a[key],
        y = b[key];

      if (orden === "asc") {
        return x < y ? -1 : x > y ? 1 : 0;
      }

      if (orden === "des") {
        return x > y ? -1 : x < y ? 1 : 0;
      }
    });
  }

  if (isLoaded) return <PageLoader />;

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
                        <div className="col-lg-4 col-md-12">
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
                              <div className="input-group-append">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  id="button-addon2"
                                >
                                  <span className="fa fa-search"></span> Buscar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Fragment>
                </div>
              </div>
              {/* {JSON.stringify(dataTable)} */}
              {/* RESULTADO */}
              <div className="row">
                <div className="col-sm-12">
                  {isState ? (
                    <div className="card-heading d-flex a-i-center j-c-between">
                      <h4 className="card-heading-title">
                        <span className="fa fa-user"></span>{" "}
                        {postCupon[0]["NOMBRE"]}
                      </h4>
                    </div>
                  ) : (
                    <div className="card-heading d-flex a-i-center j-c-between">
                      <h4 className="card-heading-title"></h4>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-sm-12 col-md-2">
                      <strong>Filtros</strong>
                      <div className="form-group row row-md">
                        <div className="col-sm-4 pt-5">
                          <label>Orden:</label>
                        </div>
                        <div className="col-sm-8">
                          <select
                            name="ordenCupon"
                            id="ordenCupon"
                            className="form-control"
                            onChange={handleInputChangeChecked}
                          >
                            <option value="ID_UDN">UDN</option>
                            <option value="DESCRIPCIONASC">A - Z</option>
                            <option value="DESCRIPCIONDES">Z - A</option>
                            <option value="BONIFICACIONASC">
                              Mayor puntaje
                            </option>
                            <option value="BONIFICACIONDES">
                              Menor puntaje
                            </option>
                            {/* <option value="descuentodesc">
                              Mayor descuento
                            </option>
                            <option value="descuentoasc">
                              Menor descuento
                            </option> */}
                          </select>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <label className="control control-checkbox">
                            <span>Easy</span>
                            <input
                              type="checkbox"
                              checked={isChecked.filterEasy}
                              name="filterEasy"
                              onChange={handleInputChangeChecked}
                            />
                            <span className="control-icon"></span>
                          </label>
                          <label className="control control-checkbox">
                            <span>Jumbo</span>
                            <input
                              type="checkbox"
                              checked={isChecked.filterJumbo}
                              name="filterJumbo"
                              onChange={handleInputChangeChecked}
                            />
                            <span className="control-icon"></span>
                          </label>
                          <label className="control control-checkbox">
                            <span>Paris</span>
                            <input
                              type="checkbox"
                              checked={isChecked.filterParis}
                              name="filterParis"
                              onChange={handleInputChangeChecked}
                            />
                            <span className="control-icon"></span>
                          </label>
                          <label className="control control-checkbox">
                            <span>Santa Isabel</span>
                            <input
                              type="checkbox"
                              checked={isChecked.filterSisa}
                              name="filterSisa"
                              onChange={handleInputChangeChecked}
                            />
                            <span className="control-icon"></span>
                          </label>
                          <label className="control control-checkbox">
                            <span>Spid</span>
                            <input
                              type="checkbox"
                              checked={isChecked.filterSpid}
                              name="filterSpid"
                              onChange={handleInputChangeChecked}
                            />
                            <span className="control-icon"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-10">
                      <ul className="nav nav-tabs nav-flat nav-justified">
                        <li className="nav-item" role="presentation">
                          <a
                            href="#tab-resumen"
                            className="nav-link active show"
                            data-toggle="tab"
                            aria-expanded="true"
                          >
                            <i className="fa fa-table text-danger"></i>
                            Resumen&nbsp;
                            {isState ? (
                              <label>
                                (
                                {counts["puntos"] +
                                  counts["desafio"] +
                                  counts["descuento"]}
                                )
                              </label>
                            ) : (
                              <label>(0)</label>
                            )}
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            href="#tab-puntosextras"
                            className="nav-link"
                            data-toggle="tab"
                            aria-expanded="true"
                          >
                            <i className="fa fa-store text-primary"></i>
                            Puntos&nbsp;Extra&nbsp;
                            {isState ? (
                              <label>({counts["puntos"]})</label>
                            ) : (
                              <label>(0)</label>
                            )}
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            href="#tab-descuentos"
                            className="nav-link"
                            data-toggle="tab"
                            aria-expanded="true"
                          >
                            <i className="fa fa-ticket text-success"></i>
                            Descuentos&nbsp;
                            {isState ? (
                              <label>({counts["descuento"]})</label>
                            ) : (
                              <label>(0)</label>
                            )}
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            href="#tab-desafios"
                            className="nav-link"
                            data-toggle="tab"
                            aria-expanded="true"
                          >
                            <i className="fa fa-trophy text-warning"></i>
                            Desafíos&nbsp;
                            {isState ? (
                              <label>({counts["desafio"]})</label>
                            ) : (
                              <label>(0)</label>
                            )}
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="tab-resumen"
                        >
                          <div className="row">
                            {isState && (
                              <TableResumenCliente
                                data={dataTable}
                                filter={isChecked}
                              />
                            )}
                          </div>
                        </div>
                        <div className="tab-pane in" id="tab-puntosextras">
                          <div className="row">
                            {isState &&
                              postCupon.map((item) => (
                                <>
                                  {!isChecked.filterEasy &&
                                  !isChecked.filterJumbo &&
                                  !isChecked.filterParis &&
                                  !isChecked.filterSisa &&
                                  !isChecked.filterSpid ? (
                                    <>
                                      <CardCuponCupon
                                        vigencia={item.VIGENCIA}
                                        descripcion={item.DESCRIPCION}
                                        imgProducto={item.IMG_FOTOPRODUCTO}
                                        clasificacion={item.CLASIFICACION}
                                        udn={item.ID_UDN}
                                        promotext1={item.PROMOTEXT1}
                                        promotext2={item.PROMOTEXT2}
                                        promotext3={item.PROMOTEXT3}
                                        tipoOferta={item.TIPOOFERTA_TEXTO1}
                                        idCupon={item.ID_CUPON}
                                        legal={item.INFORMACION_CUPON}
                                        tipoProducto={item.ID_TIPO_PRODUCTO}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      {isChecked.filterEasy && (
                                        <>
                                          {item.ID_UDN == 3 ||
                                          item.ID_UDN == 7 ||
                                          item.ID_UDN == 11 ||
                                          item.ID_UDN == 15 ? (
                                            <CardCuponCupon
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      )}
                                      {isChecked.filterJumbo ||
                                      isChecked.filterSisa ||
                                      isChecked.filterSpid ? (
                                        <>
                                          {item.ID_UDN == 1 ||
                                          item.ID_UDN == 4 ||
                                          item.ID_UDN == 5 ||
                                          item.ID_UDN == 8 ||
                                          item.ID_UDN == 9 ||
                                          item.ID_UDN == 12 ||
                                          item.ID_UDN == 13 ||
                                          item.ID_UDN == 16 ? (
                                            <CardCuponCupon
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {isChecked.filterParis ? (
                                        <>
                                          {item.ID_UDN == 2 ||
                                          item.ID_UDN == 6 ||
                                          item.ID_UDN == 10 ||
                                          item.ID_UDN == 14 ? (
                                            <CardCuponCupon
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  )}
                                </>
                              ))}
                          </div>
                        </div>
                        <div className="tab-pane in" id="tab-descuentos">
                          <div className="row">
                            {isState &&
                              postCupon.map((item) => (
                                <>
                                  {!isChecked.filterEasy &&
                                  !isChecked.filterJumbo &&
                                  !isChecked.filterParis &&
                                  !isChecked.filterSisa &&
                                  !isChecked.filterSpid ? (
                                    <>
                                      <CardCuponDescuento
                                        vigencia={item.VIGENCIA}
                                        descripcion={item.DESCRIPCION}
                                        imgProducto={item.IMG_FOTOPRODUCTO}
                                        clasificacion={item.CLASIFICACION}
                                        udn={item.ID_UDN}
                                        promotext1={item.PROMOTEXT1}
                                        promotext2={item.PROMOTEXT2}
                                        promotext3={item.PROMOTEXT3}
                                        tipoOferta={item.TIPOOFERTA_TEXTO1}
                                        idCupon={item.ID_CUPON}
                                        legal={item.INFORMACION_CUPON}
                                        tipoProducto={item.ID_TIPO_PRODUCTO}
                                        couponing={item.ATRIBUTO2}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      {isChecked.filterEasy && (
                                        <>
                                          {item.ID_UDN == 3 ||
                                          item.ID_UDN == 7 ||
                                          item.ID_UDN == 11 ||
                                          item.ID_UDN == 15 ? (
                                            <CardCuponDescuento
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                              couponing={item.ATRIBUTO2}
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      )}
                                      {isChecked.filterJumbo ? (
                                        <>
                                          {item.ID_UDN == 1 ||
                                          item.ID_UDN == 4 ||
                                          item.ID_UDN == 8 ||
                                          item.ID_UDN == 12 ? (
                                            <CardCuponDescuento
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                              couponing={item.ATRIBUTO2}
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {isChecked.filterSisa ? (
                                        <>
                                          {item.ID_UDN == 1 ||
                                          item.ID_UDN == 5 ||
                                          item.ID_UDN == 9 ||
                                          item.ID_UDN == 13 ? (
                                            <CardCuponDescuento
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                              couponing={item.ATRIBUTO2}
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {isChecked.filterSpid ? (
                                        <>
                                          {item.ID_UDN == 1 ||
                                          item.ID_UDN == 16 ? (
                                            <CardCuponDescuento
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                              couponing={item.ATRIBUTO2}
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {isChecked.filterParis ? (
                                        <>
                                          {item.ID_UDN == 2 ||
                                          item.ID_UDN == 6 ||
                                          item.ID_UDN == 10 ||
                                          item.ID_UDN == 14 ? (
                                            <CardCuponDescuento
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                              couponing={item.ATRIBUTO2}
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  )}
                                </>
                              ))}
                          </div>
                        </div>
                        <div className="tab-pane in" id="tab-desafios">
                          <div className="row">
                            {isState &&
                              postCupon.map((item) => (
                                <>
                                  {!isChecked.filterEasy &&
                                  !isChecked.filterJumbo &&
                                  !isChecked.filterParis &&
                                  !isChecked.filterSisa &&
                                  !isChecked.filterSpid ? (
                                    <>
                                      <CardCuponDesafio
                                        vigencia={item.VIGENCIA}
                                        descripcion={item.DESCRIPCION}
                                        imgProducto={item.IMG_FOTOPRODUCTO}
                                        clasificacion={item.CLASIFICACION}
                                        udn={item.ID_UDN}
                                        promotext1={item.PROMOTEXT1}
                                        promotext2={item.PROMOTEXT2}
                                        promotext3={item.PROMOTEXT3}
                                        tipoOferta={item.TIPOOFERTA_TEXTO1}
                                        idCupon={item.ID_CUPON}
                                        legal={item.INFORMACION_CUPON}
                                        tipoProducto={item.ID_TIPO_PRODUCTO}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      {isChecked.filterEasy && (
                                        <>
                                          {item.ID_UDN == 3 ||
                                          item.ID_UDN == 7 ||
                                          item.ID_UDN == 11 ||
                                          item.ID_UDN == 15 ? (
                                            <CardCuponDesafio
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      )}
                                      {isChecked.filterJumbo ||
                                      isChecked.filterSisa ||
                                      isChecked.filterSpid ? (
                                        <>
                                          {item.ID_UDN == 1 ||
                                          item.ID_UDN == 4 ||
                                          item.ID_UDN == 5 ||
                                          item.ID_UDN == 8 ||
                                          item.ID_UDN == 9 ||
                                          item.ID_UDN == 12 ||
                                          item.ID_UDN == 13 ||
                                          item.ID_UDN == 16 ? (
                                            <CardCuponDesafio
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                      {isChecked.filterParis ? (
                                        <>
                                          {item.ID_UDN == 2 ||
                                          item.ID_UDN == 6 ||
                                          item.ID_UDN == 10 ||
                                          item.ID_UDN == 14 ? (
                                            <CardCuponDesafio
                                              vigencia={item.VIGENCIA}
                                              descripcion={item.DESCRIPCION}
                                              imgProducto={
                                                item.IMG_FOTOPRODUCTO
                                              }
                                              clasificacion={item.CLASIFICACION}
                                              udn={item.ID_UDN}
                                              promotext1={item.PROMOTEXT1}
                                              promotext2={item.PROMOTEXT2}
                                              promotext3={item.PROMOTEXT3}
                                              tipoOferta={
                                                item.TIPOOFERTA_TEXTO1
                                              }
                                              idCupon={item.ID_CUPON}
                                              legal={item.INFORMACION_CUPON}
                                              tipoProducto={
                                                item.ID_TIPO_PRODUCTO
                                              }
                                            />
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  )}
                                </>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
