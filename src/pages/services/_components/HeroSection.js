import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center font-bold text-center mt-32 mb-16 px-6">
      <h2 className="text-[10vw] md:text-[5rem] lg:text-[6rem] leading-[1.1] tracking-tight text-white mb-6">
        At Cala we <span className="text-[#199C16]">clean</span> data
      </h2>
      <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
        So you don't have to. Skip the data and start building.
      </p>
      <div className="flex flex-row gap-4">
        <button className="px-6 py-3 rounded-[3px] border border-gray-500 text-white hover:bg-gray-800 transition-colors flex items-center gap-2">
          Documentation ↗
        </button>
        <button className="px-6 py-3 rounded-[3px] bg-[#199C16] text-white hover:bg-[#13B90F] transition-colors">
          Try it
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
