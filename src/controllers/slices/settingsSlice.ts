import { SettingState } from "@/types/settings/settingsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const settingsState: SettingState = {
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

    settingReset: () => settingsState,
  },
});

export const {
  settingsToggleDrawer,
  settingsIsMobile,

  settingReset,
} = settingsSlice.actions;
export default settingsSlice.reducer;
