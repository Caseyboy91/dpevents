import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/envelope.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Pinterest from "../../assets/icons/pinterest.svg";

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
              <a href="https://www.instagram.com/_dpevents_/">
                <img src={Instagram} className="pe-2" alt="instagram" />
              </a>
              <a href="https://www.pinterest.com/DianePugmire_1/">
                <img src={Pinterest} alt="pinterest" />
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
