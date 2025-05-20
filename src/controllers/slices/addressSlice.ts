import { AddressTypesUI } from "@/types/Address/AddressTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AddressState {
  addresses: AddressTypesUI[];
  isEditing: boolean;
}

const initialState: AddressState = {
  addresses: [],
  isEditing: false,
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addressSet: (state, action: PayloadAction<AddressTypesUI[]>) => {
      state.addresses = action.payload;
    },
    addressSetEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
  },
});

export const { addressSet, addressSetEditing } = addressSlice.actions;
export default addressSlice.reducer;
