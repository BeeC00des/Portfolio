import React, { useState } from 'react';

// Adapted the FAQ questions from the screenshot to fit a developer portfolio context
const faqData = [
  { question: "Mr peter - AI Training", answer: "Ms Bolarinwa has been Our daughter’s AI teacher for over two months and  the training process has been very good. Olivia now knows basic python language and its application,block coding and java script. The process has been impressive and We want Ms Bolarinwa to move to the next level of this training experience with Our Daughter Olivia. Thank you Ms Bolarinwa for your time. God bless you." },
  { question: "Rebacca - Technical Career Consultation", answer: "It was an insightful session. Thank You" },
  { question: "Folashade - Career Job Search Consulation  ", answer: "I received support through portfolio review and job search guidance, which helped me clearly present my skills and approach my applications with confidence. With this direction, I was able to land a job." },
  { question: "Peace ojo - Tech CareerConsultation", answer: "I received clear strategies for landing a job along with consistent support throughout my job search process. This guidance significantly improved my approach and ultimately helped me secure a remote tech role." },
  // { question: "Folashade - ", answer: "" },

];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left group focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl font-serif text-gray-300 group-hover:text-[#199C16] transition-colors pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 group-hover:text-[#199C16] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 font-light text-base md:text-lg pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className="flex flex-col items-center mt-12 mb-32 px-6 w-full max-w-4xl mx-auto">
      <h2 className="text-[#199C16] text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-12 text-center">
        Reviews And Testimonials
      </h2>
      <div className="w-full border-t border-gray-800">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
