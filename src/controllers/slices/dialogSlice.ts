import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DialogState {
  isOpen: boolean;
  key?: string | null;
}

const initialState: DialogState = {
  isOpen: false,
  key: null,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    dialogSetKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
    dialogSetState: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    dialogToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    dialogReset: (state) => {
      state.isOpen = false;
      state.key = null;
    },
  },
});

export const { dialogSetKey, dialogSetState, dialogReset, dialogToggle } =
  dialogSlice.actions;
export default dialogSlice.reducer;
