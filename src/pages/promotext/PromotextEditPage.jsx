import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

// APIS
import { getPromotext } from "../../api/promotext/getPromotext";

export default function PromotextEditPage() {
  // PARAMETROS
  const params = useParams();
  const dataPromotext = getPromotext(params.id);

  const [imagen, setImagen] = useState();

  // const handleInputChange = (event) => {
  //   setDatosForm({
  //     ...datosForm,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datosForm);
    // axios
    //   .post(
    //     "http://172.18.2.30/services/post/categorias/post_update_categoria.php",
    //     datosForm
    //   )
    //   .then((response) => {
    //     if (response.data.status === "success") {
    //       toast.success("¡Categoría " + datosForm.idCategoria + " actualizada!", {
    //         color: "#ffffff",
    //         backgroundColor: "#48BA16",
    //       });
    //     } else {
    //       toast.error("¡Error al actualizar categoría " + datosForm.idCategoria + "!", {
    //         color: "#ffffff",
    //         backgroundColor: "#DB3847",
    //       });
    //     }
    //   });
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
                <h4 className="card-heading-title">Editar Promotext - # {params.id}</h4>
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
                              <strong>Nueva Imagen</strong>
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              placeholder="Imagen"
                              id="imagen"
                              name="imagen"
                              accept=".png"
                              onChange={handleInputChange}
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
                          {/* {JSON.stringify(dataPromotext)} */}
                          {dataPromotext.status && (
                            <img
                              src={`http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/image/promotext/${dataPromotext.data[0].imagen.toLowerCase()}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 mt-5 text-center">
                          <div className="form-group mb-0">
                            <button className="btn btn-primary" type="submit">
                            <span className='fa fa-save'></span>&nbsp;Actualizar
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
