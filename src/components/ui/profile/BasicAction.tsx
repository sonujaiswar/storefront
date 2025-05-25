import { Divider } from "@mui/material";
import EditNameAction from "./EditNameAction";
import EditDOBAction from "./EditDOBAction";
import EditGenderAction from "./EditGenderAction";

export default function BasicAction() {
  return (
    <>
      <EditNameAction />
      <Divider sx={{ my: 1 }} />
      <EditDOBAction />
      <Divider sx={{ my: 1 }} />
      <EditGenderAction />
    </>
  );
}
