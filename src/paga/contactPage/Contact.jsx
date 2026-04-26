import React from "react";
import './Contact.css';
import AboutFooterSection from "../aboutPage/AboutFooterSection";

function Contact() {
  return (

    <>
    <div className="contact_page">
      <div className="container">

        <h1>Contact Us</h1>

        <div className="contact_content">

          <form className="contact_form">

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>

          </form>

          

        </div>

      </div>
    </div>

    <AboutFooterSection />
    </>
  );
}

export default Contact;