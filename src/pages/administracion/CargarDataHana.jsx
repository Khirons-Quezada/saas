import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// COMPONENTS
import PageLoader from "../../components/PageLoader";

export default function CargarDataHana() {
  // LOADER
  const [isLoaded, setIsLoaded] = useState(true);

  // CATEGORIAS
  const [postCategorias, setPostCategorias] = useState({
    isStatus: false,
    listData: null,
  });

  // CATJER
  const [postCatJer, setPostCatJer] = useState({
    isStatus: false,
    listData: null,
  });

  // COUPONING
  const [postCouponing, setPostCouponing] = useState({
    isStatus: false,
    listData: null,
  });

  // CUPON MAIN
  const [postCuponMain, setPostCuponMain] = useState({
    isStatus: false,
    listData: null,
  });

  // CUPON METADATOS
  const [postCuponMetadatos, setPostCuponMetadatos] = useState({
    isStatus: false,
    listData: null,
  });

  // CUPON ESPECIAL
  const [postCuponEspecial, setPostCuponEspecial] = useState({
    isStatus: false,
    listData: null,
  });

  // BUTTONS
  // CATEGORIAS
  const getDataCategorias = (event) => {
    setIsLoaded(false);
    const baseUrl = "http://172.18.2.30/services/upload_hana_categorias.php";
    axios.get(baseUrl).then((response) => {
      console.log(response);
      if (Object.entries(response.data).length === 0) {
        setPostCategorias({
          isStatus: false,
          listData: null,
        });
        setIsLoaded(true);
      } else {
        setPostCategorias({
          isStatus: true,
          listData: response.data,
        });
        setIsLoaded(true);
      }
    });
  };

  // CATJET
  const getDataCatJer = (event) => {
    setIsLoaded(false);
    const baseUrl = "http://172.18.2.30/services/upload_hana_catjer.php";
    axios.get(baseUrl).then((response) => {
      console.log(response);
      if (Object.entries(response.data).length === 0) {
        setPostCatJer({
          isStatus: false,
          listData: null,
        });
        setIsLoaded(true);
      } else {
        setPostCatJer({
          isStatus: true,
          listData: response.data,
        });
        setIsLoaded(true);
      }
    });
  };

  // COUPONING
  const getDataCouponing = (event) => {
    setIsLoaded(false);
    const baseUrl = "http://172.18.2.30/services/upload_hana_couponing.php";
    axios.get(baseUrl).then((response) => {
      console.log(response);
      if (Object.entries(response.data).length === 0) {
        setPostCouponing({
          isStatus: false,
          listData: null,
        });
        setIsLoaded(true);
      } else {
        setPostCouponing({
          isStatus: true,
          listData: response.data,
        });
        setIsLoaded(true);
      }
    });
  };

  // CUPON MAIN
  const getDataCuponMain = (event) => {
    setIsLoaded(false);
    const baseUrl = "http://172.18.2.30/services/upload_hana_cupon_main.php";
    axios.get(baseUrl).then((response) => {
      console.log(response);
      if (Object.entries(response.data).length === 0) {
        setPostCuponMain({
          isStatus: false,
          listData: null,
        });
        setIsLoaded(true);
      } else {
        setPostCuponMain({
          isStatus: true,
          listData: response.data,
        });
        setIsLoaded(true);
      }
    });
  };

  // CUPON METADATOS
  const getDataCuponMetadatos = (event) => {
    setIsLoaded(false);
    const baseUrl =
      "http://172.18.2.30/services/upload_hana_cupon_metadatos.php";
    axios.get(baseUrl).then((response) => {
      console.log(response);
      if (Object.entries(response.data).length === 0) {
        setPostCuponMetadatos({
          isStatus: false,
          listData: null,
        });
        setIsLoaded(true);
      } else {
        setPostCuponMetadatos({
          isStatus: true,
          listData: response.data,
        });
        setIsLoaded(true);
      }
    });
  };

  // CUPON ESPECIALES
  const getDataCuponEspecial = (event) => {
    setIsLoaded(false);
    const baseUrl =
      "http://172.18.2.30/services/upload_hana_cupon_especiales.php";
    axios.get(baseUrl).then((response) => {
      console.log(response);
      if (Object.entries(response.data).length === 0) {
        setPostCuponEspecial({
          isStatus: false,
          listData: null,
        });
        setIsLoaded(true);
      } else {
        setPostCuponEspecial({
          isStatus: true,
          listData: response.data,
        });
        setIsLoaded(true);
      }
    });
  };

  if (!isLoaded) return <PageLoader />;

  return (
    <>
      <div className="tovvl-main">
        <div className="container">
          <div className="main-content">
            <div className="main-body">
              {/* HEADER */}
              <div className="card-heading d-flex a-i-center j-c-between">
                <h4 className="card-heading-title">Cargar Data a Sap Hana</h4>
                <div className="card-heading-breadcrumb">
                  <Link to="/private/administracion" className="btn btn-primary">
                    <span className="fa fa-arrow-left"></span> Atras
                  </Link>
                </div>
              </div>
              <div className="row">
                {/* CATEGORIAS */}
                <div className="col-sm-12 col-md-6">
                  <div className="card">
                    <div className="card-header d-flex a-i-center j-c-between">
                      <h4>
                        <b>Carga de data - Categorías</b>
                      </h4>
                      <button
                        className="btn btn-primary"
                        onClick={getDataCategorias}
                      >
                        <span className="fa fa-upload"></span> Cargar Data
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <h5>
                            <b>Logs</b>
                          </h5>
                          <div style={{ overflowY: "auto", height: "180px" }}>
                            {postCategorias.isStatus &&
                              (postCategorias.listData.data[0].hasOwnProperty(
                                "error"
                              ) ? (
                                postCategorias.listData.data[0].error
                              ) : (
                                <>
                                  Ejecución: {postCategorias.listData.fecha}
                                  <br />
                                  Leídos desde Intranet:{" "}
                                  {postCategorias.listData.leidos}
                                  <br />
                                  Cargados a HANA:{" "}
                                  {postCategorias.listData.cargados}
                                  {postCategorias.listData.data.map((item) => (
                                    <>
                                      <li>
                                        Categoría ID: {item.id}, estado:{" "}
                                        {item.state}
                                      </li>
                                    </>
                                  ))}
                                </>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CATJER */}
                <div className="col-sm-12 col-md-6">
                  <div className="card">
                    <div className="card-header d-flex a-i-center j-c-between">
                      <h4>
                        <b>Carga de data - Catjer</b>
                      </h4>
                      <button
                        className="btn btn-primary"
                        onClick={getDataCatJer}
                      >
                        <span className="fa fa-upload"></span> Cargar Data
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <h5>
                            <b>Logs</b>
                          </h5>
                          <div style={{ overflowY: "auto", height: "180px" }}>
                            {postCatJer.isStatus &&
                              (postCatJer.listData.data[0].hasOwnProperty(
                                "error"
                              ) ? (
                                postCatJer.listData.data[0].error
                              ) : (
                                <>
                                  Ejecución: {postCatJer.listData.fecha}
                                  <br />
                                  Leídos desde Intranet:{" "}
                                  {postCatJer.listData.leidos}
                                  <br />
                                  Cargados a HANA:{" "}
                                  {postCatJer.listData.cargados}
                                  {postCatJer.listData.data.map((item) => (
                                    <>
                                      <li>
                                        Categoría ID: {item.id}, estado:{" "}
                                        {item.state}
                                      </li>
                                    </>
                                  ))}
                                </>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COUPONING */}
                <div className="col-sm-12 col-md-6">
                  <div className="card">
                    <div className="card-header d-flex a-i-center j-c-between">
                      <h4>
                        <b>Carga de data - Couponing</b>
                      </h4>
                      <button
                        className="btn btn-primary"
                        onClick={getDataCouponing}
                      >
                        <span className="fa fa-upload"></span> Cargar Data
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <h5>
                            <b>Logs</b>
                          </h5>
                          <div style={{ overflowY: "auto", height: "180px" }}>
                            {postCouponing.isStatus &&
                              (postCouponing.listData.data[0].hasOwnProperty(
                                "error"
                              ) ? (
                                postCouponing.listData.data[0].error
                              ) : (
                                <>
                                  Ejecución: {postCouponing.listData.fecha}
                                  <br />
                                  Leídos desde Intranet:{" "}
                                  {postCouponing.listData.leidos}
                                  <br />
                                  Cargados a HANA:{" "}
                                  {postCouponing.listData.cargados}
                                  {postCouponing.listData.data.map((item) => (
                                    <>
                                      <li>
                                        Couponing ID: {item.id}, estado:{" "}
                                        {item.state}
                                      </li>
                                    </>
                                  ))}
                                </>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CUPONES MAIN */}
                <div className="col-sm-12 col-md-6">
                  <div className="card">
                    <div className="card-header d-flex a-i-center j-c-between">
                      <h4>
                        <b>Carga de data - Cupones Main</b>
                      </h4>
                      <button
                        className="btn btn-primary"
                        onClick={getDataCuponMain}
                      >
                        <span className="fa fa-upload"></span> Cargar Data
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <h5>
                            <b>Logs</b>
                          </h5>
                          <div style={{ overflowY: "auto", height: "180px" }}>
                            {postCuponMain.isStatus &&
                              (postCuponMain.listData.data[0].hasOwnProperty(
                                "error"
                              ) ? (
                                postCuponMain.listData.data[0].error
                              ) : (
                                <>
                                  Ejecución: {postCuponMain.listData.fecha}
                                  <br />
                                  Leídos desde Intranet:{" "}
                                  {postCuponMain.listData.leidos}
                                  <br />
                                  Cargados a HANA:{" "}
                                  {postCuponMain.listData.cargados}
                                  {postCuponMain.listData.data.map((item) => (
                                    <>
                                      <li>
                                        Cupón ID: {item.id}, estado:{" "}
                                        {item.state}
                                      </li>
                                    </>
                                  ))}
                                </>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CUPONES METADATOS */}
                <div className="col-sm-12 col-md-6">
                  <div className="card">
                    <div className="card-header d-flex a-i-center j-c-between">
                      <h4>
                        <b>Carga de data - Cupones Metadatos</b>
                      </h4>
                      <button
                        className="btn btn-primary"
                        onClick={getDataCuponMetadatos}
                      >
                        <span className="fa fa-upload"></span> Cargar Data
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <h5>
                            <b>Logs</b>
                          </h5>
                          <div style={{ overflowY: "auto", height: "180px" }}>
                            {postCuponMetadatos.isStatus &&
                              (postCuponMetadatos.listData.data[0].hasOwnProperty(
                                "error"
                              ) ? (
                                postCuponMetadatos.listData.data[0].error
                              ) : (
                                <>
                                  Ejecución: {postCuponMetadatos.listData.fecha}
                                  <br />
                                  Leídos desde Intranet:{" "}
                                  {postCuponMetadatos.listData.leidos}
                                  <br />
                                  Cargados a HANA:{" "}
                                  {postCuponMetadatos.listData.cargados}
                                  {postCuponMetadatos.listData.data.map(
                                    (item) => (
                                      <>
                                        <li>
                                          Cupón ID: {item.id}, estado:{" "}
                                          {item.state}
                                        </li>
                                      </>
                                    )
                                  )}
                                </>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CUPONES ESPECIALES */}
                <div className="col-sm-12 col-md-6">
                  <div className="card">
                    <div className="card-header d-flex a-i-center j-c-between">
                      <h4>
                        <b>Carga de data - Cupones Especiales</b>
                      </h4>
                      <button
                        className="btn btn-primary"
                        onClick={getDataCuponEspecial}
                      >
                        <span className="fa fa-upload"></span> Cargar Data
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <h5>
                            <b>Logs</b>
                          </h5>
                          <div style={{ overflowY: "auto", height: "180px" }}>
                            {postCuponEspecial.isStatus &&
                              (postCuponEspecial.listData.data[0].hasOwnProperty(
                                "error"
                              ) ? (
                                postCuponEspecial.listData.data[0].error
                              ) : (
                                <>
                                  Ejecución: {postCuponEspecial.listData.fecha}
                                  <br />
                                  Leídos desde Intranet:{" "}
                                  {postCuponEspecial.listData.leidos}
                                  <br />
                                  Cargados a HANA:{" "}
                                  {postCuponEspecial.listData.cargados}
                                  {postCuponEspecial.listData.data.map(
                                    (item) => (
                                      <>
                                        <li>
                                          Cupón ID: {item.id}, estado:{" "}
                                          {item.state}
                                        </li>
                                      </>
                                    )
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
