import * as React from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/stateTypes";
import { dialogSetState } from "@/controllers/slices/dialogSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DialogModel({
  dialogTitle,
  children,
}: Readonly<{ dialogTitle: string; children: React.ReactNode }>) {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.dialog.isOpen);

  const handleClose = () => {
    dispatch(dialogSetState(false));
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="genericDialog"
        open={isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="genericDialog">
          {dialogTitle}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{children}</DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
