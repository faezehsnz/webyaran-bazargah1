/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Images
import kal from "assets/images/kal-visuals-square.jpg";
import marie from "assets/images/marie.jpg";
import ivana from "assets/images/ivana-square.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Person2Rounded } from "@mui/icons-material";
import Icon from "@mui/material/Icon";

export default [
  {
    image: Person2Rounded,
    icon: <Icon>person</Icon>,
    name: "احمدی",
    description: "سلام!",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
  {
    image: Person2Rounded,
    name: "محمدی",
    icon: <Icon>person</Icon>,
    description: "سلام!",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
  {
    image: ivana,
    icon: <Icon>person</Icon>,
    name: "احمدی",
    description: "سلام!",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
  {
    image: team4,
    icon: <Icon>person</Icon>,
    name: "احمدی",
    description: "سلام!",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
  {
    image: team3,
    icon: <Icon>person</Icon>,
    name: "احمدی",
    description: "سلام!",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "پاسخ",
    },
  },
];
