import DialogModel from "@/components/layouts/dialog/DialogModel";
import { dialogToggle } from "@/controllers/slices/dialogSlice";
import { useDispatch } from "react-redux";

export default function Addaddress() {
  const dispatch = useDispatch();
  return (
    <>
      <DialogModel dialogTitle="Add Address">This is sample</DialogModel>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(dialogToggle())}
      >
        Add Address
      </button>
    </>
  );
}
