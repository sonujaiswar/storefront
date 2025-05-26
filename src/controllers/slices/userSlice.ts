import { UserBasicTypes, UserTypes } from "@/types/user/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { use } from "react";

const initialState: UserTypes = {
  user: { first_name: "", last_name: "" },
  dob: "",
  gender: "",
  phone: "",
  email: "",
  isEmailVerified: false,
  photoURL: "",
  uid: "",
  providerId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSetFullName: (state, action: PayloadAction<UserBasicTypes>) => {
      state.user = action.payload;
    },
    userSetDOB: (state, action: PayloadAction<string>) => {
      state.dob = action.payload;
    },
    userSetGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    userSetPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    userSetEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    userSetEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.isEmailVerified = action.payload;
    },
    userSetPhotoURL: (state, action: PayloadAction<string>) => {
      state.photoURL = action.payload;
    },
    userSetUID: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    },
    userSetProviderId: (state, action: PayloadAction<string>) => {
      state.providerId = action.payload;
    },
  },
});

export const {
  userSetFullName,
  userSetDOB,
  userSetGender,
  userSetPhone,
  userSetEmail,
  userSetEmailVerified,
  userSetPhotoURL,
  userSetUID,
  userSetProviderId,
} = userSlice.actions;
export default userSlice.reducer;
