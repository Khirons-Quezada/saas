import React from "react";

export default function Error404Page() {
  return (
    <>
      <div className="error-wrapper">
        <div className="error-icon">
          <div className="icon">
            <i data-feather="alert-triangle"></i>
          </div>
        </div>
        <div className="error-content">
          <div className="error-title">404</div>
          <div className="error-sub-title">PÁGINA NO ENCONTRADA</div>
          <div className="error-text">
            Lo sentimos, la página que intenta buscar ya no existe.
          </div>
          <a href="/" className="btn btn-outline-white btn-round btn-lg">
            Volver
          </a>
        </div>
      </div>
    </>
  );
}
