import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: "en-in",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    languageSet: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { languageSet } = languageSlice.actions;
export default languageSlice.reducer;
