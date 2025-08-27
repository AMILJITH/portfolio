import React, { useRef } from 'react';
import './contact.css';
import facebook from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_si2s6gt',     // your Service ID
      'template_z2si1qz',    // your Template ID
      form.current,
      'NIyjjOYkQTyXsGSyHuJMB' // your Public Key
    )
    .then(
      () => {
        console.log('SUCCESS!');
        alert('Message sent successfully ✅');
        form.current.reset();
      },
      (error) => {
        console.error('FAILED...', error.text);
        alert('Failed to send message ❌ Check console for details.');
      }
    );
};


  return (
    <section className="contactpage" id="Contact">
      <h2 className="title">Contact Me</h2>
      <span className="des">
        Please fill out the form to discuss any work opportunity
      </span>

      <form ref={form} onSubmit={sendEmail} className="contactform">
        <input
          type="text"
          placeholder="Your Name"
          name="your_name"
          className="name"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="your_email"
          className="email"
          required
        />
        <textarea
          className="message"
          placeholder="Your Message"
          name="message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>

      <div className="links">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="Facebook" className="link" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="link" />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer">
          <img src={Youtube} alt="Youtube" className="link" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <img src={Instagram} alt="Instagram" className="link" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
