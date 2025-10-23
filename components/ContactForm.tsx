import React, { useState } from 'react';
import { personalData } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nFrom: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const inputStyles = "w-full bg-background rounded-lg p-4 text-text-dark placeholder-text-medium focus:outline-none transition-shadow duration-300 shadow-neumorphic-inset focus:shadow-neumorphic-pressed";
  
  return (
    <div className="max-w-2xl mx-auto bg-background p-8 rounded-2xl shadow-neumorphic-raised">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            className={inputStyles} 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            className={inputStyles} 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-6">
          <input 
            type="text" 
            name="subject"
            placeholder="Subject" 
            className={inputStyles} 
            value={formData.subject}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-6">
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows={5} 
            className={inputStyles}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="text-center">
            <button type="submit" className="text-text-dark font-bold px-8 py-4 rounded-lg shadow-neumorphic-raised hover:shadow-neumorphic-pressed active:shadow-neumorphic-pressed transition-shadow duration-300">
                Send Message
            </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;