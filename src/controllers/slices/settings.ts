import { SettingState } from "@/types/settings/settingsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const settingsState: SettingState = {
  isProtectedMode: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: { isProtectedMode: false },
  reducers: {
    settingsMode: (state, action: PayloadAction<boolean>) => {
      state.isProtectedMode = action.payload;
    },
    settingsToggleMode: (state) => {
      state.isProtectedMode = !state.isProtectedMode;
    },
  },
});

export const { settingsMode, settingsToggleMode } = settingsSlice.actions;
export default settingsSlice.reducer;
