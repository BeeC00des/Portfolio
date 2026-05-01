import React from 'react';

const PricingSection = () => {
  const handleContactClick = () => {
    // Replace this with your actual logic (modal, route, etc.)
    console.log("Contact clicked");
  };

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
        {[
          {
            title: "Starter",
            desc: "Kick the tires. Build a prototype. No credit card.",
            price: "FREE",
            highlight: false,
            button: "Start free",
          },
          {
            title: "Explore",
            desc: "For solo builders and automations that need more room to move.",
            price: "$50/month",
            highlight: false,
            button: "Choose Explore",
          },
          {
            title: "Build",
            desc: "For teams shipping projects into production.",
            price: "$200/month",
            highlight: true,
            button: "Choose Build",
          },
          {
            title: "Scale",
            desc: "For high-volume workloads and full production teams.",
            price: "$2K/month",
            highlight: false,
            button: "Choose Scale",
          },
        ].map((plan, idx) => (
          <div
            key={idx}
            className={`bg-[#14171c] p-8 rounded-[5px] flex flex-col transition-colors duration-300 ${
              plan.highlight
                ? "border-[#199C16] border-2 shadow-lg shadow-[#199C16]/10"
                : "border border-gray-800 hover:border-[#199C16]"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#199C16]"></div>
            )}

            <h3 className="text-2xl text-white text-center mb-2 font-medium">
              {plan.title}
            </h3>

            <p className="text-sm text-gray-400 text-center mb-8 min-h-[40px] font-light">
              {plan.desc}
            </p>

            <div className="text-4xl font-bold text-white text-center my-8">
              {plan.price}
            </div>

            <button className="mt-auto pt-8 w-full">
              <div className="w-full bg-[#2a2f38] hover:bg-[#199C16] text-white py-3 rounded-[3px] text-sm transition-colors text-center font-medium">
                {plan.button}
              </div>
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mb-16 font-light">
        * 1 credit = 1 query
      </p>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 mb-12 w-full">
        {/* Extra Credits */}
        <div className="bg-[#14171c] p-10 rounded-[5px] border border-gray-800 flex flex-col justify-between hover:border-gray-600 transition-colors duration-300">
          <div>
            <div className="text-gray-500 font-bold tracking-widest text-xs uppercase mb-6">
              Extra Credits
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Top up anytime. Credits never expire.
            </h3>
            <p className="text-gray-400 font-light text-base md:text-lg mb-8 leading-relaxed">
              Need more queries this month? Buy credits on any plan. Extra credits stack on top of your monthly allowance and never expire.
            </p>
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-[#14171c] p-10 rounded-[5px] border border-gray-800 flex flex-col justify-between hover:border-gray-600 transition-colors duration-300">
          <div>
            <div className="text-gray-500 font-bold tracking-widest text-xs uppercase mb-6">
              Enterprise
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Need something bigger?
            </h3>
            <p className="text-gray-400 font-light text-base md:text-lg mb-8 leading-relaxed">
              Custom volume, dedicated capacity, extra data sources, SLAs, SSO, better support. For teams daring to do something bigger.
            </p>
          </div>

          <div>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 text-white border-b border-white hover:text-[#199C16] hover:border-[#199C16] pb-1 transition-colors text-lg font-medium"
            >
              Let's talk.
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;