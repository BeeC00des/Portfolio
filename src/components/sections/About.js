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
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className='mainSection px-[35px] py-0 overflow-hidden' ref={sectionRef}>
        <div 
          className={`section1 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[150px] opacity-0'
          }`}
        >
            <div className="section">
                <h1 className="bigText">{mainText}</h1>
                <p className="smallText">{subText}</p>
            </div>
        </div>

        <div 
          className={`section3 transition-all duration-1000 ease-out delay-150 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[150px] opacity-0'
          }`}
        >
            <div className="section">
                <p className='aboutText'>{text1}</p>
                <p className='aboutText'>{text2}</p>
            </div>
        </div> 
    </div>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

About.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  
}

export default About
