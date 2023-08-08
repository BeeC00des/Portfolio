import PropTypes from 'prop-types'

const CardOverlay = ({ text ,title }) => {
  return (
    <div className="card">
      <div className="cardContent">
        <div>
         
          <p className='cardTitle'>{title}</p>
          <p className='cardText'>{text}</p>
        </div>
      </div> 
  </div>
  )
}

// Button.defaultProps = {
//   color: 'steelblue',
// }

CardOverlay.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default CardOverlay;
