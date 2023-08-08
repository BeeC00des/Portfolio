import PropTypes from 'prop-types'

const specialBtn = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      // style={{ backgroundColor: color }}
      className='btnSpecial'
    >
      {text}
    </button>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

specialBtn.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default specialBtn
