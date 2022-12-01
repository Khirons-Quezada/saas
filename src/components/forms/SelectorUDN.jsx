import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUDNSelector } from "../../api/forms/getUDNSelector";

export default function SelectorUDN(props) {
  const dataUDN = getUDNSelector();
  return (
    <>
      <select name={props.name} id={props.name} className="form-control">
        {dataUDN.status &&
          dataUDN.data.map((i) => (
            <option value={`${i.id_uc}`} selected={props.select == i.descripcion || props.select == i.id_uc ? true: false}>{i.descripcion}</option>
          ))}
      </select>
    </>
  );
}
