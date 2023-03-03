import "./Weddings.css";
import Wedding from "../../assets/images/wedding.jpeg";
import Wedding2 from "../../assets/images/wedding2.jpg";
import Wedding3 from "../../assets/images/wedding3.jpg";

const Weddings = () => {
  return (
    <section className="weddings container min-vh-100 py-3">
      <div className="row w-md-75 mx-md-auto d-flex flex-column align-items-center">
        <div className="col d-flex flex-column align-items-center">
          <p className="lead fs-1 text-uppercase fw-lighter">weddings</p>
        </div>
        <hr />
      </div>
      {/* Day Of */}
      <div className="row d-flex flex-column flex-lg-row justify-content-center align-items-center py-3 ">
        <div className="col-8 col-md-6 col-lg-4">
          <figure className="figure text-center">
            <img
              className="img-fluid rounded shadow-lg"
              src={Wedding}
              alt="wedding"
            />
            <figcaption className="figure-caption pt-3">- Wedding -</figcaption>
          </figure>
        </div>
        <div className="col">
          <p className="fs-2 fw-lighter text-center mb-0">
            Wedding Management{" "}
          </p>
          <span className="fw-lighter fst-italic d-flex justify-content-center mb-2">
            (Was our "Day of")
          </span>
          <p className="fs-5 fw-light text-center ">
            $1,499 <span className="fs-6 fst-italic">+ tax</span>
          </p>

          <ul>
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
              not offer Decor services.
            </li>
          </ul>
          <p className="fw-light text-center fst-italic">
            (If Travel is required, reasonable travel costs for 2 nights will be
            added to contract at time of signing.)
          </p>
        </div>
      </div>
      <hr />

      {/* Partial */}
      <div className="row d-flex flex-column flex-lg-row-reverse justify-content-center align-items-center py-3 ">
        <div className="col-8 col-md-6 col-lg-4">
          <figure className="figure text-center">
            <img
              className="img-fluid rounded shadow-lg"
              src={Wedding2}
              alt="wedding"
            />
            <figcaption className="figure-caption pt-3">- Wedding -</figcaption>
          </figure>
        </div>
        <div className="col">
          <p className="fs-2 fw-lighter text-center">Partial Planning</p>
          <p className="fs-5 fw-light text-center ">
            $2,699 <span className="fs-6 fst-italic">+ tax</span>
          </p>

          <ul>
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
              not offer Decor services.
            </li>
          </ul>
          <p className="fw-light text-center fst-italic">
            (If Travel is required, reasonable travel costs for 2 nights will be
            added to contract at time of signing.)
          </p>
        </div>
      </div>
      <hr />

      {/* Full Service */}
      <div className="row d-flex flex-column flex-lg-row justify-content-center align-items-center py-3 ">
        <div className="col-8 col-md-6 col-lg-4">
          <figure className="figure text-center">
            <img
              className="img-fluid rounded shadow-lg"
              src={Wedding3}
              alt="wedding"
            />
            <figcaption className="figure-caption pt-3">- Wedding -</figcaption>
          </figure>
        </div>
        <div className="col">
          <p className="fs-2 fw-lighter text-center">Full Planning</p>
          <p className="fs-5 fw-light text-center ">
            $4,499 <span className="fs-6 fst-italic">+ tax</span>
          </p>

          <ul>
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
              not offer Decor services.
            </li>
          </ul>
          <p className="fw-light text-center fst-italic">
            (If Travel is required, reasonable travel costs for 2 nights will be
            added to contract at time of signing.)
          </p>
        </div>
      </div>
      <hr />

      {/* Other */}
      <div className="row">
        <div className="col extras text-center">
          <span className="fs-3 fw-lighter">Decor Rentals: </span>
          <p className="lead fs-6">
            Pricing available once design is complete.
          </p>
          <span className="fs-3 fw-lighter">
            Set up and take down of our rentals or your decore:{" "}
          </span>
          <p className="lead fs-6">Begins at $800</p>
          <span className="fs-3 fw-lighter">Extra help: </span>
          <p className="lead fs-6">
            (Bus tables, refill beverages and cocktail hour snacks, dump trash):
            $25 per hour, per helper
          </p>
        </div>
      </div>
    </section>
  );
};

export default Weddings;
