import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import LoadingButton from '@mui/lab/LoadingButton';

// Material Dashboard 2 React components
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/Connected-truck-telematics.jpg";
import { TextField } from "@mui/material";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const login = async (e) => {
    var bodyFormData = new FormData();
    if (username != null) {
      bodyFormData.append("username", username);
    }
    if (password != null) {
      bodyFormData.append("password", password);
    }

    try {
      setLoading(true);
      const response = await fetch(
        // "https://www.vira-rte.com/api/barnameh/getBarnamehs",
        { mode: "cors", method: "POST", body: bodyFormData }
      );
      const data = await response.json();
      localStorage.setItem("token", data.access_token);
      setTimeout(function () {
        window.open(`/dashboard`, "_self");
      }, 1000);
      setLoading(false);
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <Box
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h4" fontWeight="medium" color="white" mt={3}>
            به بازارگاه خوش آمدید!
          </Typography>
        </Box>
        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <TextField
                value={username}
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                variant="standard"
                label="نام کاربری"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  رمز عبور
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <Typography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                یادآوری ورود
              </Typography>
            </Box>
            <Box mt={4} mb={1}>
              {loading == true ? (
                <LoadingButton
                  fullWidth
                  // onClick={handleClick}
                  loading={loading}
                  variant="outlined"
                  loadingIndicator="درحال ورود..."
                  sx={{ backgroundColor: "rgb(0, 0, 0 ,.5)", px: 1 }}
                  disabled
                >
                  <span>disabled</span>
                </LoadingButton>
              ) : (
                <Button
                  loa
                  variant="contained"
                  sx={{ color: "#FFF" }}
                  onClick={login}
                  fullWidth
                >
                  ورود
                </Button>
              )}
            </Box>
            <Box mt={3} mb={1} textAlign="center">
              <Typography variant="button" color="text">
                {/* Don&apos;t have an account?{" "} */}
                <Typography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  ثبت نام
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
