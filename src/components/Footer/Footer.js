import Logo2 from "../../assets/logo/logo4.png";
import Phone from "../../assets/icons/phone-fill.svg";
import Email from "../../assets/icons/envelope-fill.svg";

import Pinterest from "../../assets/icons/pinterest.svg";
import WeddingwireLogo from "../../assets/icons/weddingwire.png";
import Knot from "../../assets/icons/theknot.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer sticky-bottom border bg-secondary-subtle bg-gradient">
      <div className="container py-2">
        <div className="row align-itmes-center">
          <div className="col d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column align-items-start ms-2">
              <a
                href="tel:+12086313650"
                className="text-decoration-none text-reset"
              >
                <img src={Phone} alt="phone number" className=" pe-2" />
                <span className="d-none d-md-inline">208.631.3650</span>
              </a>
              <a
                href="mailto:diane@hellodpevents.com"
                className="text-decoration-none text-reset"
              >
                <img src={Email} alt="email" className="pe-2 " />
                <span className="d-none d-md-inline">
                  diane@hellodpevents.com
                </span>
              </a>
            </div>

            <div className="d-flex bg-light">
              <a href="/">
                <img
                  src={Logo2}
                  alt="dp events"
                  className="dpeventsLogo border"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
