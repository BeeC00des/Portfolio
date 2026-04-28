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
      ref={sectionRef}
      className="flex flex-col md:flex-row gap-5 md:gap-8 mx-5 md:mx-9 min-h-[450px] overflow-hidden"
    >
      {/* LEFT */}
      <div
        className={`flex-1 transition-all duration-1000 ease-out transform ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : '-translate-x-[50px] opacity-0'
        }`}
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            {mainText}
          </h1>
          <p className="text-base md:text-lg">
            {subText}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className={`flex-1 transition-all duration-1000 ease-out delay-150 transform ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-[50px] opacity-0'
        }`}
      >
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            {text1}
          </p>
          <p className="text-sm md:text-base leading-relaxed">
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