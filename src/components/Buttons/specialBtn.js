import PropTypes from 'prop-types'

const specialBtn = ({ color, text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      // style={{ backgroundColor: color }}
      className={` ${className} bg-[#199C16] text-white px-5 py-2.5 cursor-pointer text-[15px] rounded-bl-[3px]`}
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
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default specialBtn
