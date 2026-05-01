import PropTypes from 'prop-types'
import Button from "../Buttons/Button"
// import { BrowserRouter as  Link } from 'react-router-dom';



const Card = ({ text, year, title, link }) => {

  const openInNewTab = (url) => {
    if (url) {
      window.open(url, "noreferrer");
    }
  };

  return (
    <div className="w-full h-full min-h-[170px] rounded-[5px] bg-[#14171c] flex flex-col">
      <div className="cardContent">
        <div>
          <span className="supText">{year}</span>
          <p className='cardTitle'>{title}</p>
          <p className='cardText'>{text}</p>
          <div className="mt-2">
            {link && (
              <Button text='View Project' onClick={() => openInNewTab(link)} />
            )}
          </div>
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
