import { UserBasicTypes, UserDOBTypes } from "@/types/user/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { use } from "react";

interface UserState {
  user: UserBasicTypes;
  gender: string | null;
  dob: string | null;
  phone: string | null;
}

const initialState: UserState = {
  user: { first_name: "", last_name: "" },
  dob: "",
  gender: "",
  phone: "",
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
  },
});

export const { userSetFullName, userSetDOB, userSetGender, userSetPhone } =
  userSlice.actions;
export default userSlice.reducer;
