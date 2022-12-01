import axios from "axios"
import React, { useState, useEffect } from "react";

export function getUDNSelector() {
  const [get, setGet] = useState({
    status: false,
    data: null
  });
  useEffect(() => {
    axios
      .get(
        "http://172.18.2.30/services/data/forms/get_data_selector_udn.php"
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