import React, { useState } from 'react';
import { personalData } from '../constants';

const ContactInfoItem: React.FC<{iconSrc: string, title: string, content: string}> = ({ iconSrc, title, content }) => (
  <div className="flex items-start">
    <div className="text-primary mr-5 mt-1 w-8 flex justify-center">
      <lord-icon
          src={iconSrc}
          trigger="hover"
          colors="primary:#00a896"
          style={{width:'28px', height:'28px'}}>
      </lord-icon>
    </div>
    <div>
      <h4 className="text-xl font-bold text-light-text-dark dark:text-text-dark">{title}</h4>
      <p className="text-light-text-medium dark:text-text-medium">{content}</p>
    </div>
  </div>
);

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

  const inputStyles = "w-full bg-transparent border-b-2 border-light-border dark:border-border p-3 text-light-text-dark dark:text-text-dark placeholder:text-light-text-medium dark:placeholder:text-text-medium focus:outline-none focus:border-primary transition-colors duration-300";
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div>
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
            <div>
            <textarea 
                name="message"
                placeholder="Your Message" 
                rows={5} 
                className={`${inputStyles} resize-none`}
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            </div>
            <div>
                <button type="submit" className="flex items-center justify-center text-text-dark font-bold px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover shadow-lg transition-all duration-300">
                    <lord-icon
                        src="https://cdn.lordicon.com/aycieyht.json"
                        trigger="loop-on-hover"
                        colors="primary:#ffffff"
                        style={{width:'24px', height:'24px', marginRight: '8px'}}>
                    </lord-icon>
                    Send Message
                </button>
            </div>
        </form>
      </div>
      <div className="space-y-8">
          <ContactInfoItem iconSrc="https://cdn.lordicon.com/rhvddzym.json" title="Email" content={personalData.email} />
          <ContactInfoItem iconSrc="https://cdn.lordicon.com/ssvybplt.json" title="Phone" content={personalData.phone} />
          <ContactInfoItem iconSrc="https://cdn.lordicon.com/zzcjjxal.json" title="Location" content={personalData.location} />
      </div>
    </div>
  );
};

export default ContactForm;