import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/envelope.svg";

const Footer = () => {
  return (
    <footer className="footer lh-lg sticky-bottom border bg-secondary-subtle  fw-light bg-gradient">
      <div className="container">
        <div className="row align-itmes-center w-75 mx-auto">
          <div className="col d-flex justify-content-between">
            <span className="pe-3">DP Events</span>
            <a
              href="mailto:diane@hellodpevents.com"
              className="text-decoration-none text-reset pe-3"
            >
              <img
                src={Email}
                alt="email"
                className="pe-2 d-md-none d-lg-inline"
              />
              <span className="d-none d-md-inline">
                diane@hellodpevents.com
              </span>
            </a>
            <a
              href="tel:+12086313650"
              className="text-decoration-none text-reset"
            >
              <img
                src={Phone}
                alt="phone number"
                className="pe-2 d-md-none d-lg-inline"
              />
              <span className="d-none d-md-inline">208.631.3650</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
