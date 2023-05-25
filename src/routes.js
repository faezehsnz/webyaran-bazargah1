
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Ticket from "layouts/profile";
import Canceled from "layouts/canceled";

const routes = [
  {
    type: "collapse",
    name: "داشبورد",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "افزودن بار",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "بارهای در صف پذیرش",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "بارهای حواله شده در بازارگاه",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "بارهای درحال حمل",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "بارهای کنسلی",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/canceled",
    component: <Canceled />,
  },
  {
    type: "collapse",
    name: "ثبت فرم خسارت",
    key: "profile2",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/form",
    component: <Canceled />,
  },
  {
    type: "collapse",
    name: "تیکت",
    key: "profile3",
    icon: <Icon fontSize="small">person</Icon>,
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
