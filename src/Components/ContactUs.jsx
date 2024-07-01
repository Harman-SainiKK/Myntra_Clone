import React, { useRef } from "react";
// import Header from "./Header";
import { Form, useNavigate } from "react-router-dom";
import myntraImg from "../Images/330-3306304_myntra-logo-transparent-png-myntra-online-shopping-app-removebg-preview.png";
const ContactUs = () => {
  const navigate = useNavigate();
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const message = useRef();

  const submit = (e) => {
    console.log("submit");
    alert("Submited");
    fname.current.value = "";
    lname.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };
  return (
    <>
      <div className="watchListNav">
        <img src={myntraImg} alt="" onClick={() => navigate("/")} />
      </div>
      <div className="contactUs">
        <Form onSubmit={submit}>
          <h1>Contact Us</h1>
          <div className="fName">
            <label htmlFor="fname">First Name</label>
            <br />
            <input name="fname" ref={fname} type="text" id="fname" required />
          </div>
          <div className="lName">
            <label htmlFor="lname">Last Name</label>
            <br />
            <input name="lname" ref={lname} type="text" id="lname" required />
          </div>
          <div className="email">
            <label htmlFor="email">E-mail</label>
            <br />
            <input name="email" ref={email} type="email" id="email" required />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              ref={message}
              name="message"
              id="message"
              cols={20}
              rows={10}
              required
            ></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ContactUs;
