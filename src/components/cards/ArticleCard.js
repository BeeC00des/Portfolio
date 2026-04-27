import PropTypes from 'prop-types';

const ArticleCard = ({ title, excerpt, date, readTime, link, img }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer" 
      className="flex flex-col bg-[#14171c] rounded-md overflow-hidden shadow-lg border border-transparent hover:border-[#31363B] transition-colors duration-300 w-full h-full text-left"
    >
      <div className="h-44 w-full overflow-hidden bg-[#31363B]">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-[rgba(255,255,255,0.89)] text-[1.1rem] leading-tight mb-3">
            {title}
          </h3>
          <p className="text-[13px] font-light text-[rgba(255,255,255,0.6)] leading-relaxed mb-6">
            {excerpt}
          </p>
        </div>
        <div className="text-[#13B90F] text-[12px] font-light">
          {date} <span className="mx-1">·</span> {readTime}
        </div>
      </div>
    </a>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ArticleCard;
