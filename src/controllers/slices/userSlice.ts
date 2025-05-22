import { UserBasicTypes, UserDOBTypes } from "@/types/user/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userBasicTypes: UserBasicTypes = {
  first_name: "",
  last_name: "",
};
const userDOBTypes: UserDOBTypes = {
  dob: null,
};

const initialState = {
  user: userBasicTypes,
  dob: userDOBTypes,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSetFullName: (state, action: PayloadAction<UserBasicTypes>) => {
      state.user = action.payload;
    },
    userSetDOB: (state, action: PayloadAction<UserDOBTypes>) => {
      state.dob = action.payload;
    },
  },
});

export const { userSetFullName, userSetDOB } = userSlice.actions;
export default userSlice.reducer;
