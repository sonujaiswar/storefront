import DialogModel from "@/components/layouts/dialog/DialogModel";
import { dialogToggle } from "@/controllers/slices/dialogSlice";
import { RootState } from "@/types/stateTypes";
import { useDispatch, useSelector } from "react-redux";

export default function Addaddress() {
  const dispatch = useDispatch();
  const isEditing = useSelector((state: RootState) => state.address.isEditing);
  return (
    <>
      <DialogModel dialogTitle={isEditing ? `Edit Address` : `Add Address`}>
        This is sample
      </DialogModel>
      <button onClick={() => dispatch(dialogToggle())}>Add Address</button>
    </>
  );
}
