import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function PromotextCreatePage() {
  return (
    <>
      {/* <PageLoader /> */}
      <div className="tovvl-main">
        <div className="container">
          <div className="main-content">
            <div className="main-body">
              {/* HEADER */}
              <div className="card-heading d-flex a-i-center j-c-between">
                <h4 className="card-heading-title">Crear Promotext</h4>
                <div className="card-heading-breadcrumb">
                  <Link
                    to="/private/gestionar/promotexts"
                    className="btn btn-primary"
                  >
                    <span className="fa fa-arrow-left"></span> Volver
                  </Link>
                </div>
              </div>
              {/* TABLE */}
              <div className="card">
                <div className="card-body">
                  <Fragment>
                    <form>
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>
                              <strong>Nueva Imagen</strong>
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              placeholder="Imagen"
                              id="imagen"
                              name="imagen"
                              accept=".png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 mt-5 text-center">
                          <div className="form-group mb-0">
                            <button className="btn btn-primary" type="submit">
                              <span className='fa fa-save'></span>&nbsp;Crear
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
