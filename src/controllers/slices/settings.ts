import { SettingState } from "@/types/settings/settingsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const settingsState: SettingState = {
  isProtectedMode: false,
  isDrawerOpen: true,
  isMobile: false,
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
    settingsIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    settingsToggleMode: (state) => {
      state.isProtectedMode = !state.isProtectedMode;
    },
    settingSetProtectedMode: (state, action: PayloadAction<boolean>) => {
      state.isProtectedMode = action.payload;
    },
  },
});

export const {
  settingsToggleDrawer,
  settingsIsMobile,
  settingsToggleMode,
  settingSetProtectedMode,
} = settingsSlice.actions;
export default settingsSlice.reducer;
