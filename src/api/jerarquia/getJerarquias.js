import axios from "axios"
import React, { useState, useEffect } from "react";

export function getJerarquias() {
  const [get, setGet] = useState({
    status: false,
    data: null
  });
  useEffect(() => {
    axios
      .get(
        "http://172.18.2.30/services/data/jerarquia/get_data_jerarquias.php"
      )
      .then((response) => {
        if (response.data.data.length === 0) {
          setGet({
            status: false,
            data: null
          });
        } else {
          setGet({
            status: true,
            data: response.data.data
          });
        }
      });
  }, []);
  return get;
}