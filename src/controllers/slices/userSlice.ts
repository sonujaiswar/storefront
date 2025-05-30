import { UserTypes } from "@/types/user/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserTypes = {
  firstname: "",
  lastname: "",
  gender: "",
  dob: null,
  phone: "",
  email: "",
  isemailverified: false,
  photourl: "",
  uid: "",
  providerid: "",
  password: "",
  language: "",
  currency: "",
  timezone: "",
  country: "",
  subdivision: "",
  city: "",
  postalcode: "",
  createdat: "",
  lastloginat: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSetFullName: (
      state,
      action: PayloadAction<{ firstname: string; lastname: string }>
    ) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },

    userAuthSet: (state, action: PayloadAction<UserTypes>) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.dob = action.payload.dob;
      state.gender = action.payload.gender;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.isemailverified = action.payload.isemailverified;
      state.photourl = action.payload.photourl;
      state.providerid = action.payload.providerid;
      state.password = action.payload.password;
      state.language = action.payload.language;
      state.currency = action.payload.currency;
      state.timezone = action.payload.timezone;
      state.country = action.payload.country;
      state.subdivision = action.payload.subdivision;
      state.city = action.payload.city;
      state.postalcode = action.payload.postalcode;
      state.createdat = action.payload.createdat;
      state.lastloginat = action.payload.lastloginat;
      state.uid = action.payload.uid;
    },
    userSetPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    userSetDOB: (state, action: PayloadAction<string>) => {
      state.dob = action.payload;
    },
    userSetGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
});

export const {
  userAuthSet,
  userSetFullName,
  userSetPhone,
  userSetDOB,
  userSetGender,
} = userSlice.actions;
export default userSlice.reducer;
