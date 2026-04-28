import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const About = ({ mainText, subText, text1, text2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      className="h-[450px] mx-auto overflow-hidden flex flex-col md:flex-row gap-4 md:gap-0 lg:px-10 px-3"
      ref={sectionRef}
    >
      {/* LEFT */}
      <div
        className={`section1 flex-1 transition-all duration-1000 ease-out transform ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : '-translate-x-[50px] md:-translate-x-[150px] opacity-0'
        }`}
      >
        <div className="section">
          <h1 className="bigText text-3xl md:text-[inherit]">
            {mainText}
          </h1>
          <p className="smallText text-base md:text-[inherit]">
            {subText}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className={`section3 flex-1 transition-all duration-1000 ease-out delay-150 transform ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-[50px] md:translate-x-[150px] opacity-0'
        }`}
      >
        <div className="section">
          <p className="aboutText text-sm md:text-[inherit]">
            {text1}
          </p>
          <p className="aboutText text-sm md:text-[inherit]">
            {text2}
          </p>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

export default About;