import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toast";
import axios from "axios";

// APIS
import { getPromotext } from "../../api/promotext/getPromotext";

export default function PromotextEditPage() {
  // PARAMETROS
  const params = useParams();
  const [dataPromotext, setDataPromotext] = useState(null);

  const [imagen, setImagen] = useState(null);
  const [numImg, setnumImg] = useState(0);
  const [description, setDescription] = useState("");

  const [imagenP, setImagenP] = useState({
    imageSrc: "",
    imageHash: Date.now(),
  });

  useEffect(() => {
    axios
      .get(
        "http://172.18.2.30/services/data/promotext/get_data_promotext.php?id=" +
          params.id
      )
      .then((response) => {
        if (response.data.data.length === 0) {
          setDataPromotext({
            status: false,
            data: null,
          });
        } else {
          setDataPromotext({
            status: true,
            data: response.data.data,
          });
          setImagenP({
            imageSrc: `${response.data.data[0].imagen}`,
            imageHash: Date.now(),
          });
          setDescription(response.data.data[0].descripcion);
        }
      });
  }, [numImg]);

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
    data.append("idPromotext", dataPromotext.data[0].id_promotext);
    data.append("descripcion", description);
    axios
      .post(
        "http://172.18.2.30/services/post/promotexts/post_update_image_promotext.php",
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
          toast.success("¡Promotext actualizado!", {
            color: "#ffffff",
            backgroundColor: "#48BA16",
          });
          setImagenP({
            imageSrc: `${response.data[0].name}`,
            imageHash: Date.now(),
          });
          setnumImg(numImg + 1);
        } else {
          toast.error("¡Error al actualizar promotext!", {
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
                  Editar Promotext - # {params.id}
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
                            />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-12">
                          <strong>Imagen Cargada</strong>
                        </div>
                        <div className="col-sm-12 mt-5">                          
                          {imagenP.imageSrc != "" && (
                            <img
                              src={`http://172.18.2.30/services/data/images/promotext/${imagenP.imageSrc}?${imagenP.imageHash}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 mt-5 text-center">
                          <div className="form-group mb-0">
                            <button className="btn btn-primary" type="submit">
                              <span className="fa fa-save"></span>
                              &nbsp;Actualizar
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
