import PropTypes from 'prop-types';
import SocialBtn from '../Buttons/socialBtn';
import { getIcon} from '@iconify/react';

import instagramIcon from '@iconify/icons-mdi/instagram';
import twitterIcon from '@iconify/icons-mdi/twitter';
import githubIcon from '@iconify/icons-mdi/github';
import linkedinIcon from '@iconify/icons-mdi/linkedin';


const instag = instagramIcon ;
const tweet = twitterIcon;
const github = githubIcon ;
const linkedIn =linkedinIcon;
// const test = getIcon('mdi:github');


const Social = ({ mainText, subText, text1, text2, img, onClick }) => {
  return (
    <>
    <div className='mediaSection'>
        <div className="section1">
            <div className="section">
                <h1 className="text">{mainText}</h1>
                <p className="smallText">{subText}</p>
            </div>
        </div>

        <div class="sectionSocial">
                <SocialBtn img={instag}/>
                <SocialBtn img={linkedIn}/>
                <SocialBtn img={tweet}/>
                <SocialBtn img={github}/>  
                {/* <SocialBtn img={test}/>   */}
        </div> 
    </div>
   
    </>
  )
}


Social.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  
}

export default Social
