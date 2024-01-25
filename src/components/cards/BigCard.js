import PropTypes from 'prop-types'
import Button from "../Buttons/Button"
// import { BrowserRouter as  Link } from 'react-router-dom';



const Card = ({ text, year, title, onClick }) => {

  const urls = [
      "https://zacraclearning.com",
      "https://www.trialoguemedia.com",
      "https://roberttaylormedia.com",
      "https://tender-pare-05e51b.netlify.app/"
    
  ];

const openInNewTab = (url) => {
  window.open(url, "noreferrer");
};



  return (
    <div className="card2">
      <div className="cardContent">
        <div>
          <span class="supText">{year}</span>
          <p className='cardTitle'>{title}</p>
          <p className='cardText'>{text}</p>
          <div>
            {urls.map((url, index) => (  
             <Button key={index}  text='Demo'  onClick={() => openInNewTab(url)}/>
             ))}
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
