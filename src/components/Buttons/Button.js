import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Button = ({ color, text, onClick, link }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
     <Link to={link} >{text}</Link> 
    </button>
  )
}

Button.defaultProps = {
 color: 'black',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
