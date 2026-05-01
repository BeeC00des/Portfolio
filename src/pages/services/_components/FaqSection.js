import React, { useState } from 'react';

// Adapted the FAQ questions from the screenshot to fit a developer portfolio context
const faqData = [
  { question: "What is BeeC00des?", answer: "BeeC00des is my professional software engineering portfolio and digital service offering." },
  { question: "Are you a search engine?", answer: "No, but I can build robust search functionalities and integrate complex APIs into your applications." },
  { question: "How is working with you different from using a website builder?", answer: "Custom development provides complete control over architecture, performance, and features that off-the-shelf builders simply cannot match." },
  { question: "Why not just use an agency directly?", answer: "Working with me provides direct communication, agile turnaround times, and a dedicated focus on your specific project needs." },
  { question: "What do developers build with you?", answer: "From scalable SaaS platforms and interactive user interfaces to complex backend architectures and AI integrations." },
  { question: "Who is this service for?", answer: "Startups, established enterprises, and visionary founders looking to bring their digital products to life." },
  { question: "How do I start a project with you?", answer: "Simply reach out via the contact section to schedule an initial consultation and discuss your requirements." },
  { question: "What are your core technologies?", answer: "My core stack includes React, Node.js, Next.js, Tailwind CSS, and various modern web and database technologies." },
  { question: "What kinds of domains do you cover?", answer: "E-commerce, custom portfolios, administrative dashboards, and AI-driven platforms." },
  { question: "How do you stay accurate and up to date?", answer: "Through continuous learning, building open-source projects, and staying active in the global developer community." },
  { question: "How fresh is your tech stack?", answer: "I exclusively use the latest stable releases of modern frameworks and rigorously update dependencies." },
  { question: "Do you work with Claude Agents, OpenAI, N8N and other agentic frameworks?", answer: "Yes! I actively integrate advanced AI APIs and agentic workflows to build intelligent, automated applications." }
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
