import { UserTypes } from "@/types/user/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userState: UserTypes = {
  first_name: "",
  last_name: "",
};

const initialState = {
  user: userState,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFullName: (state, action: PayloadAction<UserTypes>) => {
      state.user = action.payload;
    },
    userFullNameReset: (state) => {
      state.user = userState;
    },
  },
});

export const { userFullName, userFullNameReset } = userSlice.actions;
export default userSlice.reducer;
