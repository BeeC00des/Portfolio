import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center font-bold text-center mt-32  px-6">
      <div className="flex items-center justify-center gap-3">
        <svg className="w-16 h-16 text-white mb-4 md:mb-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="9" width="16" height="11" rx="2" />
          <path d="M12 9V4" />
          <circle cx="12" cy="3" r="1" />
          <path d="M7 13.5c0-.8.6-1.5 1.5-1.5s1.5.7 1.5 1.5c0 1.2-1.5 2.5-1.5 2.5s-1.5-1.3-1.5-2.5z" />
          <path d="M14 13.5c0-.8.6-1.5 1.5-1.5s1.5.7 1.5 1.5c0 1.2-1.5 2.5-1.5 2.5s-1.5-1.3-1.5-2.5z" />
          <path d="M8 18c1.5 1 3.5 1 5 0" />
          <path d="M20 13h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1" />
          <path d="M4 13H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1" />
        </svg>
         <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white">
        Brand <span className="text-[#199C16]">Builds</span> up
      </h2>
      </div>
     
      {/* <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
        She believe in the process of buidling quality tech solutions
      </p> */}
    
    </div>
  );
};

export default HeroSection;
