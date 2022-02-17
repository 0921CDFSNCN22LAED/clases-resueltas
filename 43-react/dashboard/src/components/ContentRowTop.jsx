import ContentRowMovies from "./ContentRowMovies";

const movieMetrics = [
  {
    title: "Movies in Data Base",
    value: 21,
    color: "primary",
    icon: "fa-film",
  },
  {
    title: "Movies in Data Base",
    value: 21,
    color: "primary",
    icon: "fa-film",
  },
  {
    title: "Movies in Data Base",
    value: 21,
    color: "primary",
    icon: "fa-film",
  },
];

export default function ContentRowTop() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {/* <!-- Content Row Movies--> */}
      <div className="row">
        {/* <!-- Movies in Data Base --> */}
        {movieMetrics.map((movieMetric) => {
          return (
            <ContentRowMovies title={movieMetric.title}></ContentRowMovies>
          );
        })}
      </div>
      {/* <!-- End movies in Data Base --> */}

      {/* <!-- Content Row Last Movie in Data Base --> */}
      <div className="row">
        {/* <!-- Last Movie in DB --> */}
        <div className="col-lg-6 mb-4">
          <div className="card mb-4 shadow">
            <div className="card-header py-3">
              <h5 className="font-weight-bold m-0 text-gray-800">
                Last movie in Data Base
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-sm-4 mt-3 mb-4 px-3"
                  style={{ width: "40em" }}
                  src="assets/images/mandalorian.jpg"
                  alt=" Star Wars - Mandalorian "
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, consequatur explicabo officia inventore libero
                veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                voluptatum non corporis quae dolorem culpa citationem ratione
                aperiam voluptatum non corporis ratione aperiam voluptatum quae
                dolorem culpa ratione aperiam voluptatum?
              </p>
              <a
                className="btn btn-danger"
                target="_blank"
                rel="nofollow"
                href="/"
              >
                View movie detail
              </a>
            </div>
          </div>
        </div>
        {/* <!-- End content row last movie in Data Base --> */}

        {/* <!-- Genres in DB --> */}
        <div className="col-lg-6 mb-4">
          <div className="card mb-4 shadow">
            <div className="card-header py-3">
              <h5 className="font-weight-bold m-0 text-gray-800">
                Genres in Data Base
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Acción</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Animación</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Aventura</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Ciencia Ficción</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Comedia</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Documental</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Drama</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Fantasia</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Infantiles</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Musical</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
