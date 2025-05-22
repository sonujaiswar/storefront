import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface areaState {
  countryCode: string | null | undefined;
  provinceCode: string | null | undefined;
}
export interface CountriesState {
  area: areaState;
}

const initialState: CountriesState = {
  area: {
    countryCode: "",
    provinceCode: "",
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocationSave: (state, action: PayloadAction<CountriesState>) => {
      state.area = action.payload.area;
    },
  },
});

export const { setLocationSave } = locationSlice.actions;
export default locationSlice.reducer;
