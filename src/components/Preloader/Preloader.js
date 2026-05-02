import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [splitText, setSplitText] = useState(false);
  const [splitBg, setSplitBg] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Simulate loading progress
      current += Math.floor(Math.random() * 10) + 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        
        // Sequence of animations once loaded
        setTimeout(() => setSplitText(true), 300); // Text splits first
        setTimeout(() => {
            setSplitBg(true);
            if (onComplete) onComplete(); // Trigger app content slide-up
        }, 900); // Then background splits sideways
        
        setTimeout(() => {
            setHide(true);
        }, 1000); // Finally hide preloader entirely
      }
      setPercent(current);
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex overflow-hidden bg-transparent">
      {/* Background halves */}
      <div 
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#010001] transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          splitBg ? '-translate-x-full' : 'translate-x-0'
        }`}
      />
      <div 
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#010001] transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          splitBg ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center font-mono text-sm tracking-[0.2em] text-white/90 z-10">
        <div className="flex gap-4">
          <span 
            className={`transition-all duration-700 ease-in-out ${
              splitText ? '-translate-x-[20vw] opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            [ BEEC00DES - Tech Professional ]
          </span>
          <span 
            className={`transition-all duration-700 ease-in-out ${
              splitText ? 'translate-x-[20vw] opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            [ {percent} PERCENT ]
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;