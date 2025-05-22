import { UserBasicTypes, UserDOBTypes } from "@/types/user/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: UserBasicTypes;
  gender: string | null;
  dob: string | null;
}

const initialState: UserState = {
  user: { first_name: "", last_name: "" },
  dob: null,
  gender: "",
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
  },
});

export const { userSetFullName, userSetDOB } = userSlice.actions;
export default userSlice.reducer;
