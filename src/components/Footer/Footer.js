import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/envelope.svg";

const Footer = () => {
  return (
    <footer className="footer lh-lg sticky-bottom border bg-secondary text-light fw-light bg-gradient">
      <div className="container">
        <div className="row align-itmes-center">
          <div className="col d-flex justify-content-center">
            <span className="pe-3">Diane Pugmire Events</span>
            <a
              href="mailto:diane@hellodpevents.com"
              className="text-decoration-none text-reset pe-3"
            >
              <img src={Email} alt="email" className="pe-2" />
              diane@hellodpevents.com
            </a>
            <a
              href="tel:+12086313650"
              className="text-decoration-none text-reset"
            >
              <img src={Phone} alt="phone number" className="pe-2" />
              208.631.3650
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
