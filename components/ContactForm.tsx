import React from 'react';

const ContactForm: React.FC = () => {
  const inputStyles = "w-full bg-dark/50 border-2 border-white/10 rounded-lg p-4 text-light placeholder-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";
  
  return (
    <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input type="text" placeholder="Your Name" className={inputStyles} />
          <input type="email" placeholder="Your Email" className={inputStyles} />
        </div>
        <div className="mb-6">
          <input type="text" placeholder="Subject" className={inputStyles} />
        </div>
        <div className="mb-6">
          <textarea placeholder="Your Message" rows={5} className={inputStyles}></textarea>
        </div>
        <div className="text-center">
            <button type="submit" className="bg-primary text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-secondary transition-all transform hover:scale-105 hover:shadow-primary/50">
                Send Message
            </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
