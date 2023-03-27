import emailjs from "emailjs-com";
import { useState, useEffect, React } from "react";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    document.title = "DP Events | Contact";
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    alert(
      "Thank you for your email. We are reviewing your information and will be in contact within 24-48 business hours. Thank you, DP Events"
    );
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setSubject("");
    setMessage("");

    emailjs
      .sendForm(
        "service_m0nnwfm",
        "template_uvlx6so",
        e.target,
        "4BmnMrd2CIqUdOaYn"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="container min-vh-100 py-3">
      <div className="row w-md-75 mx-md-auto d-flex flex-column align-items-center">
        <div className="col ">
          <p className="lead text-uppercase fw-lighter fs-1">contact</p>
        </div>
        <hr />
      </div>
      <div className="row w-md-75 mx-md-auto d-flex flex-column align-items-center">
        <div className="col py-md-5">
          <p className="fs-4 fst-italic lead text-center lh-lg">
            "I can't wait to hear more about you and your event!
            <br />
            Fill out the contact form below to get the conversation started.
            <br />
            Give as much info as possible to discuss availability and pricing."
          </p>
        </div>
        <hr />
      </div>
      <form className="row g-3 py-3 my-3" onSubmit={sendEmail}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="First and Last Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="emailInfo" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="emailInfo"
            placeholder="contact@test.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form-control"
            placeholder="208-555-1234"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="date" className="form-label">
            Event Date
          </label>
          <input
            type="date"
            name="date"
            className="form-control"
            id="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="form-control"
            placeholder="What are you looking for?"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="3"
            placeholder="Tell me about your event"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-lg btn-secondary">
            Send Email
          </button>
        </div>
      </form>
      <hr />
    </section>
  );
};

export default Contact;
