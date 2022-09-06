import React, { useRef } from "react";
import CustomButton from "../Button/Button";

import emailjs from 'emailjs-com';

import './FormStyles.css';

export default function Form() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_saw1mqn', 'template_bjkyw15', form.current, 'Hjy4nXRc0F3tPYY_i')
      .then((result) => {
          window.alert('Email sent succesfully!')
      }, (error) => {
          window.alert(error)
      });
      e.target.reset();
  }
  return (
    <div className="form-container">
      <form onSubmit={sendEmail} ref={form}>
      <div className="name-fields">
      <input type="text" id="fname" name="name" placeholder="name" required/>
        <input type="email" id="lname" name="email" placeholder="email" required/>
      </div>
      <div className="message-field">
      <textarea id="subject" name="message" placeholder="message" style={{height: '200px'}} required></textarea>
      </div>
      <CustomButton type="submit" children={'Submit'}/>
      </form>
    </div>
  )
}