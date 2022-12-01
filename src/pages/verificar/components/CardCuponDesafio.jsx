import React from "react";
import { useState } from "react";

export default function CardCuponDesafio(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  if (props.tipoProducto === "1") {
    return (
      <>
        <div
          className="col-sm-12 col-md-4"
          data-toggle="modal"
          data-target={`#modal-desafio-${props.idCupon}`}
        >
          <div className="card">
            <img
              style={{
                width: "100%",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
              src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/tipo/metacompra/360/${props.imgProducto.toLowerCase()}`}
            />
            <div
              className="card-body"
              style={{ marginLeft: "-2%", marginRight: "-2%" }}
            >
              <div
                className="row justify-content-center"
                style={{ marginTop: "-5%" }}
              >
                <div className="col-sm-12 text-center">
                  <strong style={{ color: "#783184" }}>{props.vigencia}</strong>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-8">
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
                <div className="col-sm-4 text-center">
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
                  </div>
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  minHeight: "60px",
                  maxHeight: "60px",
                  color: "#000000",
                }}
              >
                <div className="col-sm-8">
                  {props.descripcion.length > 50
                    ? props.descripcion.substring(0, 50) + "..."
                    : props.descripcion}
                </div>
                <div
                  className="col-sm-4 text-center"
                  style={{ color: "#000000" }}
                >
                  <p style={{ lineHeight: "14px" }}>
                    {props.tipoOferta.split("|")[0]}
                  </p>
                  <>
                    <p style={{ lineHeight: "0px", fontSize: "22px" }}>
                      <b>{props.tipoOferta.split("|")[1]}</b>
                    </p>
                    <img
                      style={{ marginTop: "-10%" }}
                      src="/assets/images/ptsextra.svg"
                    />
                  </>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12">
                  <button
                    className="btn btn-outline-primary btn-block"
                    style={{
                      borderRadius: "60px",
                      color: !isHover ? "#783184" : "#fff",
                      borderColor: "#783184",
                      background: isHover ? "#783184" : "#fff",
                      marginBottom: "-5%",
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
          id={`modal-desafio-${props.idCupon}`}
          tabindex="-1"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <img
                style={{
                  width: "100%",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
                src={`https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/tipo/metacompra/360/${props.imgProducto.toLowerCase()}`}
              />
              <button
                style={{
                  marginLeft: "93%",
                  marginTop: "1%",
                  backgroundColor: "#fff",
                  zIndex: "100",
                  position: "absolute",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
                type="button"
                data-dismiss="modal"
              >
                <span aria-hidden="true">
                  <b>X</b>
                </span>
              </button>
              <div className="modal-body">
                <div className="row" style={{ marginTop: "0%" }}>
                  <div className="col-sm-12">
                    <h3 className="text-left text-primary">
                      <strong style={{ color: "#783184" }}>
                        {props.vigencia}
                      </strong>
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
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
                  </div>
                  <div className="col-sm-6 text-center">
                    <div className="row">
                      <div className="col-sm-12">
                        {props.udn == "2" && (
                          <img
                            height={35}
                            src="https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/banderas/2.png"
                          />
                        )}
                        {props.udn == "1" && (
                          <>
                            <img
                              height={35}
                              src="https://d2i1txwfpocwzg.cloudfront.net/prod/ofertas/banderas/1.png"
                            />
                          </>
                        )}
                        {props.udn == "3" && (
                          <img
                            height={35}
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
