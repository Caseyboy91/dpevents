import Logo from "../../assets/logo/logo4.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg sticky-top border bg-light bg-gradient ">
      <div className="container d-flex">
        <a href="/" className="navbar-brand ">
          <img src={Logo} alt="dp events" className="img-fluid logo border" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item pe-3">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item pe-3">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item pe-3">
              <a href="/weddings&events" className="nav-link">
                Weddings & Events
              </a>
            </li>

            <li className="nav-item pe-3">
              <a href="/gallery" className="nav-link">
                Gallery
              </a>
            </li>
            <li className="nav-item pe-3">
              <a href="/reviews" className="nav-link">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
