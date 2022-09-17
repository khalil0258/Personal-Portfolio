import React, { useRef } from "react";
import "./Footer.css";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7tacsy4",
        "template_ivhwjho",
        form.current,
        "cIo0ataJyp4icU-mf"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="flexi">
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name="from_name" />
            <input type="text" placeholder="Your Email" name="user_Email" />
            <textarea
              name="message"
              cols="30"
              rows="8"
              placeholder="Share Your Thoughts"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
