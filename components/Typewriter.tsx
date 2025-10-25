import React, { useState, useEffect, useCallback } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  phrases, 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  pauseDuration = 2000 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(typingSpeed);

  const handleType = useCallback(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    
    // Determine the next text state
    if (isDeleting) {
      setDisplayedText(currentText => currentText.substring(0, currentText.length - 1));
      setCurrentSpeed(deletingSpeed);
    } else {
      setDisplayedText(currentText => currentPhrase.substring(0, currentText.length + 1));
      setCurrentSpeed(typingSpeed);
    }

    // Check for state transitions
    if (!isDeleting && displayedText === currentPhrase) {
      // Finished typing, pause then start deleting
      setCurrentSpeed(pauseDuration);
      setIsDeleting(true);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, move to next phrase and start typing
      setIsDeleting(false);
      setPhraseIndex(prevIndex => prevIndex + 1);
      setCurrentSpeed(typingSpeed);
    }

  }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    if (phrases.length === 0) return;
    const timer = setTimeout(handleType, currentSpeed);
    return () => clearTimeout(timer);
  }, [handleType, currentSpeed, phrases]);

  return (
    <span>
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default Typewriter;