import { useEffect } from "react";
import Instagram from "../../assets/icons/instagram.svg";
import Pinterest from "../../assets/icons/pinterest.svg";
import WeddingWire from "../../assets/icons/weddingwire.png";
import Knot from "../../assets/icons/theknot.png";
import "./Gallery.css";
import Carousel from "../../components/Carousel/Carousel";
import Video from "../../assets/videos/Misty-Richard.mp4";

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
      <p className="fs-2">Video</p>
      <div className="w-75 mx-auto my-3">
        <p className="fs-3 fw-lighter">Misty & Richard 2023</p>
        <video controls width="100%">
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <hr />
      <p className="fs-2">Images</p>
      <div className="row d-flex justify-content-center align-items-center">
        <Carousel />
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
