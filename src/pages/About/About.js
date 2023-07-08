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
            Hailing from the vibrant city of Las Vegas, Nevada, my heart has
            always had a special place for Idaho, where I've cherished most of
            life's moments. I consider myself incredibly fortunate to have a
            delightful family, including amazing children and grandchildren who
            hold an indispensable role in my life.
            <br />
            <br />
            One of the most memorable chapters in my career within the event
            industry was the privilege of collaborating with the esteemed
            Preston Bailey and David Tutera. I had the opportunity to work as a
            Coordinator for Interns at their remarkable "Your Wedding
            Experience" wedding show, held in Philadelphia, PA, and Fort
            Lauderdale, FL.
            <br />
            <br />
            As an event planner, my utmost passion lies in bringing my clients'
            visions to life, and nothing brings me greater joy than sharing my
            creativity to bring smiles to people's faces. I am eagerly looking
            forward to meeting you and embarking on an exciting and
            collaborative journey together!
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
