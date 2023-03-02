import Wedding from "../../assets/images/wedding.jpeg";

const Events = () => {
  return (
    <section className="container min-vh-100 py-3">
      <div className="row w-md-75 mx-md-auto">
        <div className="col d-flex flex-column align-items-center">
          <p className="lead fs-1 text-uppercase fw-lighter">weddings</p>
        </div>
        <hr />
      </div>

      <div className="row align-items-center ">
        <div className="col-5">
          <img className="img-fluid" src={Wedding} alt="wedding" />
        </div>
        <div className="col-7">
          <p>
            Wedding Management
            <span className="fw-light fst-italic">(Was our "Day of")</span>
          </p>
          <p>$1,499 plus tax</p>
          <p>
            (If Travel is required, reasonable travel costs for 2 nights will be
            added to contract at time of signing.)
          </p>
          <ul>
            <li>
              Free 1 hour consultation to gather wedding day vision and
              expectations.
            </li>
            <li>
              1 meeting; 2 weeks before the wedding; to review all vendor
              contracts and finalize details.
            </li>
            <li>
              Email and phone calls to be returned within 24 business hours.
            </li>
            <li>Customized 12 month planner, with your contracted vendors.</li>
            <li>
              Create a "day of" itinerary to be sent to all vendors 1 week
              before wedding.
            </li>
            <li>1 hour for ceremony rehearsal</li>
            <li>
              1 Coordinator on-site for <span>up to</span> 8 hours on your
              wedding day.
            </li>
            <li>
              Point of contact for all vendors and bridal party on your wedding
              day.
            </li>
            <li>
              On wedding day, coordinate all small details including some
              personal items and gifts to allow you and family to relax and
              enjoy the celebration. <span>note:</span> If more help is needed,
              such as placing linens, centerpieces, place setting, etc., we do
              not offer Decor services.
            </li>
          </ul>
        </div>
      </div>
      <div className="row align-items-center ">
        <div className="col-5">
          <img className="img-fluid" src={Wedding} alt="wedding" />
        </div>
        <div className="col-7">
          <p>Partial Planning</p>
          <p>$2,699 plus tax</p>
          <p>
            (If Travel is required, reasonable travel costs for 2 nights will be
            added to contract at time of signing.)
          </p>
          <ul>
            <li>3 (1 hour) meeting to review all contracts and details.</li>
            <li>
              Assist in the planning of your wedding and reception - on-going
              consultation.
            </li>
            <li>Provide advice on etiquette and protocol.</li>
            <li>Decor suggestions; including color scheme and style.</li>
            <li>
              Provide vendor list for those still needed, for bride to schedule
              appointments.
            </li>
            <li>
              Email and phone calls to be returned withing 24 business hours.
            </li>
            <li>Customized 12 month planner, with your contracted vendors.</li>
            <li>
              Create a "day of" itinerary to be sent to all vendors, 1 week
              before wedding.
            </li>
            <li>
              Create a customized budget to be sent to all vendors, 1 week
              before weeding.
            </li>
            <li>1 pre-wedding site visit</li>
            <li>
              1 final meeting; 1 week before the wedding to include items to be
              set up on the wedding day (ex: photographs, guest book, programs,
              seating cards, table numbers, etc.).
            </li>
            <li>1 hour for ceremony rehearsal.</li>
            <li>
              1 Coordinator on-site for <span>up to</span> 8 hours on your
              wedding day.
            </li>
            <li>
              On wedding day, coordinate all small details including some
              personal items and gifts to allow you and family to relax and
              enjoy the celebration. <span>note:</span> If more help is needed,
              such as placing linens, centerpieces, place setting, etc., we do
              not offer Decor services.
            </li>
          </ul>
        </div>
      </div>
      <div className="row align-items-center ">
        <div className="col-5">
          <img className="img-fluid" src={Wedding} alt="wedding" />
        </div>
        <div className="col-7">
          <p>Full Planning</p>
          <p>$4,499 plus tax</p>
          <p>
            (If Travel is required, reasonable travel costs for 2 nights will be
            added to contract at time of signing.)
          </p>
          <ul>
            <li>
              Meetings every 3 months to review all contracts, vendors, and
              details.
            </li>
            <li>
              Assist in the planning of your wedding and reception - on-going
              consultation.
            </li>
            <li>Provide advice on etiquette and protocol.</li>
            <li>
              Research, schedule and attend vendor appointments with you or for
              you.
            </li>
            <li>
              Complete wedding and reception decor design (Color scheme, style,
              and layout).
            </li>
            <li>
              Email and phone calls to be returned withing 24 business hours.
            </li>
            <li>Create and maintain 12 month planner.</li>
            <li>
              Create a "day of" itinerary to be sent to all vendors, 1 week
              before wedding.
            </li>
            <li>
              Create a customized budget to be sent to all vendors, 1 week
              before weeding.
            </li>
            <li>1 pre-wedding site visit</li>
            <li>
              1 final meeting; 1 week before the wedding to include items to be
              set up on the wedding day (ex: photographs, guest book, programs,
              seating cards, table numbers, etc.).
            </li>
            <li>1 hour for ceremony rehearsal.</li>
            <li>
              1 Coordinator on-site for <span>up to</span> 8 hours on your
              wedding day.
            </li>
            <li>
              Point of contact for all vendors and bridal party on your wedding
              day.
            </li>
            <li>
              On wedding day, coordinate all small details including some
              personal items and gifts to allow you and family to relax and
              enjoy the celebration. <span>note:</span> If more help is needed,
              such as placing linens, centerpieces, place setting, etc., we do
              not offer Decor services.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>Decor Rentals: </span>
          <p>Pricing available once design is complete.</p>
          <span>Set up and take down of our rentals or your decore: </span>
          <p>Begins at $800</p>
          <span>Extra help: </span>
          <p>
            (Bus tables, refill beverages and cocktail hour snacks, dump trash):
            $25 per hour, per helper
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
