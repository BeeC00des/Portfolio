import React from 'react';

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-24 px-6 w-full">
      {/* <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl  font-serif text-white tracking-tight">
          Preferred Services
        </h2>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full py-10">
        {/* Card 1 */}
        <div className="bg-[#14171c] p-8 md:p-10 rounded-[5px] border border-gray-800">
          <div className="flex items-center gap-3 mb-6 text-sm font-bold text-gray-400 tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-[#199C16] animate-pulse"></span>
            Product Development
          </div>
          <div className="text-6xl md:text-7xl text-[#199C16] font-light tracking-tight mb-6">
            +10
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            I’ve built over 10 web projects and managed applications for both individuals and organizations. My work focuses on delivering practical, reliable digital solutions while ensuring smooth application management and performance across different use cases
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#14171c] p-8 md:p-10 rounded-[5px] border border-gray-800">
          <div className="flex items-center gap-3 mb-6 text-sm font-bold text-gray-400 tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-[#199C16] animate-pulse"></span>
            Technical Consultation
          </div>
          <div className="text-6xl md:text-7xl text-[#199C16] font-light tracking-tight mb-6">
            +20
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            I provide technical consultation covering both product review and career guidance. This includes reviewing systems for improvements in design and reliability, as well as supporting engineers with career growth, role transitions, and interview preparation. The goal is clear, practical advice that improves both product outcomes and professional direction.
          </p>
        </div>
      </div>

        <div className="flex flex-row gap-4">
        <button className="px-6 py-3 rounded-[3px] border border-[#199C16] text-white hover:bg-[#199C16] transition-colors flex items-center gap-2">
          Book Me ↗
        </button>
        <button className="px-6 py-3 rounded-[3px] bg-[#199C16] text-white hover:bg-[#13B90F] transition-colors">
          Explore My Services
        </button>
      </div>


    </div>
  );
};

export default FeatureSection;
