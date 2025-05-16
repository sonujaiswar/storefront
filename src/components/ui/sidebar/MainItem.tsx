import List from "@mui/material/List";

import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import StoreIcon from "@mui/icons-material/Store";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
export default function MainItem() {
  return (
    <>
      <List component="nav" aria-label="menu list">
        <ListSubheader component="div" id="nested-list-subheader">
          We&apos;re Here to Help
        </ListSubheader>

        <ListItemButton>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItemButton>
      </List>
    </>
  );
}
