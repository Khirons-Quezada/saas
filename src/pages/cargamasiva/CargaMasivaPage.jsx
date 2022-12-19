import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toast";
import axios from "axios";

export default function CargaMasivaPage() {
  // DATA
  const [fileDataCouponing, setFileDataCouponing] = useState(null);
  const handleFileSelectData = (event) => {
    setFileDataCouponing(event.target.files[0]);
  };
  const enviarDatosCouponing = (event) => {
    event.preventDefault();
    console.log("test");
    const dataFile = new FormData();
    dataFile.append("file", fileDataCouponing);
    axios
      .post(
        "http://172.18.2.30/services/post/cargamasiva/post_upload_data_couponing.php",
        dataFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data[0].status === "success") {
          toast.success("Data subida!", {
            color: "#ffffff",
            backgroundColor: "#48BA16",
          });
        } else {
          toast.error("¡Error al subir data!", {
            color: "#ffffff",
            backgroundColor: "#DB3847",
          });
        }
      });
  };
  //   IMAGEN
  const [fileImagenCouponing, setFileImagenCouponing] = useState(null);
  const handleFileSelectImage = (event) => {
    setFileImagenCouponing(event.target.files[0]);
  };
  const enviarImagenesCouponing = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", fileImagenCouponing);
    axios
      .post(
        "http://172.18.2.30/services/post/cargamasiva/post_upload_image_couponing.php",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        // console.log(response);
        if (response.data[0].status === "success") {
          toast.success("¡Imagenes subidas!", {
            color: "#ffffff",
            backgroundColor: "#48BA16",
          });
        } else {
          toast.error("¡Error al subir imagenes!", {
            color: "#ffffff",
            backgroundColor: "#DB3847",
          });
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
                <h4 className="card-heading-title">Carga Masiva</h4>
                <div className="card-heading-breadcrumb"></div>
              </div>
              {/* TABLE */}
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      {/* CARGA DATA COUPONING */}
                      <Fragment>
                        <form onSubmit={enviarDatosCouponing}>
                          <div className="row">
                            <div className="col-lg-9 col-md-10">
                              <div className="form-group">
                                <label>
                                  <strong>Carga Data Couponing</strong>&nbsp;
                                  <small className="text-muted">(.xlsx)</small>
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                  id="dataCouponing"
                                  name="dataCouponing"
                                  accept=".xlsx"
                                  onChange={handleFileSelectData}
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-2 d-flex align-items-center mt-2">
                              <button
                                className="btn btn-primary mt-5"
                                type="submit"
                              >
                                <span className="fa fa-save"></span>
                                &nbsp;Cargar
                              </button>
                            </div>
                          </div>
                        </form>
                      </Fragment>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      {/* CARGA IMAGENES COUPONING */}
                      <Fragment>
                        <form onSubmit={enviarImagenesCouponing}>
                          <div className="row">
                            <div className="col-lg-9 col-md-10">
                              <div className="form-group">
                                <label>
                                  <strong>Carga Imagenes Couponing</strong>
                                  &nbsp;
                                  <small className="text-muted">(.zip)</small>
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                  id="imagesCouponing"
                                  name="imagesCouponing"
                                  accept=".zip"
                                  onChange={handleFileSelectImage}
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-2 d-flex align-items-center mt-2">
                              <button
                                className="btn btn-primary mt-5"
                                type="submit"
                              >
                                <span className="fa fa-save"></span>
                                &nbsp;Cargar
                              </button>
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
        </div>
      </div>
    </>
  );
}
