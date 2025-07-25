import { useState, useEffect } from 'react';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  startDelay?: number;
}

export const useCountAnimation = ({ end, duration = 2000, startDelay = 0 }: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
      
      let startTimestamp: number | null = null;
      const startValue = 0;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * (end - startValue) + startValue));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [end, duration, startDelay]);

  return count;
};