import React from "react";

export default function CardDashboard(props) {
  return (
    <>
      <div className={props.colSpace}>
        <div className="card card-hover ">
          <div
            className="card-body text-center pos-relative"
            style={{ backgroundColor: "#4b1d3f" }}
          >
            <div className="fs-20 fw-400 mb-5" style={{ color: "#fff" }}>
              {props.name}
            </div>
            <span className={props.icon}></span>
            <div className="fs-30 fw-700" style={{ color: "#fff" }}>
              {props.value}
            </div>
            <div
              className="status-up pos-absolute t-1 r-15"
              style={{ color: "#fff" }}
            >
              {props.message}
              {/* <i className="fa fa-angle-up"></i> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
