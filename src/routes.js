
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Ticket from "layouts/profile";
import Canceled from "layouts/canceled";
import Reservation from "layouts/reservation";
import ShowDetail from "layouts/showDetail";
const routes = [
  {
    type: "collapse",
    name: "بارهای در صف پذیرش",
    key: "waiting",
    icon: <Icon fontSize="small">list_alt</Icon>,
    route: "/waiting",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "بارهای رزرو شده",
    key: "reservation",
    icon: <Icon fontSize="small">drafts</Icon>,
    route: "/reservation",
    component: <Reservation />,
  },
  {
    type: "collapse",
    name: "بارهای حواله شده در بازارگاه",
    key: "havale",
    icon: <Icon fontSize="small">drafts</Icon>,
    route: "/havale",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "بارهای درحال حمل",
    key: "intheway",
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/intheway",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "بارهای کنسلی",
    key: "canceled",
    icon: <Icon fontSize="small">cancel</Icon>,
    route: "/canceled",
    component: <Canceled />,
  },
  {
    type: "collapse",
    name: "تیکت",
    key: "ticket",
    icon: <Icon fontSize="small">confirmation_number</Icon>,
    route: "/ticket",
    component: <Ticket />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "show",
    key: "show",
    icon: <Icon fontSize="small">show</Icon>,
    route: "/bar/show",
    component: <ShowDetail />,
  },
];
export default routes