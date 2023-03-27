import Logo2 from "../../assets/logo/logo2.png";
import Phone from "../../assets/icons/phone-fill.svg";
import Email from "../../assets/icons/envelope-fill.svg";

import Pinterest from "../../assets/icons/pinterest.svg";
import WeddingwireLogo from "../../assets/icons/weddingwire.png";
import Knot from "../../assets/icons/theknot.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer sticky-bottom border bg-secondary-subtle  fw-light bg-gradient">
      <div className="container py-2">
        <div className="row align-itmes-center">
          <div className="col d-flex justify-content-between align-items-center">
            <div className="pe-2 d-flex me-2">
              <a href="/">
                <img src={Logo2} alt="dp events" className="dpeventsLogo" />
              </a>
              {/* <div className="d-flex align-items-center flex-md-column justify-content-center">
                <div>
                  <a
                    href="https://www.instagram.com/_dpevents_/"
                    target={"_blank"}
                    rel={"noreferrer"}
                    className="px-2 text-reset text-decoration-none"
                  >
                    <img src={Instagram} alt="instagram" />
                  </a>
                  <a
                    href="https://www.pinterest.com/DianePugmire_1/"
                    target={"_blank"}
                    rel={"noreferrer"}
                    className="px-2 text-reset text-decoration-none"
                  >
                    <img src={Pinterest} alt="pinterest" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.weddingwire.com/biz/diane-pugmire-events/2cdb7dc5f7d55992.html"
                    target={"_blank"}
                    rel={"noreferrer"}
                    className="px-1 text-reset text-decoration-none"
                  >
                    <img
                      src={WeddingwireLogo}
                      className="weddingwireLogo me-1"
                      alt="wedding wire"
                    />
                  </a>
                  <a
                    href="https://www.theknot.com/marketplace/diane-pugmire-events-burley-id-339793"
                    target={"_blank"}
                    rel={"noreferrer"}
                    className="px-1 text-reset text-decoration-none"
                  >
                    <img
                      src={Knot}
                      className="weddingwireLogo "
                      alt="the knot"
                    />
                  </a>
                </div>
              </div> */}
            </div>
            <div className="d-flex text-center align-items-center justify-content-center mx-2">
              <a
                href="https://www.caseyrdavis.com"
                target={"_blank"}
                rel={"noreferrer"}
                className="text-reset text-decoration-none "
              >
                <p className="fw-lighter">
                  Designed by CR Software Engineering
                </p>
              </a>
            </div>
            <div className="d-flex flex-column align-items-end ms-2">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
