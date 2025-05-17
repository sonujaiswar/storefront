import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SessionState {
  isProtectedMode: boolean;
  isAuthenticated: boolean;
}

const sessionState: SessionState = {
  isProtectedMode: false,
  isAuthenticated: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState: sessionState,
  reducers: {
    sessionToggleMode: (state) => {
      state.isProtectedMode = !state.isProtectedMode;
      state.isAuthenticated = !state.isAuthenticated;
    },
    sessionSetProtectedMode: (state, action: PayloadAction<boolean>) => {
      state.isProtectedMode = action.payload;
    },
    sessionSetAuthMode: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    sessionReset: () => sessionState,
  },
});

export const {
  sessionToggleMode,
  sessionSetProtectedMode,
  sessionSetAuthMode,
  sessionReset,
} = sessionSlice.actions;
export default sessionSlice.reducer;
