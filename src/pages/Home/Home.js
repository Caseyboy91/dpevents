import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import "./Home.css";
import Name from "../../assets/logo/logo4.png";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";

const Home = () => {
  useEffect(() => {
    document.title = "DP Events | Home";
  });
  return (
    <section className="container pb-3">
      <div className="row hero py-5">
        <div className="col d-flex flex-column justify-content-center">
          <img
            src={Name}
            alt="Diane Pugmire Events"
            className="img-fluid dpLogo"
          />
        </div>
      </div>
      <hr />
      <div className="row home-text">
        <div className="col d-flex flex-column justify-content-center py-5 ">
          <p className="lead fw-light fst-italic lh-lg fs-5 pb-3 w-75 mx-auto">
            "At Diane Pugmire Events, our mission is to craft a guest experience
            that encompasses a diverse range of qualities - from joyful and
            lively to timeless and enchanting. We pride ourselves on meticulous
            attention to detail, unwavering commitment to working within your
            budget, and reputation for honesty and dependability, as endorsed by
            both vendors and clients alike.
            <br />
            <br />
            We firmly believe that your wedding or event should be a true
            reflection of your individuality and taste. That's why we invest the
            time to truly get to know you and understand your desires from
            beginning to end. Whether you reside in the beautiful state of Idaho
            or reside by the coast, we have had the pleasure of serving
            delighted clients all across the nation. Opt for Diane Pugmire
            Events for an unforgettable and personalized event planning
            experience that will leave a lasting impression."
          </p>
          <p className="fw-bold fst-italic fs-6 pe-5 d-flex justify-content-end">
            ~ Diane Pugmire
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6 d-flex py-3 justify-content-center align-items-center position-relative">
          <img
            src={Img1}
            alt="table setting"
            className="position-relative img-fluid shadow-lg rounded"
          />
          <a href="/weddings&events">
            <button
              className="btn btn-dark btn-lg py-3 px-md-5 position-absolute top-50 start-50 translate-middle"
              type="button"
            >
              Weddings
            </button>
          </a>
        </div>
        <div className="col-md-6 d-flex py-3 justify-content-center align-items-center position-relative">
          <img
            src={Img2}
            alt="table setting"
            className="position-relative img-fluid shadow-lg rounded"
          />
          <HashLink to="/weddings&events#events">
            <button
              className="btn btn-dark btn-lg py-3 px-md-5 position-absolute top-50 start-50 translate-middle"
              type="button"
            >
              Events
            </button>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
