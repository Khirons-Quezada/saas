import React from "react";
import { useState } from "react";

export default function CardCuponDescuento(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  if (props.tipoProducto === "6") {
    return (
      <>
        <div
          className="col-sm-6 col-md-3"
          data-toggle="modal"
          data-target={`#modal-descuento-${props.idCupon}`}
        >
          <div className="card ">
            <div
              className="card-body"
              style={{ marginLeft: "-2%", marginRight: "-2%" }}
            >
              <div
                className="row justify-content-center"
                style={{ marginTop: "-6%" }}
              >
                <div className="col-sm-12 text-center">
                  <strong style={{ color: "#783184" }}>{props.vigencia}</strong>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-6">
                  <img
                    style={{ width: "100%", marginTop: "20%" }}
                    src={`http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/imgCouponing/${props.imgProducto}`}
                  />
                </div>
                <div
                  className="col-sm-6 text-center"
                  style={{ minHeight: "140px", maxHeight: "140px" }}
                >
                  <div className="row">
                    <div className="col-sm-12">
                      {props.udn == "14" && (
                        <img
                          height={30}
                          style={{ margin: "-6%" }}
                          src="http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/banderas/Paris.png"
                        />
                      )}
                      {props.udn == "12" && (
                        <>
                          <img
                            style={{ margin: "-6%" }}
                            height={30}
                            src="http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/banderas/Jumbo.png"
                          />
                        </>
                      )}
                      {props.udn == "13" && (
                        <img
                          height={30}
                          style={{ margin: "-6%" }}
                          src="http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/banderas/Sisa.png"
                        />
                      )}
                    </div>
                    <div
                      className="col-sm-12 text-center"
                      style={{
                        color: "#000000",
                        minHeight: "60px",
                        maxHeight: "60px",
                        paddingTop: "15%",
                      }}
                    >
                      <p
                        style={{
                          lineHeight: "0px",
                          fontSize: "16px",
                        }}
                      >
                        <b>{props.tipoOferta.split("|")[0]}</b>
                      </p>
                    </div>
                    <div className="col-sm-12" style={{ marginTop: "-32%" }}>
                      <div
                        style={{
                          backgroundColor: "#783184",
                          height: "2px",
                          width: "90%",
                          marginLeft: "6%",
                        }}
                      ></div>
                    </div>
                    <div
                      className="col-sm-12 text-center"
                      style={{
                        color: "#000000",
                        minHeight: "60px",
                        maxHeight: "60px",
                        marginTop: "-31%",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "8px",
                        }}
                      >
                        {props.tipoOferta.split("|")[1]}
                      </p>
                    </div>
                    {!props.tipoOferta.split("|")[2] ? (
                      <></>
                    ) : (
                      <>
                        <div
                          className="col-sm-12 text-center"
                          style={{
                            color: "#000000",
                            minHeight: "60px",
                            maxHeight: "60px",
                            marginTop: "-35%",
                          }}
                        >
                          <p
                            style={{
                              lineHeight: "0px",
                              fontSize: "16px",
                            }}
                          >
                            <b>{props.tipoOferta.split("|")[2]}</b>
                          </p>
                        </div>
                        <div
                          className="col-sm-12"
                          style={{ marginTop: "-48%" }}
                        >
                          <div
                            style={{
                              backgroundColor: "#783184",
                              height: "2px",
                              width: "90%",
                              marginLeft: "6%",
                            }}
                          ></div>
                        </div>
                        <div
                          className="col-sm-12 text-center"
                          style={{
                            color: "#000000",
                            minHeight: "60px",
                            maxHeight: "60px",
                            marginTop: "-46%",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "8px",
                            }}
                          >
                            {props.tipoOferta.split("|")[3]}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "-23%" }}>
                <div className="col-sm-12">
                  <img
                    height={27}
                    src={`http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/image/promotext/${props.promotext1.toLowerCase()}`}
                  />
                  {props.promotext2 != "" && (
                    <img
                      height={27}
                      src={`http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/image/promotext/${props.promotext2.toLowerCase()}`}
                    />
                  )}
                  {props.promotext3 != "" && (
                    <img
                      height={27}
                      src={`http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/image/promotext/${props.promotext3.toLowerCase()}`}
                    />
                  )}
                </div>
              </div>
              <div className="row mt-5 pb-5">
                <div
                  className="col-sm-12"
                  style={{
                    minHeight: "45px",
                    maxHeight: "45px",
                    color: "#000000",
                  }}
                >
                  {props.descripcion.length > 45
                    ? props.descripcion.substring(0, 45) + "..."
                    : props.descripcion}
                </div>
              </div>
              <div className="row mt-5">
                <div
                  className="col-sm-12"
                  style={{
                    marginTop: "-4%",
                    marginBottom: "-7%",
                  }}
                >
                  <button
                    className="btn btn-outline-primary btn-block"
                    style={{
                      borderRadius: "60px",
                      color: !isHover ? "#783184" : "#fff",
                      borderColor: "#783184",
                      background: isHover ? "#783184" : "#fff",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <b>ACTIVAR OFERTA</b>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="mt-5 bg-dark text-white text-center"
              style={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <div className="col-sm-12">{props.clasificacion}</div>
            </div>
          </div>
        </div>
        {/* MODAL */}
        <div
          className="modal fade"
          id={`modal-descuento-${props.idCupon}`}
          tabindex="-1"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">x</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row" style={{ marginTop: "-7%" }}>
                  <div className="col-sm-12">
                    <h3 className="text-left text-primary">
                      <strong style={{ color: "#783184" }}>
                        {props.vigencia}
                      </strong>
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <img
                      style={{ width: "100%" }}
                      src={`http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/imgBodegon/${props.couponing.replace(
                        ".PNG",
                        ".png"
                      )}`}
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-12" style={{ marginTop: "1%" }}>
                    <img
                      height={35}
                      src={`http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/image/promotext/${props.promotext1.toLowerCase()}`}
                    />
                    {props.promotext2 != "" && (
                      <img
                        height={35}
                        src={`http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/image/promotext/${props.promotext2.toLowerCase()}`}
                      />
                    )}
                    {props.promotext3 != "" && (
                      <img
                        height={35}
                        src={`http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/ofertaspersonalizadas/image/promotext/${props.promotext3.toLowerCase()}`}
                      />
                    )}
                  </div>
                </div>
                <div className="row mt-5 pb-5">
                  <div
                    className="col-sm-12"
                    style={{
                      color: "#000000",
                      fontSize: "22px",
                      lineHeight: "24px",
                    }}
                  >
                    <b>{props.descripcion}</b>
                  </div>
                </div>
                <div className="row mt-5">
                  <div
                    className="col-sm-12"
                    style={{
                      minHeight: "45px",
                      color: "#000000",
                      fontSize: "16px",
                    }}
                  >
                    {props.legal}
                  </div>
                </div>
                <div className="row justify-content-center mt-5">
                  <div
                    className="col-sm-6 text-center"
                    style={{
                      marginTop: "1%",
                    }}
                  >
                    <button
                      className="btn btn-outline-primary btn-block"
                      style={{
                        borderRadius: "60px",
                        color: "#4f4e53",
                        borderColor: "#dfdee3",
                        background: "#fff",
                      }}
                    >
                      <b>NO ME INTERESA</b>
                    </button>
                  </div>
                  <div
                    className="col-sm-6 text-center"
                    style={{
                      marginTop: "1%",
                    }}
                  >
                    <button
                      className="btn btn-outline-primary btn-block"
                      style={{
                        borderRadius: "60px",
                        color: !isHover ? "#783184" : "#fff",
                        borderColor: "#783184",
                        background: isHover ? "#783184" : "#fff",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <b>ACTIVAR OFERTA</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
