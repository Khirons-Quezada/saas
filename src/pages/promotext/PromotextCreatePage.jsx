import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toast";
import axios from "axios";

export default function PromotextCreatePage() {
  const [imagen, setImagen] = useState(null);
  const [description, setDescription] = useState("");

  const changeImagen = (e) => {
    setImagen(e.target.files[0]);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  }

  const enviarDatos = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", imagen);
    data.append("descripcion", description);
    axios
      .post(
        "http://172.18.2.30/services/post/promotexts/post_create_image_promotext.php",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data[0].status === "success") {
          toast.success("¡Promotext creado!", {
            color: "#ffffff",
            backgroundColor: "#48BA16",
          });
        } else {
          toast.error("¡Error al crear promotext!", {
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
                <h4 className="card-heading-title">
                  Crear Promotext
                </h4>
                <div className="card-heading-breadcrumb">
                  <Link
                    to="/private/gestionar/promotexts"
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
                              <strong>Descripción</strong>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Descripción"
                              id="descripcion"
                              name="descripcion"
                              value={description}
                              onChange={changeDescription}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Nueva Imagen</strong>
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              placeholder="Imagen"
                              id="imagen"
                              name="imagen"
                              accept=".png"
                              // value={imagen.name}
                              onChange={changeImagen}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 mt-5 text-center">
                          <div className="form-group mb-0">
                            <button className="btn btn-primary" type="submit">
                              <span className="fa fa-save"></span>
                              &nbsp;Crear
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
