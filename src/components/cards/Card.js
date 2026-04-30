import PropTypes from 'prop-types'

const Card = ({ text, img, link }) => {
  return (
    <div className="card">
      <div className="w-fit cardContent">
        <img src={img} alt="toolLogo"/>
        <p className='aboutText text-2 lg:text-[15px]'>
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
