import PropTypes from 'prop-types'
import ProfileCard from '../cards/ProfileCard';



const Story= ({ mainText, storyText, paraText }) => {
  return (
    <>
    <div className='mainSection3'>
        <div class="section1">
            <div class="section">
                <h1 className="text">{mainText}</h1>
                <p className="subText">{paraText}</p>
            </div>
        </div>

        <div class="section4">
            <div class="storyNav">
                <ProfileCard/>
                <p>{storyText}</p>
            </div>
           
        </div> 
    </div>
   
    </>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

Story.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  
}

export default Story
