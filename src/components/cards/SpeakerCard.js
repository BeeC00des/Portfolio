import PropTypes from 'prop-types';

const SpeakerCard = ({ name, role, img, marginTop }) => {
  return (
    <div className={`flex flex-col w-full ${marginTop}`}>
      <div className="bg-[#14171c] rounded-md p-3 shadow-xl mb-3 transition-transform duration-500 hover:-translate-y-3 cursor-pointer">
        <div className="w-full aspect-[3/4] overflow-hidden bg-[#31363B] rounded-sm">
          <img 
            src={img} 
            alt={name} 
            className="w-full h-full object-cover filter  transition-all duration-500" 
          />
        </div>
      </div>
      <div className="text-left mt-2 px-1">
        <h3 className="text-[rgba(255,255,255,0.89)] font-bold text-lg tracking-wide mb-1 uppercase drop-shadow-md">
          {name}
        </h3>
        <p className="text-[#13B90F] text-sm tracking-tight">
          {role}
        </p>
      </div>
    </div>
  );
};

SpeakerCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
};

SpeakerCard.defaultProps = {
  marginTop: 'mt-0',
};

export default SpeakerCard;
