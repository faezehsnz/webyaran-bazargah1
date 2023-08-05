import * as React from "react";
import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import AddressForm from "./BarDetail";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import MoreInfoForm from "./MoreInfo";
import FinancialInfoForm from "./Financial";
import { Check } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import City from "./data.json";
import Bar from "./bar.json";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import {
  DatePicker,
  MobileDateTimePicker,
  DesktopDateTimePicker,
} from "@mui/x-date-pickers";
import Autocomplete from "@mui/material/Autocomplete";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
const steps = [
  "اطلاعات بار",
  // "اطلاعات مکانیزم حمل",
  "سایر توضیحات",
  "اطلاعات مالی",
  // "بازبینی",
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  fontFamily: "IRANSansWeb",
});

export default function Checkout() {
  const [loading, setLoading] = React.useState("1");
  const [loading2, setLoading2] = React.useState("1");
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
  const [goodTypes, setGoodTypes] = React.useState(null);
  const [carTypes, setCarTypes] = React.useState(null);
  const [carType, setCarType] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [type, setType] = React.useState(null);
  const [packing, setPacking] = React.useState(null);
  const [weight, setWight] = React.useState(null);
  const [number, setNumber] = React.useState(null);
  const [insuranceValue, setInsuranceValue] = React.useState(null);
  const [downloadLocation, setDownloadLocation] = React.useState(null);
  const [dischargeLocation, setDischargeLocation] = React.useState(null);
  const [loadingTime, setLoadingTime] = React.useState(null);
  const [downloadInterval, setDownloadInterval] = React.useState(null);
  const [dischargeTime, setDischargeTime] = React.useState(null);
  const [drainInterval, setDrainInterval] = React.useState(null);
  const [length, setLength] = React.useState(null);
  const [width, setWidth] = React.useState(null);
  const [thickness, setThickness] = React.useState(null);
  const [mechanism, setMechanism] = React.useState(null);
  const [storeroom, setStoreroom] = React.useState(null);
  const [typeOfWage, setTypeOfWage] = React.useState(null);
  const [coverTypeCarFeatures, setCoverTypeCarFeatures] = React.useState(null);
  const [sender, setSender] = React.useState(null);
  const [receiver, setReceiver] = React.useState(null);
  const [origin, setOrigin] = React.useState(null);
  const [destination, setDestination] = React.useState(null);
  const [comment, setComment] = React.useState(null);
  const [active, setActive] = React.useState(null);
  const [theStatus, setTheStatus] = React.useState(null);
  const [receipt, setReceipt] = React.useState(null);
  const [fare, setFare] = React.useState(null);
  const [trafficBar, setTrafficBar] = React.useState(null);
  const [customerOfferFare, setCustomerOfferFare] = React.useState(null);
  const [cargoDescription, setCargoDescription] = React.useState(null);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      postInfo();
    }
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            setType={setType}
            setCargoDescription={setCargoDescription}
            setPacking={setPacking}
            setStoreroom={setStoreroom}
            setWidth={setWidth}
            setLength={setLength}
            setWight={setWight}
            setNumber={setNumber}
            setThickness={setThickness}
            packing={packing != null && packing}
            goodTypes={goodTypes != null && goodTypes}
            setTypeOfWage={setTypeOfWage}
            setCoverTypeCarFeatures={setCoverTypeCarFeatures}
            setMechanism={setMechanism}
            setCarType={setCarType}
            carTypes={carTypes != null && carTypes}
            type={type}
            setTrafficBar={setTrafficBar}
          />
        );
      case 1:
        return (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              سایر توضیحات
            </Typography>
            <p>پر کردن فیلد های ستاره دار (*) اجباری است.</p>
            <Grid container spacing={3} mt={5}>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="فرستنده*"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setSender(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Autocomplete
                  disablePortal
                  id="clear-on-escape"
                  options={cities != null ? cities : null}
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
                      label="مبدا"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="محل بارگیری"
                  onChange={(e) => setDownloadLocation(e.target.value)}
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      ampm={false}
                      label="زمان بارگیری(از)"
                      onChange={(e) => setLoadingTime(e)}
                      minDate={new Date()}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={4}>
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      ampm={false}
                      label="زمان بارگیری(تا)"
                      onChange={(e) => setDownloadInterval(e)}
                      minDate={loadingTime}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={3} mt={5}>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="گیرنده*"
                  onChange={(e) => setReceiver(e.target.value)}
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Autocomplete
                  disablePortal
                  id="clear-on-escape"
                  options={cities != null ? cities : null}
                  getOptionLabel={(option) => option.sazmaniCityName}
                  onChange={(e, value) => setDestination(value.ID)}
                  renderInput={(params) => (
                    <TextField
                      variant="standard"
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                      label="مقصد"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="محل تخلیه"
                  onChange={(e) => setDischargeLocation(e.target.value)}
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      ampm={false}
                      label="زمان تخلیه(از)"
                      onChange={(e) => setDischargeTime(e)}
                      minDate={downloadInterval}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={4}>
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      ampm={false}
                      label="زمان تخلیه(تا)"
                      onChange={(e) => setDrainInterval(e)}
                      minDate={dischargeTime}
                    />
                  </DemoContainer>
                  {/* </DemoItem> */}
                </LocalizationProvider>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      case 2:
        return (
          <FinancialInfoForm
            setTypeOfWage={setTypeOfWage}
            setFare={setFare}
            setInsuranceValue={setInsuranceValue}
            // setTypeOfWage={setTypeOfWage}
            setCustomerOfferFare={setCustomerOfferFare}
          />
        );
      // case 4:
      //   return <Review />;
      default:
        throw new Error("Unknown step");
    }
  }
  const postInfo = async (e) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem("key"));
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("type", type);
    bodyFormData.append("packing", packing.id);
    bodyFormData.append("weight", weight);
    bodyFormData.append("lnsurance_value", insuranceValue);
    bodyFormData.append("download_location", downloadLocation);
    bodyFormData.append("discharge_location", dischargeLocation);
    bodyFormData.append(
      "loading_time",
      Math.floor(new Date(loadingTime).getTime() / 1000)
    );
    bodyFormData.append(
      "DownloadInterval ",
      Math.floor(new Date(downloadInterval).getTime() / 1000)
    );
    bodyFormData.append(
      "discharge_time",
      Math.floor(new Date(dischargeTime).getTime() / 1000)
    );
    bodyFormData.append(
      "DrainInterval",
      Math.floor(new Date(drainInterval).getTime() / 1000)
    );
    bodyFormData.append("length", length);
    bodyFormData.append("width", width);
    bodyFormData.append("thickness", thickness);
    bodyFormData.append("type_of_wage", typeOfWage);
    bodyFormData.append("sender", sender);
    bodyFormData.append("receiver", receiver);
    bodyFormData.append("origin", origin);
    bodyFormData.append("destination", destination);
    bodyFormData.append("customer_offer_fare", fare);
    bodyFormData.append("cargo_description", cargoDescription);
    bodyFormData.append("trafficBar", trafficBar);
    try {
      const response = await fetch("https://hagbaar.com/api/bar/createOrder", {
        mode: "cors",
        method: "POST",
        body: bodyFormData,
      });
      const data = await response.json();
      if (data.error == 0) {
        toast.success(data.detail);
        setTimeout(() => {
          window.open("/waiting", "_self");
        }, 4000);
        // props.setValue(2);
      }
      if (data.error != 1 && data.error != 0) {
        toast.error(data.detail);
        setActiveStep(0);
      }
    } catch (e) {
      toast(e.detail);
      setActiveStep(0);
    }
  };
  const getData = async (e) => {
    setLoading("1");
    setCities(City.cities.map((option) => option));
    setPacking(City.pakings.map((option) => option));
    setCarTypes(City.mecanismTypes.map((option) => option));
    setGoodTypes(Bar.goodTypes.map((option) => option));
    setLoading("2");
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            backgroundColor: "#e5eaf5",
          }}
        >
          <Typography component="h1" variant="h3" align="center" mb={5}>
            افزودن بار
          </Typography>

          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5, flexWrap: "wrap" }}
          >
            {steps.map((label) => (
              <Step key={label} sx={{ my: 3 }}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                <Check color="success" />
                اطلاعات با موفقیت ثبت شد!
              </Typography>
              <Typography variant="subtitle1">
                به صفحه
                <Typography component={Link} to="/waiting" variant="button">
                  {" "}
                  بارهای در صف پذیرش{" "}
                </Typography>
                منتقل میشوید.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {loading == "2" ? (
                <>{getStepContent(activeStep)}</>
              ) : loading === "3" ? (
                <Alert variant="filled" severity="warning">
                  مشکلی پیش آمده است لطفا صفحه را رفرش کنید
                </Alert>
              ) : (
                <>
                  <Typography>لطفا منتظر بمانید...</Typography>
                </>
              )}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    قبلی
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  onKeyUp={(event) => {
                    if (event.ctrlKey && event.key == "Enter") {
                      handleNext();
                    }
                  }}
                >
                  {activeStep === steps.length - 1 ? "ثبت بار" : "بعدی"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
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
    </ThemeProvider>
  );
}
