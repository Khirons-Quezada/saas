import React from "react";
import { NavLink } from "react-router-dom";

export default function ButtonAdministracion(props) {
  return (
    <>
      <div className="col-sm-6 col-md-2 text-center">
        <NavLink
        to={`${props.url}`}
          style={{ height: "50px", width: "50px" }}
          className={`btn btn-${props.color}`}
        >
          <span style={{ fontSize: "20px", paddingTop: "40%" }} className={`fa fa-${props.icon}`}></span>
        </NavLink>
        <br />
        {props.title}
        
      </div>
    </>
  );
}
