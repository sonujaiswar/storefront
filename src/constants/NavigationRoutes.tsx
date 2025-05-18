import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Face3Icon from "@mui/icons-material/Face3";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PasswordIcon from "@mui/icons-material/Password";
import HelpIcon from "@mui/icons-material/Help";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
interface NavigationRoutesState {
  [key: string]: { url: string; icon: React.ReactNode; text: string };
}

const NavigationRoutes: NavigationRoutesState = {
  homePage: { url: "/", icon: "", text: "Home" },
  cartPage: { url: "/cart", icon: "", text: "Cart" },
  productsPage: {
    url: "/products",
    icon: <CategoryIcon />,
    text: "navigationRoutes.products",
  },
  offersPage: {
    url: "/offers",
    icon: <LocalOfferIcon />,
    text: "navigationRoutes.offers",
  },
  trendingPage: {
    url: "/trending",
    icon: <WhatshotIcon />,
    text: "navigationRoutes.trending",
  },
  signinPage: { url: "/signin", icon: <LoginIcon />, text: "Sign In" },
  signupPage: { url: "/signup", icon: <PersonAddIcon />, text: "Sign Up" },
  signoutPage: { url: "/logout", icon: <LogoutIcon />, text: "Sign Out" },
  forgotPasswordPage: {
    url: "/forgot-password",
    icon: "",
    text: "Forgot Password",
  },
  dashboardPage: {
    url: "/dashboard",
    icon: <DashboardIcon />,
    text: "secureNavigationRoutes.dashboard",
  },
  profilePage: {
    url: "/profile",
    icon: <Face3Icon />,
    text: "secureNavigationRoutes.profile",
  },
  orderPage: {
    url: "/order",
    icon: <ShoppingBasketIcon />,
    text: "secureNavigationRoutes.order",
  },
  securityPage: {
    url: "/secure",
    icon: <PasswordIcon />,
    text: "secureNavigationRoutes.secure",
  },
  favoritePage: {
    url: "/favorite",
    icon: <FavoriteIcon />,
    text: "secureNavigationRoutes.favorite",
  },
  addressPage: {
    url: "/address",
    icon: <LocationPinIcon />,
    text: "secureNavigationRoutes.address",
  },
  helpPage: {
    url: "/helpdesk",
    icon: <HelpIcon />,
    text: "navigationRoutes.helpdesk",
  },
  contactPage: { url: "/contact", icon: "", text: "Contact" },
};

export { NavigationRoutes };
