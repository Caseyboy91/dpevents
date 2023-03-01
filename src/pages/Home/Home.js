import "./Home.css";
import Name from "../../assets/logo/name.png";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";

const Home = () => {
  return (
    <section className="container min-vh-100 pb-3">
      <div className="row ">
        <div className="col d-flex justify-content-center">
          <img src={Name} alt="Diane Pugmire Events" className="img-fluid" />
        </div>
      </div>
      <div className="row ">
        <div className="col-6 d-flex justify-content-center align-items-center position-relative">
          <img
            src={Img1}
            alt="table setting"
            className="position-relative img-fluid"
          />
          <a href="/events">
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
            className="position-relative img-fluid"
          />
          <a href="/events">
            <button
              className="btn btn-dark btn-lg position-absolute top-50 start-50 translate-middle"
              type="button"
            >
              Events
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
