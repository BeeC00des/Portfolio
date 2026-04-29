
import profileBack from '../../assets/images/portfolio.png'
import profileFront from '../../assets/images/bola-img.jpeg'

const Card = () => {
  return (
    <div className="profileCard group [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full min-h-[500px] min-w-[400px] sm:w-[400px] sm:h-[500px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Image */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <img src={profileFront} alt="profile front" className="w-full h-full object-cover rounded-lg shadow-2xl" />
        </div>
        
        {/* Back Image */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img src={profileBack} alt="profile back" className="w-full h-full object-cover rounded-lg shadow-2xl" />
        </div>

      </div>
    </div>
  )
}

export default Card;


