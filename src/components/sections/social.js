import PropTypes from 'prop-types';
import SocialBtn from '../Buttons/socialBtn';

import instagramIcon from '@iconify/icons-mdi/instagram';
import twitterIcon from '@iconify/icons-mdi/twitter';
import githubIcon from '@iconify/icons-mdi/github';
import linkedinIcon from '@iconify/icons-mdi/linkedin';

const instag = instagramIcon;
const tweet = twitterIcon;
const github = githubIcon;
const linkedIn = linkedinIcon;

const Social = ({ mainText, subText }) => {
  return (
    <>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 sm:px-[45px] py-10 gap-6 sm:gap-0'>
        <div>
          <div className="section">
            <h1 className="text">{mainText}</h1>
            <p className="smallText">{subText}</p>
          </div>

          <div className="section mt-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <h1 className="text">Available for new opportunities</h1>
            </div>
            <p className="smallText">Lagos, Nigeria • West Africa Time (WAT)</p>
          </div>
        </div>

        <div className="flex flex-row  gap-3">
          <SocialBtn img={instag} />
          <SocialBtn img={linkedIn} />
          <SocialBtn img={tweet} />
          <SocialBtn img={github} />
        </div>
      </div>
    </>
  );
};

Social.propTypes = {
  text: PropTypes.string,
  mainText: PropTypes.string,
  subText: PropTypes.string,
};

export default Social;
