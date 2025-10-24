import React from 'react';

const ContactForm: React.FC = () => {
  const inputStyles = "w-full bg-transparent border-b-2 border-light-border dark:border-border p-3 text-light-text-dark dark:text-text-dark placeholder:text-light-text-medium dark:placeholder:text-text-medium focus:outline-none focus:border-primary transition-colors duration-300";
  
  return (
    <div className="max-w-3xl mx-auto">
      <form 
        action="https://formspree.io/f/mdkwzgbp" 
        method="POST"
        className="space-y-8"
      >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              className={inputStyles} 
              required 
          />
          <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              className={inputStyles} 
              required 
          />
          </div>
          <div>
          <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              className={inputStyles} 
              required 
          />
          </div>
          <div>
          <textarea 
              name="message"
              placeholder="Your Message" 
              rows={5} 
              className={`${inputStyles} resize-none`}
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
  );
};

export default ContactForm;