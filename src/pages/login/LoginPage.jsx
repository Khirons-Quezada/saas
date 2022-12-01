import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

const baseUrl = "http://172.18.2.30/services/data/login/get_data_login.php";

export default function LoginPage() {
  const [post, setPost] = useState(null);

  const { login } = useAuthContext();

  const [formUser, setFormUser] = useState({
    user: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormUser({
      ...formUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(baseUrl, formUser).then((response) => { 
      if (response.data.length === 0) {
        console.log("vacío");
      } else {
        login(response.data[0]);
        setPost(response.data);
        console.log(response.data);
      }
    });
  };

  return (
    <>
      <div className="auth-boxed">
        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="auth-text">
              <div className="logo logo-type">
                <img
                  src="/assets/images/logo.png"
                  className="img-fluid"
                  style={{marginLeft: "10%"}}
                  width="150"
                />
              </div>
              <p className="mb-0">
                <span>Bienvenid@,</span> ingrese para continuar.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-20">
                <label for="form-mail">
                  <strong>Usuario</strong>
                </label>
                <div className="input-icon input-icon-right">
                  <input
                    type="text"
                    className="form-control form-control-pill"
                    id="user"
                    name="user"
                    onChange={handleInputChange}
                    value={formUser.user}
                    placeholder="Ingrese su usuario"
                  />
                  <i className="far fa-envelope icon text-fade"></i>
                </div>
              </div>
              <div className="form-group mb-20">
                <label for="form-pass">
                  <strong>Contraseña</strong>
                </label>
                <div className="input-icon input-icon-right">
                  <input
                    type="password"
                    className="form-control form-control-pill"
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                    value={formUser.password}
                    placeholder="Ingrese su contraseña"
                  />
                  <i className="fas fa-lock icon text-fade"></i>
                </div>
              </div>
              <div className="form-group">
                <label className="control control-checkbox">
                  <span className="text-light">Recuérdame</span>
                  <input type="checkbox" checked />
                  <span className="control-icon"></span>
                </label>
              </div>
              <div className="form-group mt-20">
                <button className="btn btn-primary btn-round btn-block btn-md">
                  Entrar
                </button>
              </div>
              <div className="auth-footer">
                <hr />
                <a href="page-register.html">¿Olvidó su contraseña?</a>
                <p className="mt-5">
                  ¿No tienes una cuenta?{" "}
                  <a href="page-register.html">Registrarse</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
