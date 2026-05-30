import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      const price = parseFloat(newItem.price) || 0; // Handle string/number prices safely
      
      state.totalQuantity++;
      state.totalAmount += price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: price,
          quantity: 1,
          totalPrice: price,
          image: newItem.image,
          icon: newItem.icon,
          color: newItem.color
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
