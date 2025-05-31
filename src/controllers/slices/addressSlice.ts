import { AddressTypes, AddressTypesUI } from "@/types/address/addressTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AddressState {
  addresses: AddressTypes[];
  addressForm: AddressTypesUI;
  isEditing: boolean;
}

const initialState: AddressState = {
  addresses: [],

  addressForm: {
    addressid: "",
    fullname: "",
    phone: "",
    addressline1: "",
    addressline2: "",
    city: "",
    province: "",
    postalcode: "",
    landmark: "",
    country: "",
    isprimary: false,
  },
  isEditing: false,
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addressSetForm: (state, action: PayloadAction<AddressTypesUI>) => {
      state.addressForm = action.payload;
    },
    addressSetSave: (state, action: PayloadAction<AddressTypes>) => {
      const index = state.addresses.findIndex(
        (address) => address.addressid === action.payload.addressid
      );

      if (index !== -1) {
        // Update existing
        state.addresses[index] = action.payload;
      } else {
        // Add new
        state.addresses.push(action.payload);
      }
    },

    addressSetDelete: (state, action: PayloadAction<string>) => {
      state.addresses = state.addresses.filter(
        (address) => address.addressid !== action.payload
      );
    },
    addressSetEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    addressSetAll: (state, action: PayloadAction<AddressTypes[]>) => {
      state.addresses = action.payload;
    },
  },
});

export const {
  addressSetEditing,
  addressSetForm,
  addressSetDelete,
  addressSetSave,
  addressSetAll,
} = addressSlice.actions;
export default addressSlice.reducer;
