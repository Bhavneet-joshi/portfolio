import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
}

export function CountUp({ end, duration = 1500 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const progress = timestamp - startTimeRef.current;
      const increment = Math.ceil(end / 40);
      
      if (countRef.current < end) {
        countRef.current = Math.min(countRef.current + increment, end);
        setCount(countRef.current);
        animationFrameId = requestAnimationFrame(animate);
      }
      
      if (progress >= duration) {
        setCount(end);
        cancelAnimationFrame(animationFrameId);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);
  
  return <>{count}</>;
}
