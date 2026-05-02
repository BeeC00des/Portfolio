import React from 'react';
import { Icon } from '@iconify/react';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-[#14171c] rounded-xl p-5 flex flex-col justify-between relative hover:-translate-y-1 transition-transform cursor-pointer shadow-lg border border-[#31363B]/50 h-32">
      <div className="absolute top-4 right-4">
        <Icon icon={icon} className="text-2xl" style={{ color: color }} />
      </div>
      <h3 className="text-white text-lg font-bold mb-1 mt-4">{title}</h3>
      <p className="text-gray-400 text-sm font-mono">{value}</p>
    </div>
  );
};

export default StatCard;
