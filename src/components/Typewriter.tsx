'use client';

import { useEffect, useState } from 'react';

export default function Typewriter({ words, delay = 2000, typingSpeed = 100, deletingSpeed = 50 }: { words: string[], delay?: number, typingSpeed?: number, deletingSpeed?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[currentWordIndex % words.length];

    const type = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingDelay(deletingSpeed);
      } else {
        // Typing text
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingDelay(typingSpeed);
      }

      // Check if we're done with the current word
      if (!isDeleting && displayText === currentWord) {
        // Pause at the end of a word
        setTypingDelay(delay);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        // Move to next word after deleting
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    timeout = setTimeout(type, typingDelay);

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting, words, delay, typingSpeed, deletingSpeed]);

  return (
    <span className="inline-block min-w-[200px] text-left">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
