import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Button, Card } from "@mui/material";
// Material Dashboard 2 React components

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { TextField } from "@mui/material";
// Overview page components
import Header from "layouts/aboutUs/components/Header";
// import PlatformSettings from "layouts/profile/components/PlatformSettings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Data
import profilesListData from "layouts/profile/data/profilesListData";
import BasicModal from "./modal";

// Images
function User() {
  const local = JSON.parse(localStorage.getItem("key"));
  console.log(local);
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [oldPass, setOldPass] = React.useState(false);
  const postInfo = async (e) => {
    if (oldPass != local.userInfo.password) {
      toast.error('رمز عبور قبلی شما صحیح نیست')
    } else {
      var bodyFormData = new FormData();
      bodyFormData.append("role", local.role);
      bodyFormData.append("userID", local.userInfo.mobile);
      bodyFormData.append("password", password);
      try {
        const response = await fetch(
          "https://hagbaar.com/api/auth/profileUpdate",
          {
            mode: "cors",
            method: "POST",
            body: bodyFormData,
          }
        );
        // window.open('/dashboard' , '_self')
        const data = await response.json();
        toast.success('با موفقیت انجام شد!')
      } catch (e) {
        toast(e.detail);
        // setError(e.message);
      }
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box mb={2} />
      <Header handleOpen={handleOpen}>
        <Grid container spacing={1}>
          <Grid item xs={12} xl={12}>
            <MDBox pt={2} px={2}>
              <MDTypography
                variant="h6"
                fontWeight="medium"
                textTransform="capitalize"
              >
                اطلاعات کاربر
              </MDTypography>
            </MDBox>
            <MDBox p={2} display="flex" flexDirection="column">
              <TextField
                sx={{ m: 1, minWidth: 250 }}
                label="نام"
                focused
                id="outlined-disabled"
                disabled
                value={local != null && local.userInfo.name}
                defaultValue={local != null && local.userInfo.name}
              ></TextField>
              <TextField
                sx={{ m: 1, minWidth: 250 }}
                label="نام خانوادگی"
                focused
                id="outlined-disabled"
                disabled
                value={local != null && local.userInfo.lastName}
                defaultValue={local != null && local.userInfo.lastName}
              ></TextField>
              <TextField
                sx={{ m: 1, minWidth: 250 }}
                id="outlined-disabled"
                disabled
                value={local != null && local.userInfo.mobile}
                defaultValue={local != null && local.userInfo.mobile}
                label="شماره تماس"
              ></TextField>
              <TextField
                sx={{ m: 1, minWidth: 250 }}
                focused
                id="outlined-disabled"
                disabled
                value={local != null && local.userInfo.nationalCode}
                defaultValue={local != null && local.userInfo.nationalCode}
                label="کد ملی"
              ></TextField>
              <TextField
                sx={{ m: 1, minWidth: 250 }}
                focused
                id="outlined-disabled"
                value={local != null && local.userInfo.adrres}
                defaultValue={local != null && local.userInfo.adrres}
                label="آدرس"
              ></TextField>

              <Divider />
              <Typography variant="h6">تغییر رمز عبور</Typography>
              <TextField
              onChange={(e) => setOldPass(e.target.value)}
                sx={{ m: 1, minWidth: 250 }}
                label="رمز عبور قبلی"
              ></TextField>
              <TextField
                sx={{ m: 1, minWidth: 250 }}
                label="رمز عبور جدید"
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <Button onClick={postInfo} variant="contained" sx={{width:'200px' ,alignSelf:'end' ,m:2}}>تغییر رمز</Button>
            </MDBox>
          </Grid>
        </Grid>
      </Header>
      {/* <Footer /> */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </DashboardLayout>
  );
}

export default User;
