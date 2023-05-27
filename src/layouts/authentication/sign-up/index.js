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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { InputLabel } from "@mui/material";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <Box
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h4" fontWeight="medium" color="white" mt={3}>
            ثبت نام
          </Typography>
          <Typography display="block" variant="button" color="white" my={1}>
            لطفا اطلاعات خودتان را به درستی وارد کنید
          </Typography>
        </Box>
        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <Input
                required
                type="نام و نام خانوادگی"
                label="Name"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <Input
                required
                type="number"
                label="تلفن همراه"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <Input
                required
                type="number"
                label="نام کاربری"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <Input
                required
                type="email"
                label="کدملی"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <InputLabel htmlFor="standard-adornment-password">
                رمز عبور
              </InputLabel>
              <Input
                required
                type="password"
                label="رمز عبور"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <Input
                required
                type="password"
                label="تکرار رمز عبور"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <Typography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </Typography>
              <Typography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </Typography>
            </Box>
            <Box mt={4} mb={1}>
              <Button variant="gradient" color="info" fullWidth>
                sign in
              </Button>
            </Box>
            <Box mt={3} mb={1} textAlign="center">
              <Typography variant="button" color="text">
                Already have an account?{" "}
                <Typography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
