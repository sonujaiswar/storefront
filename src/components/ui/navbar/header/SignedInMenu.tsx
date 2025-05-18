import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { NavigationRoutes } from "@/constants/NavigationRoutes";
import { Box } from "@mui/material";
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function SignedInMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const t = useTranslations("SignedDropDownOptions");

  return (
    <>
      <Button
        onClick={handleClick}
        id="actionbutton"
        aria-controls={open ? "actionmenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        variant="text"
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Avatar
          alt="Attirebella"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
      </Button>
      <StyledMenu
        id="actionmenu"
        slotProps={{
          list: {
            "aria-labelledby": "actionbutton",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        <SignedInMenuAction
          handleClose={handleClose}
          href={NavigationRoutes.dashboardPage.url}
        >
          {NavigationRoutes.dashboardPage.icon}

          {t("account")}
        </SignedInMenuAction>

        <SignedInMenuAction
          href={NavigationRoutes.profilePage.url}
          handleClose={handleClose}
        >
          {NavigationRoutes.profilePage.icon}
          {t("profile")}
        </SignedInMenuAction>
        <SignedInMenuAction
          href={NavigationRoutes.addressPage.url}
          handleClose={handleClose}
        >
          {NavigationRoutes.addressPage.icon}
          {t("address")}
        </SignedInMenuAction>

        <SignedInMenuAction
          href={NavigationRoutes.favoritePage.url}
          handleClose={handleClose}
        >
          {NavigationRoutes.favoritePage.icon}
          {t("favorites")}
        </SignedInMenuAction>

        <Divider sx={{ my: 0.5 }} />
        {/* <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          {t("more")}
        </MenuItem> */}
        <SignedInMenuAction
          href={NavigationRoutes.signoutPage.url}
          handleClose={handleClose}
        >
          {NavigationRoutes.signoutPage.icon}
          {t("logout")}
        </SignedInMenuAction>
      </StyledMenu>
    </>
  );
}

function SignedInMenuAction({
  children,
  href,
  handleClose,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  handleClose: () => void;
}>) {
  return (
    <MenuItem onClick={handleClose} disableRipple sx={{ p: 0 }}>
      <Box
        component={Link}
        href={href}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",

          textDecoration: "none",
          color: "inherit",
          px: 2, // match MenuItem padding
          py: 0.7,
        }}
      >
        {children}
      </Box>
    </MenuItem>
  );
}
