// import React from 'react';

// const Scribble = () => (
//   <svg
//     className="absolute inset-0 w-[105%] h-[120%] -left-[2.5%] -top-[10%] pointer-events-none"
//     preserveAspectRatio="none"
//     viewBox="0 0 100 100"
//     style={{ zIndex: 10 }}
//   >
//     <path
//       d="M-2,45 C30,60 70,35 102,50 C70,65 30,40 -2,55 C30,45 70,70 102,45"
//       stroke="#fff"
//       strokeWidth="10"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       opacity="0.85"
//     />
//   </svg>
// );

// const IdeaRow = ({ crossed, clear }) => (
//   <h2 className="text-[7.5vw] md:text-[3rem] leading-[1.1] font-bold tracking-tight text-white whitespace-nowrap">
//     Bolarinwa <span className="relative inline-block text-white mx-1 md:mx-2">{crossed}<Scribble /></span> {clear}
//   </h2>
// );

// const IdeaSection = () => {
//   return (
//     <div className="flex flex-col items-left justify-center gap-1 md:gap-3 px-8 md:px-[35px] py-10 scale-95 md:scale-100 origin-left md:origin-center">
 
      
//       <IdeaRow crossed="breaks" clear="support people" />
//       <IdeaRow crossed="hate" clear="loves simplicity" />
//       <IdeaRow crossed="destory" clear="builts products" />
//       <IdeaRow crossed="thinks" clear="births  innovation" />
//       <IdeaRow crossed="is not" clear="is a developer advocate" />
     
 
//     </div>
//   );
// };

// export default IdeaSection;




import React from 'react';

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
  <h2 className="text-[7.5vw] md:text-[3rem] leading-[1.1] font-bold tracking-tight text-white whitespace-nowrap">
    Bolarinwa <span className="relative inline-block text-white mx-1 md:mx-2">{crossed}<Scribble /></span> {clear}
  </h2>
);

const IdeaSection = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-1 md:gap-3 px-8 md:px-[35px] py-10 scale-95 md:scale-100 origin-center w-fit mx-auto">
      <IdeaRow crossed="breaks" clear="support people" />
      <IdeaRow crossed="hate" clear="loves simplicity" />
      <IdeaRow crossed="destory" clear="builts products" />
      <IdeaRow crossed="thinks" clear="births  innovation" />
      <IdeaRow crossed="is not" clear="is a developer advocate" />
    </div>
  );
};

export default IdeaSection;