import { useEffect } from "react";
import Star from "../../assets/icons/star.svg";
import "./Reviews.css";

const Reviews = () => {
  useEffect(() => {
    document.title = "DP Events | Reviews";
  });
  return (
    <section className="container min-vh-100 py-3">
      <div className="row w-md-75 mx-md-auto">
        <div className="col">
          <p className="lead fs-1 text-uppercase fw-lighter">reviews</p>
        </div>
        <hr />
      </div>
      {/* Review 1 */}
      <div className="row d-flex justify-content-between">
        <div className="review-container p-4 mb-5">
          <div className="d-flex align-items-center">
            <p className="fs-3 mb-0">Zontai D</p>
            <p className="fs-5 ps-3 mb-0">
              5.0 <img src={Star} alt="Star" /> <img src={Star} alt="Star" />{" "}
              <img src={Star} alt="Star" /> <img src={Star} alt="Star" />{" "}
              <img src={Star} alt="Star" />{" "}
            </p>
          </div>
          <p className="fs-6 fw-bold ">Married on 06/10/2023</p>
          <div>
            <p className="fs-4 fw-bold">Wedding Day of Coordination</p>
          </div>
          <div>
            <p className="fs-6 ">
              I talked with Diane 3 months before my wedding. She asked me what
              needed & what wanted her to do. Within the first day of meeting
              her & seeing how dedicated she was as to helping me I knew I
              needed this woman in my life! Diane was right away on it. She
              gathered all my information from vendors, decorations, dinner and
              so on that week of meeting. She even asked me things that I didn't
              even think about for my wedding day! I had a backyard wedding by
              the way and she made sure to ask about lighting, electricity,
              bathrooms & parking. Things I forgot to think about! So we worked
              together on those things. If I didn't know of something Diane was
              there to give her best advice. The friendliest, kindest, funnest &
              the most amazing person ever. Remind you she did all of that 3
              months before the big day... to say she didn't meet my
              expectations I'd be lying. Thank you Diane..!
            </p>
          </div>
        </div>
        {/* Review 2 */}
        <div className="review-container p-4 mb-5">
          <div className="d-flex align-items-center">
            <p className="fs-3 mb-0">Lynn T</p>
            <p className="fs-5 ps-3 mb-0">
              5.0 <img src={Star} alt="Star" /> <img src={Star} alt="Star" />{" "}
              <img src={Star} alt="Star" /> <img src={Star} alt="Star" />{" "}
              <img src={Star} alt="Star" />{" "}
            </p>
          </div>
          <p className="fs-6 fw-bold ">Married on 09/25/2021</p>
          <div>
            <p className="fs-4 fw-bold">Diane is Amazing</p>
          </div>
          <div className="review-text">
            <p className="fs-6">
              When planning our daughter’s wedding, I wasn’t sure we needed a
              wedding planner, but thought a Day of Coordinator would be nice to
              be able to enjoy that day. After speaking with Diane, my daughter
              and I both realized there were so many things we hadn’t even
              thought about that we needed to be on top of months ahead of the
              wedding. Keeping track of all those little details can be
              overwhelming. We decided to go with a little more than the Day of
              Coordinator and purchased Diane’s Partial Planning. Diane was
              fantastic! She had several phone meetings with our daughter and
              her fiancé throughout the 7 months prior to the wedding. She
              shared her notes with all of us indicating the follow-up items
              needed to keep everything on track. Since the wedding was in a
              remote location, Diane was there for the entire weekend, from
              Friday’s rehearsal through the late-night Saturday reception. She
              made sure everything was in place and looked fantastic. She didn’t
              hesitate to ask for volunteers from stringing lights and setting
              up tables and chairs to doing the table centerpieces and place
              settings at the tables. As everyone says, something will go wrong
              or not as planned. Ours was a trip down the mountain Friday night
              taking my 88-year-old Mother to the ER. When I returned Saturday
              morning after a very short night, there was a buzz of activity.
              Diane was directing everything and told me I could take it easy,
              relax and spend time with my daughter. She really helped my stress
              level knowing she knew exactly what needed to be done and what we
              wanted. Diane had everything under control, the wedding started on
              time and everything looked beautiful. I highly recommend Diane!
            </p>
          </div>
        </div>
        {/* Review 3 */}
        <div className="review-container p-4 mb-5">
          <div className="d-flex align-items-center">
            <p className="fs-3 mb-0">Julie P</p>
            <p className="fs-5 ps-3 mb-0">
              5.0 <img src={Star} alt="Star" /> <img src={Star} alt="Star" />{" "}
              <img src={Star} alt="Star" /> <img src={Star} alt="Star" />{" "}
              <img src={Star} alt="Star" />{" "}
            </p>
          </div>
          <p className="fs-6 fw-bold ">Married on 06/19/2021</p>
          <div>
            <p className="fs-4 fw-bold">
              Fantastic event coordinator and Decorator! Very Talented!!
            </p>
          </div>
          <div>
            <p className="fs-6">
              What can I say, Diane was fantastic! At our first meeting with
              Diane, I knew she was the right person to help coordinate and
              decorate for my daughter's wedding. She gave great advice on many
              things that we had not even thought about. We had planned on doing
              the day of coordinating and decorating ourselves to save money,
              but quickly found it was overwhelming. Diane was more then
              reasonable on pricing. I was able to rent some things from her
              cheaper then the rental places, she gave advice on ways to save
              costs and which things to prioritize. She decorated the sweetheart
              table, bridal party tables, cake table....the entire front of The
              Grove ballroom. Diane create the most beautiful backdrop, many
              people commented that it looked like something on Pinterest! Diane
              coordinated the reception with all the vendors and made sure
              everything ran smoothly. Diane has a fantastic energy and was so
              positive and calming thru this whole experience! She was a true
              professional and adjusted when things didn't go quite as planned.
              Diane IS the best Wedding coordinator and decorator in Idaho!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
