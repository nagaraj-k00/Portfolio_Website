import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 100, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    const startTyping = () => {
      let index = 0;
      const type = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};
