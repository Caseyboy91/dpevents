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
    <section className="container  pb-3">
      <div className="row ">
        <div className="col d-flex flex-column justify-content-center">
          <img
            src={Name}
            alt="Diane Pugmire Events"
            className="img-fluid w-75 mx-auto"
          />
        </div>
        <hr />
      </div>
      <div className="row home-text">
        <div className="col d-flex flex-column justify-content-center py-5 ">
          <p className="lead fw-light fst-italic lh-lg fs-5 pb-3 w-75 mx-auto">
            At Diane Pugmire Events, we strive to create a guest experience that
            embodies a multitude of adjectives - from fun and energetic to
            classic and romantic. Our team of dedicated wedding and event
            planners are detail-oriented, committed to working within your
            budget, and known for their honesty and reliability, as attested to
            by our vendors and clients alike.
          </p>
          <p className="lead fw-light fst-italic lh-lg fs-5 w-75 mx-auto">
            We believe that your wedding or event should reflect your unique
            personality and style, and that's why we take the time to get to
            know you and understand your desires from start to finish. Whether
            you're based in Idaho, or on the coast, we've had the pleasure of
            working with satisfied clients all over the country. Choose Diane
            Pugmire Events for an unforgettable and personalized event planning
            experience.
          </p>
        </div>
      </div>
      <hr />
      <div className="row py-5">
        <div className="col-6 d-flex justify-content-center align-items-center position-relative">
          <img
            src={Img1}
            alt="table setting"
            className="position-relative img-fluid shadow-lg rounded"
          />
          <a href="/weddings&events">
            <button
              className="btn btn-dark btn-lg position-absolute top-50 start-50 translate-middle"
              type="button"
            >
              Weddings
            </button>
          </a>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center position-relative">
          <img
            src={Img2}
            alt="table setting"
            className="position-relative img-fluid shadow-lg rounded"
          />
          <HashLink smooth to="/weddings&events#events">
            <button
              className="btn btn-dark btn-lg position-absolute top-50 start-50 translate-middle"
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
