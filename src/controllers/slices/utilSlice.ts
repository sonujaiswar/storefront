import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UtilsState = {
  path: string;
};

const initialState: UtilsState = {
  path: "/",
};

export const utilsSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    utilSetStripLocale: (state, action: PayloadAction<string>) => {
      const path = action.payload;
      const parts = path.split("/");
      if (parts.length > 2 && /^[a-z]{2}-[a-z]{2}$/i.test(parts[1])) {
        state.path = "/" + parts.slice(2).join("/");
      } else {
        state.path = path;
      }
    },
    utilReset: () => initialState,
  },
});

export const { utilSetStripLocale, utilReset } = utilsSlice.actions;
export default utilsSlice.reducer;
