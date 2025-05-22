import { AddressTypes, AddressTypesUI } from "@/types/address/addressTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface SecurityState {
  passwordForm: PasswordForm;
}

const initialState: SecurityState = {
  passwordForm: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
};

export const securitySlice = createSlice({
  name: "security",
  initialState,
  reducers: {
    passwordSetFormField: (
      state,
      action: PayloadAction<{ field: keyof PasswordForm; value: string }>
    ) => {
      state.passwordForm[action.payload.field] = action.payload.value;
    },

    passwordResetForm: (state) => {
      state.passwordForm = initialState.passwordForm;
    },
  },
});

export const { passwordSetFormField, passwordResetForm } =
  securitySlice.actions;
export default securitySlice.reducer;
