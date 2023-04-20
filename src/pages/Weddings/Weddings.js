import { useEffect } from "react";
import "./Weddings.css";
import Wedding from "../../assets/images/wedding.jpeg";
import Wedding2 from "../../assets/images/wedding2.jpg";
import Wedding3 from "../../assets/images/wedding3.png";
import Events from "../../assets/images/events.png";

const Weddings = () => {
  useEffect(() => {
    document.title = "DP Events | Wedding & Events";
  });
  return (
    <section className="weddings container py-3">
      <div className="row w-md-75 mx-md-auto d-flex flex-column align-items-center">
        <div className="col">
          <p className="lead d-flex align-items-center fs-1 text-uppercase fw-lighter">
            weddings <span className="fs-4 px-2">-&-</span> events
          </p>
        </div>
        <hr />
      </div>

      {/* Day Of */}
      <div className="row d-flex flex-column flex-lg-row justify-content-center align-items-center py-3 ">
        <div className="col-8 col-md-6 col-lg-4" id="weddingManagement">
          <figure className="figure">
            <img
              className="img-fluid rounded shadow-lg"
              src={Wedding}
              alt="wedding"
            />
          </figure>
        </div>
        <div className="col">
          <p className="fs-1 fw-bold text-center mb-0">Wedding Management </p>
          <p className="fw-light fst-italic text-center mb-2">
            (Was our "Day of")
          </p>
          <a href="/contact" className="text-reset ">
            <p className="fs-6 fst-italic fw-light text-center">
              Contact us to get a quote
            </p>
          </a>

          <ul className="lh-lg">
            <li className="lead fs-6">
              Free 1 hour consultation to gather wedding day vision and
              expectations.
            </li>
            <li className="lead fs-6">
              1 meeting; 2 weeks before the wedding; to review all vendor
              contracts and finalize details.
            </li>
            <li className="lead fs-6">
              Email and phone calls to be returned within 24 business hours.
            </li>
            <li className="lead fs-6">
              Customized 12 month planner, with your contracted vendors.
            </li>
            <li className="lead fs-6">
              Create a "day of" itinerary to be sent to all vendors 1 week
              before wedding.
            </li>
            <li className="lead fs-6">1 hour for ceremony rehearsal</li>
            <li className="lead fs-6">
              1 Coordinator on-site for <span>up to</span> 8 hours on your
              wedding day.
            </li>
            <li className="lead fs-6">
              Point of contact for all vendors and bridal party on your wedding
              day.
            </li>
            <li className="lead fs-6">
              On wedding day, coordinate all small details including some
              personal items and gifts to allow you and family to relax and
              enjoy the celebration. <span>note:</span> If more help is needed,
              such as placing linens, centerpieces, place setting, etc., we do
              offer Decor services.
            </li>
          </ul>
          <p className="fw-bold text-center fst-italic">
            (If Travel is required, travel costs for 2 nights will be added to
            contract at time of signing.)
          </p>
        </div>
      </div>
      <hr />

      {/* Partial */}
      <div className="row row d-flex flex-column flex-lg-row justify-content-center align-items-center py-3 flex-lg-row-reverse ">
        <div className="col-8 col-md-6 col-lg-4" id="partialPlanning">
          <figure className="figure">
            <img
              className="img-fluid rounded shadow-lg"
              src={Wedding2}
              alt="wedding"
            />
          </figure>
        </div>
        <div className="col">
          <p className="fs-1 fw-bold text-center mb-0">Partial Planning</p>
          <a href="/contact" className="text-reset ">
            <p className="fs-6 fst-italic fw-light text-center">
              Contact us to get a quote
            </p>
          </a>

          <ul className="lh-lg">
            <li className="lead fs-6">
              3 (1 hour) meeting to review all contracts and details.
            </li>
            <li className="lead fs-6">
              Assist in the planning of your wedding and reception - on-going
              consultation.
            </li>
            <li className="lead fs-6">
              Provide advice on etiquette and protocol.
            </li>
            <li className="lead fs-6">
              Decor suggestions; including color scheme and style.
            </li>
            <li className="lead fs-6">
              Provide vendor list for those still needed, for bride to schedule
              appointments.
            </li>
            <li className="lead fs-6">
              Email and phone calls to be returned withing 24 business hours.
            </li>
            <li className="lead fs-6">
              Customized 12 month planner, with your contracted vendors.
            </li>
            <li className="lead fs-6">
              Create a "day of" itinerary to be sent to all vendors, 1 week
              before wedding.
            </li>
            <li className="lead fs-6">
              Create a customized budget to be sent to all vendors, 1 week
              before weeding.
            </li>
            <li className="lead fs-6">1 pre-wedding site visit</li>
            <li className="lead fs-6">
              1 final meeting; 1 week before the wedding to include items to be
              set up on the wedding day (ex: photographs, guest book, programs,
              seating cards, table numbers, etc.).
            </li>
            <li className="lead fs-6">1 hour for ceremony rehearsal.</li>
            <li className="lead fs-6">
              1 Coordinator on-site for <span>up to</span> 8 hours on your
              wedding day.
            </li>
            <li className="lead fs-6">
              On wedding day, coordinate all small details including some
              personal items and gifts to allow you and family to relax and
              enjoy the celebration. <span>note:</span> If more help is needed,
              such as placing linens, centerpieces, place setting, etc., we do
              offer Decor services.
            </li>
          </ul>
          <p className="fw-bold text-center fst-italic">
            (If Travel is required, travel costs for 2 nights will be added to
            contract at time of signing.)
          </p>
        </div>
      </div>
      <hr />

      {/* Full Service */}
      <div className="row d-flex flex-column flex-lg-row justify-content-center align-items-center py-3 ">
        <div className="col-8 col-md-6 col-lg-4" id="fullPlanning">
          <figure className="figure">
            <img
              className="img-fluid rounded shadow-lg"
              src={Wedding3}
              alt="wedding"
            />
          </figure>
        </div>
        <div className="col">
          <p className="fs-1 fw-bold text-center mb-0">Full Planning</p>
          <a href="/contact" className="text-reset ">
            <p className="fs-6 fst-italic fw-light text-center ">
              Contact us to get a quote
            </p>
          </a>

          <ul className="lh-lg">
            <li className="lead fs-6">
              Meetings every 3 months to review all contracts, vendors, and
              details.
            </li>
            <li className="lead fs-6">
              Assist in the planning of your wedding and reception - on-going
              consultation.
            </li>
            <li className="lead fs-6">
              Provide advice on etiquette and protocol.
            </li>
            <li className="lead fs-6">
              Research, schedule and attend vendor appointments with you or for
              you.
            </li>
            <li className="lead fs-6">
              Complete wedding and reception decor design (Color scheme, style,
              and layout).
            </li>
            <li className="lead fs-6">
              Email and phone calls to be returned withing 24 business hours.
            </li>
            <li className="lead fs-6">Create and maintain 12 month planner.</li>
            <li className="lead fs-6">
              Create a "day of" itinerary to be sent to all vendors, 1 week
              before wedding.
            </li>
            <li className="lead fs-6">
              Create a customized budget to be sent to all vendors, 1 week
              before weeding.
            </li>
            <li className="lead fs-6">1 pre-wedding site visit</li>
            <li className="lead fs-6">
              1 final meeting; 1 week before the wedding to include items to be
              set up on the wedding day (ex: photographs, guest book, programs,
              seating cards, table numbers, etc.).
            </li>
            <li className="lead fs-6">1 hour for ceremony rehearsal.</li>
            <li className="lead fs-6">
              1 Coordinator on-site for <span>up to</span> 8 hours on your
              wedding day.
            </li>
            <li className="lead fs-6">
              Point of contact for all vendors and bridal party on your wedding
              day.
            </li>
            <li className="lead fs-6">
              On wedding day, coordinate all small details including some
              personal items and gifts to allow you and family to relax and
              enjoy the celebration. <span>note:</span> If more help is needed,
              such as placing linens, centerpieces, place setting, etc., we do
              offer Decor services.
            </li>
          </ul>
          <p className="fw-bold text-center fst-italic">
            (If Travel is required, travel costs for 2 nights will be added to
            contract at time of signing.)
          </p>
        </div>
      </div>
      <hr />

      {/* events */}
      <div
        className="row d-flex flex-lg-row-reverse flex-column justify-content-center align-items-center py-3 "
        id="events"
      >
        <div className="col-8 col-md-6 col-lg-4">
          <figure className="figure">
            <img
              className="img-fluid rounded shadow-lg"
              src={Events}
              alt="wedding"
            />
          </figure>
        </div>
        <div className="col">
          <p className="fs-1 fw-bold mb-0 d-flex align-items-center justify-content-center">
            Events
            <span className="fs-4 px-2">-&-</span>
            Corporate Parties
          </p>
          <a href="/contact" className="text-reset ">
            <p className="fs-6 fst-italic fw-light text-center">
              Contact us to get a quote
            </p>
          </a>
          <p className="lead fs-6 ">
            Diane Pugmire Events understands the importance of...
          </p>
          <ul className="lh-lg">
            <li className="lead fs-6">Venue selection</li>
            <li className="lead fs-6">Entertainment</li>
            <li className="lead fs-6">Audio and video</li>
            <li className="lead fs-6">Catering</li>
            <li className="lead fs-6">Financial budget</li>
            <li className="lead fs-6">
              Handle ALL logistics with the event planning for optimum results.
            </li>
          </ul>
          <p className=" fs-6">
            Once we are finished working alongside you to create the event's
            flow, layout, and activities, we handle everything associated with
            the event planning for optimum results.
          </p>
          <p className=" fs-6 ">
            Our scope of services range from executing on the program topics
            designed to resonate with your audience, and developing the schedule
            for presenters, decorators, and catering staff.{" "}
          </p>
          <p className="fw-bold text-center fst-italic">
            (If Travel is required, travel costs for 2 nights will be added to
            contract at time of signing.)
          </p>
        </div>
      </div>
      <hr />

      {/* Other */}
      <div className="row">
        <div className="col extras text-center py-3" id="decor">
          <span className="fs-2 fw-bold">Decor Rentals: </span>
          <p className="fs-6 fst-italic fw-light">
            Pricing available once design is complete.
          </p>

          <span className="fs-2 fw-bold">Extra help: </span>
          <p className="fs-6 fst-italic fw-light">
            (Bus tables, refill beverages and cocktail hour snacks, dump trash):
            $25 per hour, per helper
          </p>

          <span className="fs-2 fw-bold">
            Set up and take down of our rentals or your decor:{" "}
          </span>
          <p className="fs-6 fst-italic fw-light">Begins at $800</p>
        </div>
      </div>
    </section>
  );
};

export default Weddings;
