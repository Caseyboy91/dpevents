import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/envelope.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Pinterest from "../../assets/icons/pinterest.svg";
import WeddingwireLogo from "../../assets/icons/weddingwireLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer lh-lg sticky-bottom border bg-secondary-subtle  fw-light bg-gradient">
      <div className="container">
        <div className="row align-itmes-center">
          <div className="col d-flex justify-content-between">
            <div className="pe-2">
              <a href="/" className="text-reset text-decoration-none">
                <span className="pe-2 ">DP Events</span>
              </a>
              <a
                href="https://www.instagram.com/_dpevents_/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img src={Instagram} className="pe-2" alt="instagram" />
              </a>
              <a
                href="https://www.pinterest.com/DianePugmire_1/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img src={Pinterest} alt="pinterest" className="pe-2" />
              </a>
              <a
                href="https://www.weddingwire.com/biz/diane-pugmire-events/2cdb7dc5f7d55992.html"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img

                  src={WeddingwireLogo}
                  className="weddingwireLogo"

                  alt="wedding wire"
                />
              </a>
            </div>
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
