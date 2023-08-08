import PropTypes from 'prop-types'

const Card = ({ text, img, link }) => {
  return (
    <div className="card">
      <div className="cardContent">
        <img src={img} alt="toolLogo"/>
        <p className='aboutText'>
          {text}
        </p>
      </div> 
  </div>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

Card.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Card;
