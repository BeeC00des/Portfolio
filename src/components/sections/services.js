import Header from "components/layouts/Header";

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
  <h2 className="text-[7.5vw] md:text-[4rem] lg:text-[5rem] leading-[1.1] font-serif tracking-tight text-white whitespace-nowrap">
    Bola is <span className="relative inline-block text-white mx-1 md:mx-2">{crossed}<Scribble /></span> {clear}
  </h2>
);

const Services = () => {
  return (
    <div className="">
      <Header title="BeeC00des" />
      <div className="flex flex-col gap-1 md:gap-3 px-[55px] py-10 scale-95 md:scale-100 origin-left md:origin-center">
        <IdeaRow crossed="clutter" clear="clarity" />
        <IdeaRow crossed="hallucinations" clear="trust" />
        <IdeaRow crossed="answers" clear="knowledge" />
        <IdeaRow crossed="static" clear="fresh data" />
        <IdeaRow crossed="hype" clear="depth" />
        <IdeaRow crossed="just data" clear="solid facts" />
        <IdeaRow crossed="drift" clear="a compass" />
      </div>
      <div>add it here</div>
    </div>
  );
};

export default Services;