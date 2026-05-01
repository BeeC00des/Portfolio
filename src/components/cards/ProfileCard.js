
// import profileBack from '../../assets/images/portfolio.png'
// import profileFront from '../../assets/images/bola-img.jpeg'

// const Card = () => {
//   return (
//     <div className="flex justify-center md:justify-end px-0 md:px-[25px] group [perspective:1000px] cursor-pointer w-full">
//       <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[4/5] sm:h-[500px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
//         {/* Front Image */}
//         <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
//           <img src={profileFront} alt="profile front" className="w-full h-full object-cover rounded-lg shadow-2xl" />
//         </div>
        
//         {/* Back Image */}
//         <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
//           <img src={profileBack} alt="profile back" className="w-full h-full object-cover rounded-lg shadow-2xl" />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Card;






import { useState } from 'react';
import photo1 from '../../assets/images/portfolio.png'
import photo2 from '../../assets/images/bola-img.jpeg'
import photo3 from '../../assets/images/photo-3.jpeg'

const images = [photo1, photo2, photo3];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Card = () => {
  const [selectedImage] = useState(() => getRandomImage());

  return (
    <div className="flex justify-center md:justify-end px-0 md:px-[25px] w-full">
      <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[4/5] sm:h-[500px] group cursor-pointer">

  
        <img
          src={selectedImage}
          alt="profile"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
        />

    

        {/* Placeholder overlay — like the Hero's .placeholder div */}
        <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      </div>
    </div>
  )
}

export default Card;


