import Diane from "../../assets/images/diane.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about container min-vh-100 py-3 ">
      <div className="row w-md-75 mx-md-auto d-flex flex-column align-items-center">
        <div className="col d-flex flex-column align-items-center ">
          <p className="lead fs-1 text-uppercase fw-lighter">about</p>
        </div>
        <hr></hr>
      </div>
      {/* Diane */}
      <div className="row align-items-center w-md-75 mx-md-auto">
        <div className="col-12 d-flex justify-content-center col-md-4">
          <figure className="figure text-center">
            <img
              src={Diane}
              alt="Diane Pugmire"
              className="figure-img img-fluid rounded shadow-lg"
            />
            <figcaption className="figure-caption pt-3">
              - Diane Pugmire -
            </figcaption>
          </figure>
        </div>
        <div className="col text-center ">
          <p className="lead fs-2">Hi, I'm Diane!</p>
          <p className="lead fs-6 fst-italic">
            Born and raised in the vibrant city of Las Vegas, Nevada, my heart
            has always been in Idaho where I have spent most of my life. I am
            beyond blessed with a wonderful family that includes amazing
            children and grandchildren who are an integral part of my life.
          </p>

          <p className="lead fs-6 fst-italic">
            One of the highlights of my career in the event industry was the
            opportunity to work alongside the legendary Preston Bailey and David
            Tutera as a Coordinator for Interns at their "Your Wedding
            Experience" wedding show in Philadelphia, PA and Fort Lauderdale,
            FL.
          </p>
          <p className="lead fs-6 fst-italic">
            As an event planner, I am passionate about bringing my client's
            visions to life and sharing my creativity to make people smile. I
            can't wait to meet with you and embark on a creative journey
            together!
          </p>
        </div>

        <hr />
      </div>
    </section>
  );
};

export default About;
