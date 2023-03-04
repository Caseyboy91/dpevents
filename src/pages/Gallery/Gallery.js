import { useEffect } from "react";
import Pinterest from "../../assets/icons/pinterest.svg";

const Gallery = () => {
  useEffect(() => {
    document.title = "DP Events | Gallery";
  });
  return (
    <section className="container min-vh-100 py-3">
      <div className="row w-md-75 mx-md-auto">
        <div className="col d-flex flex-column align-items-center">
          <p className="lead fs-1 text-uppercase fw-lighter mb-0">gallery</p>
        </div>
        <hr />
      </div>
      <div className="row w-md-75 mx-md-auto">
        <div class="col">
          <div
            id="slides-with-controls"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner bg-secondary">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid w-25 mx-auto"
                  src="https://i.pinimg.com/564x/e4/f7/0c/e4f70c00d8f85609485877cabfca4d56.jpg"
                  alt="table setting"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-50 mx-auto"
                  src="https://i.pinimg.com/originals/f8/d3/61/f8d36127b03a4df2b7946de612167125.jpg"
                  alt="guest seating outside"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-25 mx-auto"
                  src="https://i.pinimg.com/564x/3e/2d/38/3e2d3864a74fa05cebee53c7a116de34.jpg"
                  alt="table setting"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-25 mx-auto"
                  src="https://i.pinimg.com/564x/b4/f9/4b/b4f94bcbe7598f1fc570999c2e69b294.jpg"
                  alt="centerpiece"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-50 mx-auto"
                  src="https://i.pinimg.com/564x/59/17/bd/5917bdcf5ece7d615c74f2e5ba363669.jpg"
                  alt="chandelier"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-25 mx-auto"
                  src="https://i.pinimg.com/564x/d7/62/28/d762281adaaed811103d5fa14f1cfb24.jpg"
                  alt="christmas setting"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-50 mx-auto"
                  src="https://i.pinimg.com/564x/8b/f1/27/8bf1270ffdbf0011d9090fc926055468.jpg"
                  alt="table setting"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-50 mx-auto"
                  src="https://i.pinimg.com/564x/11/35/37/113537c49970070ae417ff0809de2ac5.jpg"
                  alt="guest seating"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-25 mx-auto"
                  src="https://i.pinimg.com/564x/39/e9/c3/39e9c3d9adf31d7f57d9d79b80ca08bc.jpg"
                  alt="cake table"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-50 mx-auto"
                  src="https://i.pinimg.com/originals/ad/68/a7/ad68a7877273f1ff88274380c8d5ca29.jpg"
                  alt="venue"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-50 mx-auto"
                  src="https://i.pinimg.com/564x/61/2b/23/612b23ec0b3ca6446b0b0ab290ef4c94.jpg"
                  alt="ceremony"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block img-fluid w-50 mx-auto"
                  src="https://i.pinimg.com/originals/3c/3a/8f/3c3a8f2338bfe5d434023c83be8c6177.jpg"
                  alt="venue"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#slides-with-controls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#slides-with-controls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-center">
        <a
          href="https://www.pinterest.com/DianePugmire_1/"
          className="text-decoration-none text-reset mb-3"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img className="img-fluid" src={Pinterest} alt="pinterest" />
          <span className="lead ms-2 fs-5 fst-italic fw-light">
            Check us out on Pinterest
          </span>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
