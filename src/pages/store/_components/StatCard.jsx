import React from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';

const StatCard = ({ id, title, value, price, icon, color, image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: id || title, // fallback to title if no id
      title,
      price: price || 10, // dummy price if not provided
      icon,
      color,
      image
    }));
  };

  return (
    <div className="bg-card rounded-xl p-5 flex flex-col justify-between relative hover:-translate-y-1 transition-transform cursor-pointer shadow-lg border border-border/50 h-auto min-h-[160px] overflow-hidden">
      {!image && (
        <div className="absolute top-4 right-4 z-10">
          <Icon icon={icon} className="text-2xl" style={{ color: color }} />
        </div>
      )}

      {image && (
        <div className="-mx-5 -mt-5 mb-4 h-40 bg-card-muted relative overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="z-10">
        <h3 className="text-foreground text-lg font-bold mb-1 mt-1">{title}</h3>
        <p className="text-[#199C16] text-sm font-mono mb-4">{value}</p>
      </div>
      <button 
        onClick={handleAddToCart}
        className="mt-auto w-full bg-[#199C16] hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2"
      >
        <Icon icon="mdi:cart-outline" className="text-lg" /> Add to Cart
      </button>
    </div>
  );
};

export default StatCard;
