import Button from "@mui/material/Button";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/types/stateTypes";
import { NavigationRoutes } from "@/constants/NavigationRoutes";
import { useTranslations } from "next-intl";
import SignedInMenu from "./SignedInMenu";
import { cartToggleItem } from "@/controllers/slices/cartSlice";
import { useSmartSignInLink } from "@/hooks/useSmartSignInLink";

export default function Action() {
  const isAuth = useSelector(
    (state: RootState) => state.session.isAuthenticated
  );
  const t = useTranslations("HeaderButton");
  const dispatch = useDispatch();
  const SignInUrl = useSmartSignInLink();
  return (
    <>
      <Button LinkComponent={Link} href={NavigationRoutes.dashboardPage.url}>
        Dasboard
      </Button>
      <Button
        color="inherit"
        onClick={() => {
          dispatch(cartToggleItem());
        }}
      >
        Cart
      </Button>
      <Tooltip title={t("cart")}>
        <IconButton LinkComponent={Link} href="/cart">
          <ShoppingCartIcon />
        </IconButton>
      </Tooltip>
      {isAuth ? (
        <SignedInMenu />
      ) : (
        <Button
          variant="contained"
          LinkComponent={Link}
          href={SignInUrl}
          startIcon={NavigationRoutes.signinPage.icon}
        >
          {t("login")}
        </Button>
      )}
    </>
  );
}
