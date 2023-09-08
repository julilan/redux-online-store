import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
