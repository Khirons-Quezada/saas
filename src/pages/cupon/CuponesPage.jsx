import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toast";
// import "./style/style.css";

import PageLoader from "../../components/PageLoader";

const baseURL =
  "http://172.18.2.30/services/data/cupon/get_data_cupones.php";
const baseURLSearch =
  "http://172.18.2.30/services/data/cupon/get_data_cupones_search.php";


export default function CuponesPage() {
  // CHECKS 
  // LOADING DELETE
  const [isLoading, setIsLoading] = useState(false);
  // SEARCH
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setPage(0);
    setSearch(event.target.value);
    axios
      .get(baseURLSearch + "?search=" + event.target.value)
      .then((response) => {
        // console.log(response.data.data);

        if (response.data.data.length == 0) {
          setPost({
            isLoaded: true,
            isStatus: false,
            listData: null,
          });
        } else {
          setPost({
            isLoaded: true,
            isStatus: true,
            listData: response.data,
          });
          // setPostPage({
          //   isStatus: true,
          //   listData: response.data.pages,
          // });
        }
      });
  };
  // CALLAXIOS
  const [post, setPost] = useState({
    isLoaded: false,
    isStatus: false,
    listData: null,
  });

  const [page, setPage] = useState(1);
  const [postPage, setPostPage] = useState({
    isStatus: false,
    listData: null,
  });

  useEffect(() => {
    axios.get(baseURL + "?page=" + page).then((response) => {
      // console.log(response.data.data);

      if (response.data.data.length == 0) {
        setPost({
          isLoaded: true,
          isStatus: false,
          listData: null,
        });
      } else {
        setPost({
          isLoaded: true,
          isStatus: true,
          listData: response.data,
        });
        setPostPage({
          isStatus: true,
          listData: response.data.pages,
        });
      }
    });
  }, [page, isLoading]);

  const changePage = (pag) => {
    setPage(pag);
    setSearch("");
  };

  // ACTIVAR/DESACTIVAR CATEGORIA
  const enviarDatosActivar = (idCategoria) => {
    setIsLoading(true);
    axios
      .post(
        "http://172.18.2.30/services/post/categorias/post_activar_categoria.php",
        { idCategoria: idCategoria }
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success("¡Categoría " + idCategoria + " actualizada!", {
            color: "#ffffff",
            backgroundColor: "#48BA16",
          });
        } else {
          toast.error("¡Error al actualizar categoría " + idCategoria + "!", {
            color: "#ffffff",
            backgroundColor: "#DB3847",
          });
        }
        setIsLoading(false);
      });
  };
  const enviarDatosDesactivar = (idCategoria) => {
    setIsLoading(true);
    axios
      .post(
        "http://172.18.2.30/services/post/categorias/post_desactivar_categoria.php",
        { idCategoria: idCategoria }
      )
      .then((response) => {
        if (response.data.status === "success") {
          toast.success("¡Categoría " + idCategoria + " actualizada!", {
            color: "#ffffff",
            backgroundColor: "#48BA16",
          });
        } else {
          toast.error("¡Error al actualizar categoría " + idCategoria + "!", {
            color: "#ffffff",
            backgroundColor: "#DB3847",
          });
        }
        setIsLoading(false);
      });
  };

  if (!post.isLoaded) return <PageLoader />;
  if (isLoading) return <PageLoader />;
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
                  <Link
                    className="btn btn-primary"
                    to={`/private/gestionar/categoria/crear`}
                  >
                    <span className="fa fa-plus"></span> Crear Cupón
                  </Link>
                </div>
              </div>
              {/* TABLE */}
              <div className="card">
                <div className="card-body">
                  <div className="row justify-content-end">
                    Buscar:&nbsp;
                    <input
                      type="text"
                      className="form-control"
                      style={{ width: "250px" }}
                      name="search"
                      id="search"
                      value={search}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="row mt-5">
                    <table
                      className="table table-bordered "
                      id="table-categorias"
                    >
                      <thead className="thead-dark">
                        <tr>
                          <th>#</th>
                          <th>Tipo Cupón</th>
                          <th>UDN</th>
                          <th>Categoría</th>
                          <th>Estado</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {post.isStatus &&
                          post.listData.data.map((item) => (
                            <tr>
                              <td>{item.id_cupon}</td>
                              <td>
                                {item.attrib01.length > 25
                                  ? item.attrib01.substring(0, 25) + "..."
                                  : item.attrib01}
                              </td>
                              <td>{item.UDN}</td>
                              <td>{item.CATEGORIA}</td>
                              <td>
                                {item.habilitado == "0" ? (
                                  <>
                                    <span className="badge badge-danger">
                                      Desactivado
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span className="badge badge-success">
                                      Activado
                                    </span>
                                  </>
                                )}
                              </td>
                              <td>
                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic example"
                                >
                                  <Link
                                    className="btn btn-primary btn-sm"
                                    to={`/private/gestionar/cupon/${item.id_cupon}`}
                                    title="Editar"
                                  >
                                    <span className="fa fa-edit"></span> Editar
                                  </Link>
                                    
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="row pt-5 justify-content-end">
                    {postPage.isStatus && (
                      <>
                        <nav aria-label="...">
                          <ul className="pagination ">
                            <li
                              className="page-item"
                              onClick={() => {
                                changePage(1);
                              }}
                            >
                              <label className="page-link">Primera</label>
                            </li>
                            {postPage.listData[0].active ==
                            postPage.listData[0].min ? (
                              <></>
                            ) : (
                              <li
                                className="page-item"
                                onClick={() => {
                                  changePage(postPage.listData[0].prev);
                                }}
                              >
                                <label className="page-link">
                                  {postPage.listData[0].prev}
                                </label>
                              </li>
                            )}
                            <li
                              className="page-item active"
                              onClick={() => {
                                changePage(postPage.listData[0].active);
                              }}
                            >
                              <label className="page-link">
                                {postPage.listData[0].active}
                              </label>
                            </li>
                            {postPage.listData[0].active ==
                            postPage.listData[0].next ? (
                              <></>
                            ) : (
                              <li
                                className="page-item"
                                onClick={() => {
                                  changePage(postPage.listData[0].next);
                                }}
                              >
                                <label className="page-link">
                                  {postPage.listData[0].next}
                                </label>
                              </li>
                            )}
                            <li
                              className="page-item"
                              onClick={() => {
                                changePage(postPage.listData[0].max);
                              }}
                            >
                              <label className="page-link">Última</label>
                            </li>
                          </ul>
                        </nav>
                      </>
                    )}
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
