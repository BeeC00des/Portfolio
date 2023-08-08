import PropTypes from 'prop-types'
import { Icon } from '@iconify/react';

const SocialBtn = ({ img, onClick }) => {
  return (
    <button
      className='btnSocial'
    >

    <Icon icon={img} color="white"  width="35" height="35" />
    {/* <img src={img} alt="media"/> */}
    </button>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

SocialBtn.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default SocialBtn;
