import React, { useState } from 'react';
// FIX: Added '.ts' extension to the types import to ensure the custom element type definitions are loaded correctly.
import '../types.ts';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputStyles = "w-full bg-transparent border-b-2 border-light-border dark:border-border p-3 text-light-text-dark dark:text-text-dark placeholder:text-light-text-medium dark:placeholder:text-text-medium focus:outline-none focus:border-primary transition-colors duration-300 disabled:opacity-50";
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    
    const form = event.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("Thanks for your submission!");
        form.reset();
      } else {
        const responseData = await response.json();
        // FIX: Replace `Object.hasOwn` with `Object.prototype.hasOwnProperty.call` for wider compatibility, resolving the TypeScript compiler error.
        if (Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
          setStatus(responseData["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          setStatus("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form 
        id="my-form"
        action="https://formspree.io/f/mdkwzgbp" 
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-8"
      >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input 
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name" 
                  className={inputStyles} 
                  required 
                  disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email" 
                  className={inputStyles} 
                  required 
                  disabled={isSubmitting}
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input 
                type="text" 
                id="subject"
                name="subject"
                placeholder="Subject" 
                className={inputStyles} 
                required 
                disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea 
                id="message"
                name="message"
                placeholder="Your Message" 
                rows={5} 
                className={`${inputStyles} resize-none`}
                required
                disabled={isSubmitting}
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                id="my-form-button"
                type="submit" 
                className="flex items-center justify-center text-text-dark font-bold px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover shadow-lg transition-all duration-300 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                  <lord-icon
                      src="https://cdn.lordicon.com/aycieyht.json"
                      trigger="loop-on-hover"
                      colors="primary:#ffffff"
                      style={{width:'24px', height:'24px', marginRight: '8px'}}
                  />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <p id="my-form-status" className={`font-semibold ${status.includes('Thanks') ? 'text-green-500' : 'text-red-500'}`}>
                    {status}
                </p>
              )}
          </div>
      </form>
    </div>
  );
};

export default ContactForm;