import PropTypes from 'prop-types'

const Card = ({ text, img, link }) => {
  return (
    <div className="w-full md:w-[30%] card">
      <div className="cardContent py-[4px] px-[4px] lg:py-[10px] lg:px-[15px]">
        <img src={img} alt="toolLogo"/>
        <p className='aboutText text-[10px] lg:text-[15px]'>
          {text}
        </p>
      </div> 
  </div>
  )
}


Card.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Card;

