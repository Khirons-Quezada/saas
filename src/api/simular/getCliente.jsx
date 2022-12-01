import axios from "axios";
import React from "react";

export function getCliente(props) {
  const baseURLCupon =
    "http://advanalytics-fidelidad.cencosud.corp:8080/Intranet-GestionFidelidad/services/svc_get_simular_por_cliente_cupon.php?rut=" +
    rut;
  return <div>GetCliente</div>;
}
