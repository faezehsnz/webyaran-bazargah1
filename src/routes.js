
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

const routes = [
  {
    type: "collapse",
    name: "داشبورد",
    key: "داشبورد",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "افزودن بار",
    key: "add-bar",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/addbar",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "افزودن بارنامه",
    key: "tables",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "بارهای در صف پذیرش",
    key: "billing",
    icon: <Icon fontSize="small">list_alt</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "بارهای حواله شده در بازارگاه",
    key: "rtl",
    icon: <Icon fontSize="small">drafts</Icon>,
    route: "/rtl",
    component: <RTL />,
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
    name: "بارهای درحال حمل",
    key: "notifications",
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "بارهای کنسلی",
    key: "profile",
    icon: <Icon fontSize="small">cancel</Icon>,
    route: "/canceled",
    component: <Canceled />,
  },
  {
    type: "collapse",
    name: "تیکت",
    key: "profile3",
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
];

export default routes;
