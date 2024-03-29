import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import LoadingButton from "@mui/lab/LoadingButton";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
import { useNavigate } from 'react-router-dom';

// Images
import bgImage from "assets/images/Connected-truck-telematics.jpg";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Basic() {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState(null);
  const [role, setRole] = useState(null);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const login = async (e) => {
    var bodyFormData = new FormData();
    bodyFormData.append('role', role);
    bodyFormData.append('mobile', username);
    bodyFormData.append('password', password);
    try {
      const response = await fetch('https://hagbaar.com/api/auth/loginByPass', {
        mode: 'cors',
        method: 'POST',
        body: bodyFormData
      });
      const data = await response.json();
      if (data.error == 0) {
        // props.setData2(data);
        localStorage.setItem('key', JSON.stringify(data));
        navigate('/waiting');
      }
      if (data.error != 0) {
        toast.error(data.detail);
      }
    } catch (e) {
      toast(e.detail);
      // setError(e.message);
    }
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <Box
          variant="gradient"
          bgcolor="info"
          borderRadius="lg"
          coloredshadow="info"
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
            <Box mt={3}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-standard-label">
          نقش
        </InputLabel>
        <Select
        variant="standard"
          fullWidth
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={props.type}
          onChange={(event) => setRole(event.target.value)}
        >
          <MenuItem value={1}>راننده</MenuItem>
          <MenuItem value={2}>صاحب کالا</MenuItem>
          <MenuItem value={3}>شرکت حمل</MenuItem>
          <MenuItem value={4}>ادمین بازارگاه</MenuItem>
        </Select>
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
                >
                  ثبت نام
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
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
    </BasicLayout>
  );
}

export default Basic;
