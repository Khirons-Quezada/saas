import CardDashboard from '../components/CardDashboard';

export default function HomePage() {
  return (
    <>
      <div className="tovvl-main">
        <div className="container">
          <div className="row row-md">
            <div className="col-lg-12 col-md-12">
              <img
                src="/assets/images/banner_2.jpg"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="row row-md" style={{ marginTop: "2%" }}>
            <CardDashboard
              value="4,3 mill."
              name="Cupones Asignados"
              message=""
              icon="fa fa-3x fa-ticket text-white"
              fontS_value=""
              fontS_name=""
              colSpace="col-lg-4 col-md-6"
            />
            <CardDashboard
              value="441.836"
              name="Cupones Activados"
              message=""
              icon="fa fa-3x fa-ticket text-white"
              fontS_value=""
              fontS_name=""
              colSpace="col-lg-4 col-md-6"
            />
            <CardDashboard
              value="9.104"
              name="Cupones Ganados"
              message=""
              icon="fa fa-3x fa-ticket text-white"
              fontS_value=""
              fontS_name=""
              colSpace="col-lg-4 col-md-6"
            />
            <CardDashboard
              value="24.637"
              name="Clientes Activos"
              message=""
              icon="fa fa-3x fa-user text-white"
              fontS_value=""
              fontS_name=""
              colSpace="col-lg-4 col-md-6"
            />
            <CardDashboard
              value="16,5 mill."
              name="Puntos Entregados"
              message=""
              icon="fa fa-3x fa-gift text-white"
              fontS_value=""
              fontS_name=""
              colSpace="col-lg-4 col-md-6"
            />
            <CardDashboard
              value="150 mill."
              name="Descuentos Entregados"
              message=""
              icon="fa fa-3x fa-percent text-white"
              fontS_value=""
              fontS_name=""
              colSpace="col-lg-4 col-md-6"
            />
          </div>
          <div className="row row-md">
            <div className="col-lg-12 col-md-12">
              <div className="card widget10">
                <div className="card-body">
                  <div className="text-title fs-12 fw-700 mb-20">
                    <h3>Cupones Activados por UDN</h3>
                  </div>
                  <div className="row row-md">
                    <div className="col-lg-12 col-md-12">
                      <canvas id="chartJsBar3" height="60"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card widget10">
                <div className="card-body">
                  <div className="text-title fs-12 fw-700 mb-20">
                    <h3>Cupones Desasctivados por UDN</h3>
                  </div>
                  <div className="row row-md">
                    <div className="col-lg-12 col-md-12">
                      <canvas id="chartJsBar3_1" height="60"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-md">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">
                    <div className="text-title fs-12 fw-700 mb-20">
                      <h3>Dist. Clientes con optin por tipo de cupón</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="widget2">
                    <div className="chart-wrapper">
                      <canvas id="chartDonut1"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="card widget10">
                <div className="card-body">
                  <div className="text-title fs-12 fw-700 mb-20">
                    <h3>
                      Cantidad de clientes y puntos entregados (o potencial de
                      puntos a entregar) por estado de avance
                    </h3>
                  </div>
                  <div className="row row-md">
                    <div className="col-lg-12 col-md-12">
                      <canvas id="chartJsBar3_2" height="73.6"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-md">
            <div className="col-lg-12 col-md-12">
              <div className="card widget10">
                <div className="card-body">
                  <div className="text-title fs-12 fw-700 mb-20">
                    <h3>Ranking de Categorías</h3>
                  </div>
                  <div className="row row-md">
                    <div className="col-lg-4 col-md-12">
                      <div className="text-title fs-12 fw-700 mb-20">
                        Categorías más logradas (Logrados/Activados)
                      </div>
                      <div className="row row-md">
                        <div
                          className="col-lg-12 col-md-12"
                          style={{ height: "200px", overflowY: "scroll" }}
                        >
                          <canvas id="chartJsBar4" height="300"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="text-title fs-12 fw-700 mb-20">
                        Categorías más activadas (Activados/Asignados)
                      </div>
                      <div className="row row-md">
                        <div
                          className="col-lg-12 col-md-12"
                          style={{ height: "200px", overflowY: "scroll" }}
                        >
                          <canvas id="chartJsBar4_1" height="300"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="text-title fs-12 fw-700 mb-20">
                        Categorías más eliminadas
                      </div>
                      <div className="row row-md">
                        <div
                          className="col-lg-12 col-md-12"
                          style={{ height: "200px", overflowY: "scroll" }}
                        >
                          <canvas id="chartJsBar4_2" height="300"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
