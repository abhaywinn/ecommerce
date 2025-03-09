import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state) => {
      state.value += 1;
    },
    decrementQuantity: (state) => {
      state.value -= 1;
    },
    removeCart: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementQuantity, decrementQuantity, removeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
