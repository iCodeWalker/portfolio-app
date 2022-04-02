import React from "react";

import "./Contact.css";

function Contact({ reference }) {
  return (
    <div className="contact" ref={reference}>
      <h2>Contact Me</h2>
      <div className="contact__container">
        <div className="contact__details">
          <div>
            <p>Email : vaibhav3kadwey@gmail.com</p>
            <p>Phone no. : 9926702406, 8619943454</p>
            <p>
              Github :
              <a
                href="https://github.com/iCodeWalker"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Github Account
              </a>
            </p>
            <p>
              LinkedIn :{" "}
              <a
                href="https://www.linkedin.com/in/vaibhav-kadwey-258229192/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                LinkedIn Account
              </a>
            </p>
          </div>
        </div>
        <div className="contact__enquiry__form">
          <form>
            <div className="contact__enquiry__form__input__container">
              <label>
                Name :
                <input
                  className="contact__enquiry__form__input"
                  name="name"
                  type="text"
                />
              </label>

              <label>
                Email :
                <input
                  className="contact__enquiry__form__input"
                  name="email"
                  type="email"
                />
              </label>
              <label>
                Company name :
                <input
                  className="contact__enquiry__form__input"
                  name="company_name"
                  type="text"
                />
              </label>

              <label>
                Requirement For:
                <input
                  className="contact__enquiry__form__input"
                  name="requirement"
                  type="text"
                />
              </label>

              <label>
                Offer CTC :
                <input
                  className="contact__enquiry__form__input"
                  name="offer_ctc"
                  type="number"
                />
              </label>

              <input className="contact__enquiry__form__button" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
