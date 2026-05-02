import React from 'react';
import { Icon } from '@iconify/react';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-[#14171c] rounded-xl p-5 flex flex-col justify-between relative hover:-translate-y-1 transition-transform cursor-pointer shadow-lg border border-[#31363B]/50 h-auto min-h-[160px]">
      <div className="absolute top-4 right-4">
        <Icon icon={icon} className="text-2xl" style={{ color: color }} />
      </div>
      <div>
        <h3 className="text-white text-lg font-bold mb-1 mt-1">{title}</h3>
        <p className="text-gray-400 text-sm font-mono mb-4">{value}</p>
      </div>
      <button className="mt-auto w-full bg-[#199C16] hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2">
        <Icon icon="mdi:cart-outline" className="text-lg" /> Shop Now
      </button>
    </div>
  );
};

export default StatCard;
