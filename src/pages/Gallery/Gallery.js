import { useEffect } from "react";
import Instagram from "../../assets/icons/instagram.svg";
import Pinterest from "../../assets/icons/pinterest.svg";
import WeddingWire from "../../assets/icons/weddingwire.png";
import Knot from "../../assets/icons/theknot.png";
import "./Gallery.css";
import Carousel from "../../components/Carousel/Carousel";

const Gallery = () => {
  useEffect(() => {
    document.title = "DP Events | Gallery";
  });
  return (
    <section className="container min-vh-100 py-3">
      <div className="row w-md-75 mx-md-auto d-flex flex-column align-items-center">
        <div className="col">
          <p className="lead  fs-1 text-uppercase fw-lighter">gallery</p>
        </div>
        <hr />
      </div>
      <div className="row w-md-75 mx-md-auto py-3">
        <div class="col">
          <div
            id="slides-with-controls"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner shadow carousel" id="1">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid w-50 mx-auto"
                  src="https://i.imgur.com/wLdTLqW.jpg"
                  alt="candle setting"
                />
              </div>
              <Carousel />
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
      <div className="row d-flex justify-content-between py-3">
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-center social">
            <a
              href="https://www.instagram.com/_dpevents_/"
              target={"_blank"}
              rel={"noreferrer"}
              className="text-reset  mb-3"
            >
              <img className="img-fluid " src={Instagram} alt="instagram" />
              <span className="lead ms-2 fs-5 fst-italic fw-light">
                Check us out on Instagram
              </span>
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-center social">
            <a
              href="https://www.pinterest.com/DianePugmire_1/"
              className="text-reset mb-3"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img className="img-fluid" src={Pinterest} alt="pinterest" />
              <span className="lead ms-2 fs-5 fst-italic fw-light">
                Check us out on Pinterest
              </span>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-center social">
            <a
              href="https://www.weddingwire.com/biz/diane-pugmire-events/2cdb7dc5f7d55992.html"
              className="text-reset mb-3"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img
                className="img-fluid weddingwire"
                src={WeddingWire}
                alt="wedding wire"
              />
              <span className="lead ms-2 fs-5 fst-italic fw-light">
                Check us out on Wedding Wire
              </span>
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-center social">
            <a
              href="https://www.theknot.com/marketplace/diane-pugmire-events-burley-id-339793"
              className="text-reset mb-3"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img className="img-fluid theknot" src={Knot} alt="the knot" />
              <span className="lead ms-2 fs-5 fst-italic fw-light">
                Check us out on The Knot
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
