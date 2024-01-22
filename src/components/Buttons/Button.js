import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      // style={{ backgroundColor: color }}
      className='btn'
    >
      <Link to={{ pathname: '/other' }}>{text}</Link>
    </button>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
