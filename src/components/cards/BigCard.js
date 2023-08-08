import PropTypes from 'prop-types'
import Button from "../Buttons/Button"

const Card = ({ text,year ,title,link }) => {
  return (
    <div className="card2">
      <div className="cardContent">
        <div>
          <span class="supText">{year}</span>
          <p className='cardTitle'>{title}</p>
          <p className='cardText'>{text}</p>
          <Button text="Demo"/>
        </div>
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
