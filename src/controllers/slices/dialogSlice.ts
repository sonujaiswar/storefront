import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DialogState {
  isOpen: boolean;
}

const initialState: DialogState = {
  isOpen: false,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    dialogSetState: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    dialogToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    dialogReset: (state) => {
      state.isOpen = false;
    },
  },
});

export const { dialogSetState, dialogReset, dialogToggle } =
  dialogSlice.actions;
export default dialogSlice.reducer;
