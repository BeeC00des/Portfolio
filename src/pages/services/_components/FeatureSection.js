import React from 'react';

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center mt-24 mb-24 px-6 w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-16 text-center md:text-left">
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight">
          The preferred data layer by agents.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
        {/* Card 1 */}
        <div className="bg-[#14171c] p-8 md:p-10 rounded-[5px] border border-gray-800">
          <div className="flex items-center gap-3 mb-6 text-sm font-bold text-gray-400 tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3BB2EA] animate-pulse"></span>
            Accuracy Improvement
          </div>
          <div className="text-6xl md:text-7xl text-[#3BB2EA] font-light tracking-tight mb-6">
            +7.67pp
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            More accurate responses vs. web search. Fit your agents reliable data for reliable results.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#14171c] p-8 md:p-10 rounded-[5px] border border-gray-800">
          <div className="flex items-center gap-3 mb-6 text-sm font-bold text-gray-400 tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-[#199C16] animate-pulse"></span>
            Token Efficiency
          </div>
          <div className="text-6xl md:text-7xl text-[#199C16] font-light tracking-tight mb-6">
            8x
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Fewer tokens per query. Structured data is denser than prose — your costs drop immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
