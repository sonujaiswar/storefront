import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SessionState {
  isProtectedMode: boolean;
  isAuthenticated: boolean;
  isNewUser: boolean;
}

const sessionState: SessionState = {
  isProtectedMode: false,
  isAuthenticated: false,
  isNewUser: false,
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
    sessionSetNewUser: (state, action: PayloadAction<boolean>) => {
      state.isNewUser = action.payload;
    },
    sessionReset: () => sessionState,
  },
});

export const {
  sessionToggleMode,
  sessionSetProtectedMode,
  sessionSetAuthMode,
  sessionReset,
  sessionSetNewUser,
} = sessionSlice.actions;
export default sessionSlice.reducer;
