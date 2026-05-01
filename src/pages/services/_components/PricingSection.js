import React from 'react';

const PricingSection = () => {
  return (
      <div className="flex flex-col mt-32 mb-24 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight mb-6">
          A price for what you'll use
        </h2>
        <p className="text-gray-400 text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 font-light px-6">
          Start free. Pay for what you use. Upgrade when you need more seats, more throughput, or enterprise controls. Every plan gets the same data.
        </p>

        {/* Included features banner */}
        <div className="max-w-5xl mx-auto bg-[#14171c] border border-gray-800 rounded-full py-4 px-6 md:px-10 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-10 mb-16 text-sm text-gray-300 w-[90%] md:w-full">
          <span className="text-gray-500 font-bold tracking-widest text-xs uppercase">Included on every plan</span>
          <div className="flex items-center gap-2"><span className="text-[#199C16]">✓</span> Fresh, traceable, typed data</div>
          <div className="flex items-center gap-2"><span className="text-[#199C16]">✓</span> Playground</div>
          <div className="flex items-center gap-2"><span className="text-[#199C16]">✓</span> MCP server</div>
          <div className="flex items-center gap-2"><span className="text-[#199C16]">✓</span> Full source citations</div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 mb-8 w-full">
          {/* Starter */}
          <div className="bg-[#14171c] border border-gray-800 p-8 rounded-[5px] flex flex-col hover:border-[#199C16] transition-colors duration-300">
            <h3 className="text-2xl text-white text-center mb-2 font-medium">Starter</h3>
            <p className="text-sm text-gray-400 text-center mb-8 min-h-[40px] font-light">Kick the tires. Build a prototype. No credit card.</p>
            <div className="text-5xl font-bold text-white text-center tracking-widest my-8 font-serif">FREE</div>
            <div className="flex flex-col gap-4 mt-4 text-sm font-light">
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Credits*</span><span className="text-white">100 / month</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Rate</span><span className="text-white">10 req / min</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Seats</span><span className="text-white">1</span></div>
              <div className="flex justify-between pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Support</span><span className="text-white">Community</span></div>
            </div>
            <button className="mt-auto pt-8 w-full">
              <div className="w-full bg-[#2a2f38] hover:bg-[#199C16] text-white py-3 rounded-[3px] text-sm transition-colors text-center font-medium">Start free</div>
            </button>
          </div>

          {/* Explore */}
          <div className="bg-[#14171c] border border-gray-800 p-8 rounded-[5px] flex flex-col hover:border-[#199C16] transition-colors duration-300">
            <h3 className="text-2xl text-white text-center mb-2 font-medium">Explore</h3>
            <p className="text-sm text-gray-400 text-center mb-8 min-h-[40px] font-light">For solo builders and automations that need more room to move.</p>
            <div className="text-5xl font-bold text-white text-center my-8 flex justify-center items-end gap-1"><span className="text-white text-6xl tracking-tighter">$50</span><span className="text-lg font-light text-gray-500 mb-1">/month</span></div>
            <div className="flex flex-col gap-4 mt-4 text-sm font-light">
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Credits*</span><span className="text-white">1,250 / month</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Rate</span><span className="text-white">50 req / min</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Seats</span><span className="text-white">1</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Support</span><span className="text-white">Email</span></div>
              <div className="flex justify-between pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Triggers</span><span className="text-gray-500">Coming soon →</span></div>
            </div>
            <button className="mt-auto pt-8 w-full">
              <div className="w-full bg-[#2a2f38] hover:bg-[#199C16] text-white py-3 rounded-[3px] text-sm transition-colors text-center font-medium">Choose Explore</div>
            </button>
          </div>

          {/* Build */}
          <div className="bg-[#14171c] border-[#199C16] border-2 p-8 rounded-[5px] flex flex-col relative overflow-hidden transform md:-translate-y-2 shadow-lg shadow-[#199C16]/10">
            {/* Highlighted tier banner */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#199C16]"></div>
            <h3 className="text-2xl text-white text-center mb-2 font-medium">Build</h3>
            <p className="text-sm text-gray-400 text-center mb-8 min-h-[40px] font-light">For teams shipping projects into production.</p>
            <div className="text-5xl font-bold text-white text-center my-8 flex justify-center items-end gap-1"><span className="text-white text-6xl tracking-tighter">$200</span><span className="text-lg font-light text-gray-500 mb-1">/month</span></div>
            <div className="flex flex-col gap-4 mt-4 text-sm font-light">
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Credits*</span><span className="text-white">5,500 / month</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Rate</span><span className="text-white">100 req / min</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Seats</span><span className="text-white">5</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Support</span><span className="text-white">Priority email</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Triggers</span><span className="text-gray-500">Coming soon →</span></div>
              <div className="flex justify-between pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Org</span><span className="text-white">User management</span></div>
            </div>
            <button className="mt-auto pt-8 w-full">
              <div className="w-full bg-[#199C16] hover:bg-[#13B90F] text-white py-3 rounded-[3px] text-sm transition-colors text-center font-medium">Choose Build</div>
            </button>
          </div>

          {/* Scale */}
          <div className="bg-[#14171c] border border-gray-800 p-8 rounded-[5px] flex flex-col hover:border-[#199C16] transition-colors duration-300">
            <h3 className="text-2xl text-white text-center mb-2 font-medium">Scale</h3>
            <p className="text-sm text-gray-400 text-center mb-8 min-h-[40px] font-light">For high-volume workloads and full production teams.</p>
            <div className="text-5xl font-bold text-white text-center my-8 flex justify-center items-end gap-1"><span className="text-white text-6xl tracking-tighter">$2K</span><span className="text-lg font-light text-gray-500 mb-1">/month</span></div>
            <div className="flex flex-col gap-4 mt-4 text-sm font-light">
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Credits*</span><span className="text-white">60,000 / month</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Rate</span><span className="text-white">1,000 req / min</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Seats</span><span className="text-white">Unlimited</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider flex-shrink-0">Support</span><span className="text-white text-right">Priority email + Slack</span></div>
              <div className="flex justify-between border-b border-gray-800 pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Triggers</span><span className="text-gray-500">Coming soon →</span></div>
              <div className="flex justify-between pb-3"><span className="text-gray-500 uppercase text-xs font-bold tracking-wider">Org</span><span className="text-white">User management</span></div>
            </div>
            <button className="mt-auto pt-8 w-full">
              <div className="w-full bg-[#2a2f38] hover:bg-[#199C16] text-white py-3 rounded-[3px] text-sm transition-colors text-center font-medium">Choose Scale</div>
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mb-16 font-light">* 1 credit = 1 query</p>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 mb-12 w-full">
          {/* Extra Credits */}
          <div className="bg-[#14171c] p-10 rounded-[5px] border border-gray-800 flex flex-col justify-between hover:border-gray-600 transition-colors duration-300">
            <div>
              <div className="text-gray-500 font-bold tracking-widest text-xs uppercase mb-6">Extra Credits</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Top up anytime. Credits never expire.</h3>
              <p className="text-gray-400 font-light text-base md:text-lg mb-8 leading-relaxed">
                Need more queries this month? Buy credits on any plan. Extra credits stack on top of your monthly allowance and never expire.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#2a2f38] text-gray-300 px-4 py-2 rounded-full text-sm font-medium">$50 · 1,000 credits</span>
              <span className="bg-[#2a2f38] text-gray-300 px-4 py-2 rounded-full text-sm font-medium">Never expire</span>
              <span className="bg-[#2a2f38] text-gray-300 px-4 py-2 rounded-full text-sm font-medium">Any plan</span>
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-[#14171c] p-10 rounded-[5px] border border-gray-800 flex flex-col justify-between hover:border-gray-600 transition-colors duration-300">
            <div>
              <div className="text-gray-500 font-bold tracking-widest text-xs uppercase mb-6">Enterprise</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Need something bigger?</h3>
              <p className="text-gray-400 font-light text-base md:text-lg mb-8 leading-relaxed">
                Custom volume, dedicated capacity, extra data sources, SLAs, SSO, better support. For teams daring to do something bigger.
              </p>
            </div>
            <div>
              <a href="#" className="inline-flex items-center gap-2 text-white border-b border-white hover:text-[#199C16] hover:border-[#199C16] pb-1 transition-colors text-lg font-medium">
                Let's talk.
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PricingSection;
