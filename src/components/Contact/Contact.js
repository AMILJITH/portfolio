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
      .send(
        'service_si2s6gt',   // Service ID
        'template_z2si1qz',  // Template ID
        {
          your_name: form.current.your_name.value,   // ✅ matches {{your_name}}
          your_email: form.current.your_email.value, // ✅ matches {{your_email}}
          message: form.current.message.value,       // ✅ matches {{message}}
        },
        'NIyjjOYkQTyXsGSyHuJMB' // Public Key
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully ✅');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
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
          name="your_name"  // ✅ must match template
          className="name"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="your_email" // ✅ must match template
          className="email"
          required
        />
        <textarea
          className="message"
          placeholder="Your Message"
          name="message"    // ✅ must match template
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
        <a
          href="https://www.instagram.com/amiljith_js?igsh=MWx0N2JqZXNhbXhkbw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="Instagram" className="link" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
