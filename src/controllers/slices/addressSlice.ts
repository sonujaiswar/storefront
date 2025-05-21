import { AddressTypes, AddressTypesUI } from "@/types/Address/AddressTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AddressState {
  addresses: AddressTypes[];
  addressForm: AddressTypesUI;
  isEditing: boolean;
}

const initialState: AddressState = {
  addresses: [],
  addressForm: {
    full_name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    landmark: "",
    country: "",
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
        (address) => address.address_id === action.payload.address_id
      );
      console.log(`Set Save : `, action.payload);
      if (index !== -1) {
        // Update existing
        state.addresses[index] = action.payload;
      } else {
        // Add new
        state.addresses.push(action.payload);
      }
    },
    addressSetFormField: (
      state,
      action: PayloadAction<{ field: keyof AddressTypesUI; value: string }>
    ) => {
      state.addressForm[action.payload.field] = action.payload.value;
    },

    addressResetForm: (state) => {
      state.addressForm = initialState.addressForm;
    },
    addressSetDelete: (state, action: PayloadAction<string>) => {
      state.addresses = state.addresses.filter(
        (address) => address.address_id !== action.payload
      );
    },
    addressSetEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
  },
});

export const {
  addressSetEditing,
  addressSetForm,
  addressSetDelete,
  addressSetSave,
  addressResetForm,
  addressSetFormField,
} = addressSlice.actions;
export default addressSlice.reducer;
