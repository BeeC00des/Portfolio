import NavbarTwo from "components/layouts/NavbarTwo";

const Scribble = () => (
  <svg
    className="absolute inset-0 w-[105%] h-[120%] -left-[2.5%] -top-[10%] pointer-events-none"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
    style={{ zIndex: 10 }}
  >
    <path
      d="M-2,45 C30,60 70,35 102,50 C70,65 30,40 -2,55 C30,45 70,70 102,45"
      stroke="#fff"
      strokeWidth="10"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.85"
    />
  </svg>
);

const IdeaRow = ({ crossed, clear }) => (
  <h2 className="text-[7.5vw] md:text-[2rem] lg:text-[4rem] leading-[1.1] font-bold tracking-tight text-white whitespace-nowrap">
    Bola Likes <span className="relative inline-block text-white mx-1 md:mx-2">{crossed}<Scribble /></span> {clear}
  </h2>
);

const Services = () => {
  return (
    <div className="">
      <NavbarTwo title="BeeC00des" />
      <div className="flex flex-col gap-1 md:gap-3  px-8 md:px-[35px] py-10 scale-95 md:scale-100 origin-left md:origin-center">
        <IdeaRow crossed="spaghetti code" clear="clean code" />
        <IdeaRow crossed="bugs" clear="solutions" />
        <IdeaRow crossed="latency" clear="performance" />
        <IdeaRow crossed="downtime" clear="reliability" />
        <IdeaRow crossed="complexity" clear="simplicity" />
        <IdeaRow crossed="templates" clear="innovation" />
        <IdeaRow crossed="typing" clear="engineering" />
      </div>
      {/* New section translating the Figma design */}
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
    </div>
  );
};

export default Services;