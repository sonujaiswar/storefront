import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CountriesState {
  countryCode: string;
  subdivisions: string;
}

const initialState: CountriesState = {
  countryCode: "IN",
  subdivisions: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocationFormField: (
      state,
      action: PayloadAction<{ field: keyof CountriesState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { setLocationFormField } = locationSlice.actions;
export default locationSlice.reducer;
