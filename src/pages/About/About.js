import { useEffect } from "react";
import Diane from "../../assets/images/diane.jpg";

const About = () => {
  useEffect(() => {
    document.title = "DP Events | About";
  });
  return (
    <section className="container min-vh-100 py-3 ">
      <div className="row w-md-75 mx-md-auto d-flex flex-column align-items-center">
        <div className="col">
          <p className="lead fs-1 text-uppercase fw-lighter">about</p>
        </div>
        <hr />
      </div>
      {/* Diane */}
      <div className="row align-items-center w-md-75 mx-md-auto pt-4">
        <div className="col-12 d-flex justify-content-center col-lg-4">
          <figure className="figure text-center">
            <img
              src={Diane}
              alt="Diane Pugmire"
              className="figure-img img-fluid rounded shadow-lg"
            />
          </figure>
        </div>
        <div className="col-lg-8">
          <p className="lead fw-light fs-1 ">
            Hi, I'm Diane!
            <hr className="w-50" />
          </p>
          <p className=" fs-5 fw-light fst-italic ">
            Born in the vibrant city of Las Vegas, Nevada, my heart has always
            been in Idaho where I have spent most of my life. I am beyond
            blessed with a wonderful family that includes amazing children and
            grandchildren who are an integral part of my life.
            <br />
            <br />
            One of the highlights of my career in the event industry was the
            opportunity to work alongside the legendary Preston Bailey and David
            Tutera as a Coordinator for Interns at their "Your Wedding
            Experience" wedding show in Philadelphia, PA and Fort Lauderdale,
            FL.
            <br />
            <br />
            As an event planner, I am passionate about bringing my client's
            visions to life and sharing my creativity to make people smile. I
            can't wait to meet with you and embark on a creative journey
            together!
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
