import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const NavigationRoutes = {
  homePage: { url: "/", icon: "", text: "Home" },
  cartPage: { url: "/cart", icon: "", text: "Cart" },
  productsPage: {
    url: "/products",
    icon: "",
    text: "navigationRoutes.products",
  },
  offersPage: { url: "/offers", icon: "", text: "navigationRoutes.offers" },
  trendingPage: {
    url: "/trending",
    icon: "",
    text: "navigationRoutes.trending",
  },
  signinPage: { url: "/signin", icon: <LoginIcon />, text: "Sign In" },
  signupPage: { url: "/signup", icon: <PersonAddIcon />, text: "Sign Up" },
  signoutPage: { url: "/logout", icon: "", text: "Sign Out" },
  forgotPasswordPage: {
    url: "/forgot-password",
    icon: "",
    text: "Forgot Password",
  },
  dashboardPage: { url: "/dashboard", icon: "", text: "Dashboard" },
  profilePage: { url: "/profile", icon: "", text: "Profile" },
  orderPage: { url: "/order", icon: "", text: "Order" },
  securityPage: { url: "/secure", icon: "", text: "Security" },
  favoritePage: { url: "/favorite", icon: "", text: "Favorite" },
  addressPage: { url: "/address", icon: "", text: "Address" },
  helpPage: { url: "/helpdesk", icon: "", text: "Helpdesk" },
  contactPage: { url: "/contact", icon: "", text: "Contact" },
};

export { NavigationRoutes };
