import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Demo message sent');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <div className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form" onSubmit={onSubmit}>
            <input name="name" placeholder="Your name" value={form.name} onChange={onChange} required />
            <input name="email" placeholder="Your email" value={form.email} onChange={onChange} required />
            <textarea name="message" rows="5" placeholder="Message" value={form.message} onChange={onChange} required />
            <button className="submit-btn" type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> nasirwaqas744@gmail.com</p>
            <p><strong>Location:</strong> Lahore City, Pakistan</p>
            <p><strong>Phone:</strong> +92 309 5153936</p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/nasirwaqas" target="_blank" rel="noopener noreferrer">nasirwaqas</a></p>


          </div>
        </div>
      </div>
    </div>
  );
}
