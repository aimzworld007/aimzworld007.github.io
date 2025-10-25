import React, { useState, useEffect, useCallback } from 'react';

interface TypewriterProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  pauseDuration = 2000 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(typingSpeed);

  const handleType = useCallback(() => {
    const fullText = text;
    
    // Determine the next text state
    if (isDeleting) {
      setDisplayedText(currentText => currentText.substring(0, currentText.length - 1));
      setCurrentSpeed(deletingSpeed);
    } else {
      setDisplayedText(currentText => fullText.substring(0, currentText.length + 1));
      setCurrentSpeed(typingSpeed);
    }

    // Check for state transitions
    if (!isDeleting && displayedText === fullText) {
      // Finished typing, pause then start deleting
      setCurrentSpeed(pauseDuration);
      setIsDeleting(true);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, start typing again
      setIsDeleting(false);
      setCurrentSpeed(typingSpeed);
    }

  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(handleType, currentSpeed);
    return () => clearTimeout(timer);
  }, [handleType, currentSpeed]);

  return (
    <span>
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default Typewriter;