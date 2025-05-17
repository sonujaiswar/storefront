import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartState = {
  CartItemsList: [1],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    // settingsMode: (state, action: PayloadAction<boolean>) => {
    //   state.isProtectedMode = action.payload;
    // },
    cartItemList: (state) => {
      state.CartItemsList = state.CartItemsList;
    },
    cartToggleItem: (state) => {
      state.CartItemsList = state.CartItemsList.length === 1 ? [] : [1];
    },
  },
});

export const { cartItemList, cartToggleItem } = cartSlice.actions;
export default cartSlice.reducer;
