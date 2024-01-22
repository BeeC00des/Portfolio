import PropTypes from 'prop-types'
import Button from "../Buttons/Button"



const Card = ({ text, year, title, onClick }) => {
  const data = [
    {
      "0": "https://zacraclearning.com",
      "1": "https://www.trialoguemedia.com/",
      "2": "https://roberttaylormedia.com/",
      "3": 'https://tender-pare-05e51b.netlify.app/'
    }
  ];


  return (
    <div className="card2">
      <div className="cardContent">
        <div>
          <span class="supText">{year}</span>
          <p className='cardTitle'>{title}</p>
          <p className='cardText'>{text}</p>
          
          {/* <ul>
            {data.map((item,i) => {
              return <li>{item[i]}</li>;
            })}
          </ul> */}

          <Button text="Demo" link ="https://roberttaylormedia.com"/>
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
