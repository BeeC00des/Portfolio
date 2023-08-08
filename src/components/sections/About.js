import PropTypes from 'prop-types';
// import SocialBtn from './socialBtn';

const About= ({ mainText, subText, text1, text2, img, onClick }) => {
  return (
    <>
    <div className='mainSection'>
        <div class="section1">
            <div class="section">
                <h1 className="bigText">{mainText}</h1>
                <p className="smallText">{subText}</p>
            </div>
        </div>

        <div class="section3">
            <div class="section">
                <p className='aboutText'>{text1}</p>
                <p className='aboutText'>{text2}</p>
            </div>
        </div> 
    </div>
   
    </>
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
