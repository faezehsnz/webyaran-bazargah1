import React from "react";
import {
  AppBar,
  Grid,
  Box,
  Button,
  Card,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
  Input,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import City from "components/Checkout/data.json";
// Billing page components
import { connect } from "react-redux";
import {
  setType,
  setMobile,
  setUserID,
  setCityID,
  setBarData,
  setID,
  setShowData,
} from "components/store/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Form1(props) {
  const navigate = useNavigate();
  const [cities, setCities] = React.useState([
    {
      ID: "1",
      sazmaniCityXID: "26441030",
      sazmaniCityName: "نوجه ده سادات",
      TaxID: "1301000",
      TaxState: "13",
      Latitude: "37.9098127",
      Longitude: "46.9631703",
      active: "1",
    },
    {
      ID: "2",
      sazmaniCityXID: "26441031",
      sazmaniCityName: "کرگان",
      TaxID: "1301000",
      TaxState: "13",
      Latitude: "38.1067244",
      Longitude: "48.4829618",
      active: "1",
    },
  ]);
  const [origin, setOrigin] = React.useState(null);
  const [hamlType, setHamlType] = React.useState(null);
  const [value, setValue] = React.useState("1");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [fatherName, setFatherName] = React.useState("");
  const [nationalCode, setNationalCode] = React.useState("");
  const [lisenceCode, setLisenceCode] = React.useState("");
  const [smartCode, setSmartCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState("");
  const [brandName, setBrandName] = React.useState("");
  const [sabtNumber, setSAbtNumber] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [hamlCode, setHamlCode] = React.useState("");
<<<<<<< HEAD
  
=======
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
>>>>>>> 9fb2983bd8a4656a4243616cc8bae26692ecc5d2
  const getData2 = async (e) => {
    setCities(City.cities.map((option) => option));
  };
  React.useEffect(() => {
    getData2();
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const postInfo = async (e) => {
    var bodyFormData = new FormData();
    if (props.type === 1) {
      bodyFormData.append("role", props.type);
      bodyFormData.append("mobile", props.mobile);
      bodyFormData.append("name", name);
      bodyFormData.append("lastName", lastName);
      bodyFormData.append("fatherName", fatherName);
      bodyFormData.append("nationalCode", nationalCode);
      bodyFormData.append("ghavinameNumber", lisenceCode);
      bodyFormData.append("hoshmandNumber", smartCode);
      bodyFormData.append("password", password);
      bodyFormData.append("cityID", 0);
      // props.setCityID(0)
    }
    if (props.type === 2) {
      if (value == 0) {
        bodyFormData.append("role", props.type);
        bodyFormData.append("type", 2);
        bodyFormData.append("mobile", props.mobile);
        bodyFormData.append("name", name);
        bodyFormData.append("lastName", lastName);
        bodyFormData.append("fatherName", fatherName);
        bodyFormData.append("phone", phone);
        bodyFormData.append("nationalCode", nationalCode);
        bodyFormData.append("phone", phone);
        bodyFormData.append("adrres", address);
        bodyFormData.append("sabtNumber", sabtNumber);
        bodyFormData.append("brandName", brandName);
        bodyFormData.append("password", password);
        bodyFormData.append("cityID", 1);
      }
      if (value == 1) {
        bodyFormData.append("role", props.type);
        bodyFormData.append("type", 1);
        bodyFormData.append("mobile", props.mobile);
        bodyFormData.append("brandName", brandName);
        bodyFormData.append("nationalCode", nationalCode);
        bodyFormData.append("sabtNumber", sabtNumber);
        bodyFormData.append("name", name);
        bodyFormData.append("lastName", lastName);
        bodyFormData.append("fatherName", fatherName);
        bodyFormData.append("phone", phone);
        bodyFormData.append("adrres", address);
        bodyFormData.append("password", password);
        bodyFormData.append("cityID", 1);
      }
      // props.setCityID(0)
    }
    if (props.type === 3) {
      bodyFormData.append("role", props.type);
      bodyFormData.append("mobile", props.mobile);
      bodyFormData.append("name", name);
      bodyFormData.append("lastName", lastName);
      bodyFormData.append("nationalCode", nationalCode);
      bodyFormData.append("brandName", brandName);
      bodyFormData.append("sabtNumber", sabtNumber);
      bodyFormData.append("hamlCode", hamlCode);
      bodyFormData.append("phone", phone);
      bodyFormData.append("adrres", address);
      bodyFormData.append("password", password);
      bodyFormData.append("cityID", origin);
      bodyFormData.append("hamlType", hamlType);
    }
    try {
      const response = await fetch("https://hagbaar.com/api/auth/updateUser", {
        mode: "cors",
        method: "POST",
        body: bodyFormData,
      });
      e.preventDefault();
      const data = await response.json();
      if (data.error === "0") {
        localStorage.setItem("key", JSON.stringify(data));

        // localStorage.setItem("data", JSON.stringify(data));
        props.setCityID(data.userInfo.cityID);
        props.setID(data.userInfo.ID);
        props.setUserID(data.role);
        navigate("/waiting");
      }

      if (data.error != 0) {
        toast.error(data);
      }
    } catch (e) {
      toast(e.detail);
      // setError(e.message);
    }
  };
  return (
    <Card
      sx={{
        marginTop: -25,
        width: { md: "40vw" },
        marginLeft: { md: "-4vw", xs: "0px" },
      }}
    >
      <Box
        variant="gradient"
        bgcolor="info"
        borderRadius="lg"
        coloredshadow="success"
        mx={2}
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
          {props.type == 1 ? (
            <>
              <Box display="flex" justifyContent="space-around" mb={2}>
                <Box>
                  <InputLabel htmlFor="standard-adornment-password">
                    نام
                  </InputLabel>
                  <Input
                    required
                    type="نام و نام خانوادگی"
                    label="Name"
                    variant="standard"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box>
                  <InputLabel htmlFor="standard-adornment-password">
                    نام خانوادگی
                  </InputLabel>
                  <Input
                    required
                    type="نام و نام خانوادگی"
                    label="Name"
                    variant="standard"
                    fullWidth
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Box>
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  نام پدر
                </InputLabel>
                <Input
                  required
                  variant="standard"
                  fullWidth
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  کدملی
                </InputLabel>
                <Input
                  required
                  type="number"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setNationalCode(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  شماره گواهینامه
                </InputLabel>
                <Input
                  required
                  type="email"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setLisenceCode(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  شماره هوشمند
                </InputLabel>
                <Input
                  required
                  type="number"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setSmartCode(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  رمز عبور
                </InputLabel>
                <Input
                  required
                  variant="standard"
                  fullWidth
                  type={showPassword ? "text" : "password"}
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
              </Box>
              <Box mt={4} mb={1}>
                <Button
                  onClick={postInfo}
                  onKeyUp={(event) => {
                    if (event.ctrlKey && event.key == "Enter") {
                      postInfo();
                    }
                  }}
                  // component={Link}
                  // to="/dashboard"
                  variant="contained"
                  fullWidth
                >
                  ثبت نام
                </Button>
              </Box>
            </>
          ) : props.type == 2 ? (
            <>
              <TabContext value={value}>
                <Grid item xs={12} md={12} lg={12}>
                  <AppBar position="static">
                    <TabList onChange={handleChange}>
                      <Tab value="0" label="حقیقی" />
                      <Tab value="1" label="حقوقی" />
                    </TabList>
                  </AppBar>
                </Grid>
                <TabPanel value="0">
                  <Box display="flex" justifyContent="space-around" mb={2}>
                    <Box>
                      <InputLabel htmlFor="standard-adornment-password">
                        نام
                      </InputLabel>
                      <Input
                        required
                        type="نام و نام خانوادگی"
                        label="Name"
                        variant="standard"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Box>
                    <Box>
                      <InputLabel htmlFor="standard-adornment-password">
                        نام خانوادگی
                      </InputLabel>
                      <Input
                        required
                        type="نام و نام خانوادگی"
                        label="Name"
                        variant="standard"
                        fullWidth
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Box>
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      کدملی
                    </InputLabel>
                    <Input
                      required
                      type="email"
                      label="کدملی"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setNationalCode(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      نام پدر
                    </InputLabel>
                    <Input
                      required
                      variant="standard"
                      fullWidth
                      onChange={(e) => setFatherName(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      نام شرکت
                    </InputLabel>
                    <Input
                      required
                      type="نام شرکت"
                      label="Name"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setBrandName(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      شماره ثبت
                    </InputLabel>
                    <Input
                      required
                      type="number"
                      label="شماره ثبت"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setSAbtNumber(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      تلفن ثابت
                    </InputLabel>
                    <Input
                      required
                      type="text"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      آدرس
                    </InputLabel>
                    <Input
                      required
                      type="text"
                      label="آدرس"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      رمز عبور
                    </InputLabel>
                    <Input
                      required
                      variant="standard"
                      fullWidth
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
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
                  </Box>
                </TabPanel>
                <TabPanel value="1">
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      نام شرکت
                    </InputLabel>
                    <Input
                      required
                      type="نام شرکت"
                      label="Name"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setBrandName(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      شناسه ملی
                    </InputLabel>
                    <Input
                      required
                      type="number"
                      label="شناسه ملی"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setNationalCode(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      شماره ثبت
                    </InputLabel>
                    <Input
                      required
                      type="number"
                      label="شماره ثبت"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setSAbtNumber(e.target.value)}
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-around" mb={2}>
                    <Box>
                      <InputLabel htmlFor="standard-adornment-password">
                        نام رابط
                      </InputLabel>
                      <Input
                        required
                        type="نام و نام خانوادگی"
                        label="Name"
                        variant="standard"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Box>
                    <Box>
                      <InputLabel htmlFor="standard-adornment-password">
                        نام خانوادگی رابط
                      </InputLabel>
                      <Input
                        required
                        type="نام و نام خانوادگی"
                        label="Name"
                        variant="standard"
                        fullWidth
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Box>
                  </Box>

                  {/* <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      نام پدر رابط
                    </InputLabel>
                    <Input
                      required
                      variant="standard"
                      fullWidth
                      onChange={(e) => setFatherName(e.target.value)}
                    />
                  </Box> */}
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      تلفن ثابت
                    </InputLabel>
                    <Input
                      required
                      type="text"
                      label="آدرس"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      آدرس
                    </InputLabel>
                    <Input
                      required
                      type="text"
                      label="آدرس"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </Box>
                  <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      رمز عبور
                    </InputLabel>
                    <Input
                      required
                      variant="standard"
                      fullWidth
                      type={showPassword ? "text" : "password"}
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
                  </Box>
                  {/* <Box mb={2}>
                    <InputLabel htmlFor="standard-adornment-password">
                      کدملی رابط
                    </InputLabel>
                    <Input
                      required
                      type="number"
                      label=" کدملی رابط"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setNationalCode(e.target.value)}
                    />
                  </Box> */}
                </TabPanel>
              </TabContext>
              <Box mt={4} mb={1}>
                <Button
                  // component={Link}
                  // to="/dashboard"
                  onClick={postInfo}
                  onKeyUp={(event) => {
                    if (event.ctrlKey && event.key == "Enter") {
                      postInfo();
                    }
                  }}
                  variant="contained"
                  fullWidth
                >
                  ثبت نام
                </Button>
              </Box>
            </>
          ) : props.type == 3 ? (
            <>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  نام
                </InputLabel>
                <Input
                  required
                  type="نام "
                  label="Name"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  شناسه ملی
                </InputLabel>
                <Input
                  required
                  type="number"
                  label="شناسه ملی"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setNationalCode(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  شماره ثبت
                </InputLabel>
                <Input
                  required
                  type="number"
                  label="شماره ثبت"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setSAbtNumber(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  شماره سازمان حمل و نقل
                </InputLabel>
                <Input
                  required
                  type="number"
                  label="شماره سازمان حمل و نقل"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setHamlCode(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  نام رابط
                </InputLabel>
                <Input
                  required
                  type="text"
                  label="نام و نام خانوادگی رابط"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  نام خانوادگی رابط
                </InputLabel>
                <Input
                  required
                  type="text"
                  label="نام و نام خانوادگی رابط"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  تلفن ثابت
                </InputLabel>
                <Input
                  required
                  type="number"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  آدرس
                </InputLabel>
                <Input
                  required
                  variant="standard"
                  fullWidth
                  onChange={(e) => setaddress(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={{ marginTop: -1.5 }}
                  >
                    نوع شرکت حمل
                  </InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={hamlType}
                    onChange={(e) => setHamlType(e.target.value)}
                  >
                    <MenuItem value={1}>بزرگ مقیاس</MenuItem>
                    <MenuItem value={2}>عادی</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={2}>
                <Autocomplete
                  disablePortal
                  id="clear-on-escape"
                  options={cities !== null ? cities : null}
                  getOptionLabel={(option) => option.sazmaniCityName}
                  onChange={(e, value) => setOrigin(value.ID)}
                  renderInput={(params) => (
                    <TextField
                      variant="standard"
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                      label="شهر"
                    />
                  )}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="standard-adornment-password">
                  رمز عبور
                </InputLabel>
                <Input
                  required
                  variant="standard"
                  fullWidth
                  type={showPassword ? "text" : "password"}
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
              </Box>
              <Box mt={4} mb={1}>
                <Button
                  onClick={postInfo}
                  // component={Link}
                  // to="/dashboard"
                  onKeyUp={(event) => {
                    if (event.ctrlKey && event.key == "Enter") {
                      postInfo();
                    }
                  }}
                  variant="contained"
                  fullWidth
                >
                  ثبت نام
                </Button>
              </Box>
            </>
          ) : (
            <>
              لطفا نقش خود را وارد کنید
              <Button onClick={() => props.setValue(5)}> انتخاب نقش</Button>
            </>
          )}
          <Box mt={3} mb={1} textAlign="center">
            <Typography variant="button" color="text">
              قبلا ثبت نام کرده اید؟
              <Typography
                component={Link}
                to="/"
                variant="button"
                color="info"
                fontWeight="medium"
              >
                ورود
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
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
    </Card>
  );
}

const mapStateToProps = (state) => ({
  type: state.type,
  mobile: state.mobile,
  userId: state.userId,
  cityId: state.cityId,
  barData: state.barData,
  id: state.id,
  showID: state.showID,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setType: (value) => dispatch(setType(value)),
    setMobile: (value) => dispatch(setMobile(value)),
    setUserID: (value) => dispatch(setUserID(value)),
    setCityID: (value) => dispatch(setCityID(value)),
    setBarData: (value) => dispatch(setBarData(value)),
    setID: (value) => dispatch(setID(value)),
    setShowData: (value) => dispatch(setShowData(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form1);
