import React from "react";
import { useState } from "react";

export default function CardCuponCupon(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  // console.log("tipo cupon" + props.tipoCupon);

  if (props.tipoProducto === "4" || props.tipoProducto === "7") {
    return (
      <>
        <div
          className="col-sm-6 col-md-3"
          data-toggle="modal"
          data-target={`#modal-cupon-${props.idCupon}`}
        >
          <div className="card">
            <div className="card-body">
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
                    height={90}
                    src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/tipo/categorias/${props.udn == "1" ? "smk" : props.udn == "2" ? "txd" : props.udn == "3" ? "mdh" : ""}/360/${props.imgProducto.toLowerCase()}`}
                  />
                </div>
                <div className="col-sm-6 text-center">
                  <div className="row">
                    <div className="col-sm-12">
                      {props.udn == "2" && (
                        <img
                          height={27}
                          style={{ margin: "-6%" }}
                          src="https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/banderas/2.png"
                        />
                      )}
                      {props.udn == "1" && (
                        <>
                          <img
                            style={{ margin: "-6%" }}
                            height={27}
                            src="https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/banderas/1.png"
                          />
                        </>
                      )}
                      {props.udn == "3" && (
                        <img
                          height={27}
                          style={{ margin: "-6%" }}
                          src="https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/banderas/3.png"
                        />
                      )}
                    </div>
                    <div
                      className="col-sm-12 text-center mt-4"
                      style={{
                        color: "#000000",
                        minHeight: "60px",
                        maxHeight: "60px",
                      }}
                    >
                      <p style={{ lineHeight: "14px" }}>
                        {props.tipoOferta.split("|")[0]}
                      </p>
                      {props.tipoOferta.split("|")[0] == "Acumulas" ? (
                        <>
                          <p style={{ lineHeight: "0px", fontSize: "22px" }}>
                            <b>{props.tipoOferta.split("|")[1]}</b>
                          </p>
                          <img
                            style={{ marginTop: "-10%" }}
                            src="/assets/images/ptsextra.svg"
                          />
                        </>
                      ) : (
                        <div style={{ marginTop: "-25%" }}>
                          <img
                            src="/assets/images/xtra.svg"
                            style={{ marginTop: "-10%" }}
                          />
                          <label style={{ fontSize: "20px", paddingTop: "3%" }}>
                            <b>{props.tipoOferta.split("|")[1]}</b>
                          </label>
                        </div>
                      )}
                    </div>
                    <div className="col-sm-12"></div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12">
                  <img
                    height={27}
                    src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/promotext/${props.promotext1.toLowerCase()}`}
                  />
                  {props.promotext2 != "" && (
                    <img
                      height={27}
                      src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/promotext/${props.promotext2.toLowerCase()}`}
                    />
                  )}
                  {props.promotext3 != "" && (
                    <img
                      height={27}
                      src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/promotext/${props.promotext3.toLowerCase()}`}
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
              className=" mt-5 bg-dark text-white text-center"
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
          id={`modal-cupon-${props.idCupon}`}
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
                  <div className="col-sm-6 text-center">
                    <img
                      height={140}
                      src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/tipo/categorias/${props.udn == "1" ? "smk" : props.udn == "2" ? "txd" : props.udn == "3" ? "mdh" : ""}/360/${props.imgProducto.toLowerCase()}`}
                    />
                  </div>
                  <div className="col-sm-6 text-center">
                    <div className="row">
                      <div className="col-sm-12">
                        <p
                          style={{
                            lineHeight: "14px",
                            fontSize: "16px",
                            marginTop: "0.5%",
                            marginBottom: "4px",
                          }}
                        >
                          Por el total de tus <br /> compras en
                        </p>
                        {props.udn == "2" && (
                          <img
                            height={40}
                            src="https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/banderas/2.png"
                          />
                        )}
                        {props.udn == "1" && (
                          <>
                            <img
                              height={40}
                              src="https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/banderas/1.png"
                            />
                          </>
                        )}
                        {props.udn == "3" && (
                          <img
                            height={40}
                            src="https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/banderas/3.png"
                          />
                        )}
                      </div>
                      <div
                        className="col-sm-12 text-center mt-5"
                        style={{
                          color: "#000000",
                          minHeight: "60px",
                          maxHeight: "60px",
                        }}
                      >
                        <p
                          style={{
                            lineHeight: "14px",
                            fontSize: "16px",
                            marginTop: "-1px",
                          }}
                        >
                          {props.tipoOferta.split("|")[0]}
                        </p>
                        {props.tipoOferta.split("|")[0] == "Acumulas" ? (
                          <>
                            <p style={{ lineHeight: "0px", fontSize: "28px" }}>
                              <b>{props.tipoOferta.split("|")[1]}</b>
                            </p>
                            <img
                              style={{ marginTop: "1%" }}
                              height={17}
                              src="/assets/images/ptsextra.svg"
                            />
                          </>
                        ) : (
                          <div style={{ marginTop: "-10%" }}>
                            <img
                              height={20}
                              src="/assets/images/xtra.svg"
                              style={{ marginTop: "-3%" }}
                            />
                            <label
                              style={{ fontSize: "26px", paddingTop: "3%" }}
                            >
                              <b>{props.tipoOferta.split("|")[1]}</b>
                            </label>
                          </div>
                        )}
                      </div>
                      <div className="col-sm-12"></div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-12" style={{ marginTop: "1%" }}>
                    <img
                      height={35}
                      src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/promotext/${props.promotext1.toLowerCase()}`}
                    />
                    {props.promotext2 != "" && (
                      <img
                        height={35}
                        src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/promotext/${props.promotext2.toLowerCase()}`}
                      />
                    )}
                    {props.promotext3 != "" && (
                      <img
                        height={35}
                        src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/promotext/${props.promotext3.toLowerCase()}`}
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
