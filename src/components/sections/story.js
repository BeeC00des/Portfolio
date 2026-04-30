import PropTypes from 'prop-types'
import ProfileCard from '../cards/ProfileCard';



const Story= ({ mainText, storyText, paraText }) => {
  return (
    <>
    <div className='flex flex-col md:flex-row mt-[30px] md:mt-[70px] px-[25px] md:px-[35px] gap-8 md:gap-0'>
        <div className="w-full md:w-1/2 flex justify-start items-center">
            <div className="section">
                <h1 className="text">{mainText}</h1>
                <p className="subText mt-2">{paraText}</p>
            </div>
        </div>

        <div className="w-full md:w-1/2">
            <div className="flex flex-col items-center md:items-end w-full">
                <ProfileCard/>
                {storyText && <p className="mt-4">{storyText}</p>}
            </div>
        </div> 
    </div>
   
    </>
  )
}



Story.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  
}

export default Story
