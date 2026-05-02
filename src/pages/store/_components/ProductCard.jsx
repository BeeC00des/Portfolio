import React from 'react';

const ProductCard = ({ title, subtitle, bgClass, buttonText }) => {
  return (
    <div className={`rounded-xl p-6 h-[280px] flex flex-col justify-between ${bgClass} relative overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1`}>
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-0"></div>
      
      {/* Background decoration elements */}
      <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-2xl z-0"></div>
      <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-black/10 blur-xl z-0"></div>

      <h3 className="text-white text-3xl font-bold z-10 tracking-tight">{title}</h3>
      <div className="z-10 flex justify-between items-end w-full">
        <span className="text-white/90 text-sm font-medium">{subtitle}</span>
        <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform">
          {buttonText || 'Obtain'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
