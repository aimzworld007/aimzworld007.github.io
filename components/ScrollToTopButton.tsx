
import React from 'react';

interface ScrollToTopButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary text-text-dark shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-background transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <i className="fa-solid fa-arrow-up text-xl" aria-hidden="true"></i>
    </button>
  );
};

export default ScrollToTopButton;
