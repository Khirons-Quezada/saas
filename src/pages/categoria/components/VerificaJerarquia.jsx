import React, { useState, useEffect } from "react";
import axios from "axios";
import PageLoader from "../../../components/PageLoader";

export default function VerificaJerarquia(props) {
  const [postJerarquia, setPostJerarquia] = useState(null);
  // IS STATE
  const [isState, setIsState] = useState(false);
  useEffect(() => {
    axios
      .get(
        "http://172.18.2.30/services/data/jerarquia/get_data_jerarquia_categoria.php?combinacion_jer=" +
          props.jerarquias
      )
      .then((response) => {
        if (response.data.data.length === 0) {
          setPostJerarquia(null);
          setIsState(false);
        } else {
          setIsState(true);
          setPostJerarquia(response.data);
        }
      });
  }, []);
  return (
    <>
      {!isState ? (
        <tr>
          <td colspan="5" className="text-center">
            Cargando...
          </td>
        </tr>
      ) : (
        postJerarquia.data.map((i) => (
          <>
            {i.id_jerarquia === props.jerarquia && (
              <tr>
                <td>{i.id_jerarquia}</td>
                <td>{i.nivel}</td>
                <td>{i.detalle}</td>
                <td>{i.udn}</td>
                <td>
                  <button className="btn btn-danger btn-sm">
                    <span className="fa fa-trash"></span>
                  </button>
                </td>
              </tr>
            )}
          </>
        ))
      )}
    </>
  );
}
