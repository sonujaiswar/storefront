import { SettingState } from "@/types/settings/settingsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const settingsState: SettingState = {
  isProtectedMode: false,
  isDrawerOpen: false,
  isNavBarHeaderHeight: 8,
  isDrawerWidth: 240,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: settingsState,
  reducers: {
    // settingsMode: (state, action: PayloadAction<boolean>) => {
    //   state.isProtectedMode = action.payload;
    // },
    settingsToggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
    settingsToggleMode: (state) => {
      state.isProtectedMode = !state.isProtectedMode;
    },
  },
});

export const { settingsToggleDrawer, settingsToggleMode } =
  settingsSlice.actions;
export default settingsSlice.reducer;
