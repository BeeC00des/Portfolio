// import PropTypes from 'prop-types'
import profile from '../../assets/images/portfolio.png'

const Card = ({ text, subtext, link }) => {
  return (
    <div className="profileCard">
      <div className="">
        <img  src={profile} alt="profile" className="profileImg"/>
      </div> 
  </div>
  )
}



export default Card;


