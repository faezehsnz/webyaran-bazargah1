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
import AddressForm from "./BsrDetail";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import MoreInfoForm from "./MoreInfo";
import FinancialInfoForm from "./Financial";
import { Check } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
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
  const [cities, setCities] = React.useState("");
  const [goodTypes, setGoodTypes] = React.useState(null);
  const [carTypes, setCarTypes] = React.useState(null);
  const [carType, setCarType] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [type, setType] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [packing, setPacking] = React.useState(null);
  const [weight, setWight] = React.useState(null);
  const [number, setNumber] = React.useState(null);
  const [insuranceValue, setInsuranceValue] = React.useState(null);
  const [productOwner, setProductOwner] = React.useState(null);
  const [downloadLocation, setDownloadLocation] = React.useState(null);
  const [dischargeLocation, setDischargeLocation] = React.useState(null);
  const [loadingTime, setLoadingTime] = React.useState(null);
  const [downloadInterval, setDownloadInterval] = React.useState(null);
  const [dischargeTime, setDischargeTime] = React.useState(null);
  const [drainInterval, setDrainInterval] = React.useState(null);
  const [orderNumber, setOrderNumber] = React.useState(null);
  const [orderItem, setOrderItem] = React.useState(null);
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
  const [discount, setDiscount] = React.useState(null);
  const [customerOfferFare, setCustomerOfferFare] = React.useState(null);
  const [commission, setCommission] = React.useState(null);
  const [havaleId, setHavaleId] = React.useState(null);
  const [barnameId, setBarnameId] = React.useState(null);
  const [specialGoods, setSpecialGoods] = React.useState(null);
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
          />
        );
      // case 1:
      //   return (
      //     <PaymentForm
      //       setCoverTypeCarFeatures={setCoverTypeCarFeatures}
      //       setMechanism={setMechanism}
      //       carTypes={carTypes != null && carTypes}
      //     />
      //   );
      case 1:
        return (
          <MoreInfoForm
            setSender={setSender}
            setReceiver={setReceiver}
            setOrigin={setOrigin}
            setDestination={setDestination}
            setLoadingTime={setLoadingTime}
            setDownloadInterval={setDownloadInterval}
            setDischargeTime={setDischargeTime}
            setDrainInterval={setDrainInterval}
            setDownloadLocation={setDownloadLocation}
            setDischargeLocation={setDischargeLocation}
            cities={packing != null && cities}
          />
        );
      case 2:
        return (
          <FinancialInfoForm
            setTypeOfWage={setTypeOfWage}
            setFare={setFare}
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
    bodyFormData.append("userID", 3);
    bodyFormData.append("type", type);
    bodyFormData.append("packing", packing);
    bodyFormData.append("weight", weight);
    bodyFormData.append("lnsurance_value", customerOfferFare);
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
        }, 3000);
        // props.setValue(2);
      }
      if (data.error != 1 && data.error != 0) {
        toast.error(data.detail);
        setActiveStep(0);
      }
    } catch (e) {
      toast(e.detail);
      setActiveStep(0);
      // setError(e.message);
    }
  };
  const getData = async (e) => {
    try {
      const response = await fetch(
        "https://hagbaar.com/api/Generals/getPaking"
      );
      const data = await response.json();
      setPacking(data.pakings.map((option) => option));
    } catch (e) {}
  };
  const getData2 = async (e) => {
    try {
      const response = await fetch(
        "https://hagbaar.com/api/Generals/getCities"
        // {mode:'cors' ,method:'POST'}
      );
      const data = await response.json();
      setCities(data.cities.map((option) => option));
    } catch (e) {
      // setError(e.message);
    }
  };
  const getData3 = async (e) => {
    try {
      const response = await fetch(
        "https://hagbaar.com/api/Generals/getMecanismType"
      );
      const data = await response.json();
      setCarTypes(data.mecanismTypes.map((option) => option));
    } catch (e) {
      // setError(e.message);
    }
  };
  const getData4 = async (e) => {
    setLoading("1");
    try {
      const response = await fetch(
        "https://hagbaar.com/api/Generals/getGoodType"
      );
      const data = await response.json();
      setGoodTypes(data.goodTypes.map((option) => option));
      if (data.goodTypes != null) {
        setLoading("2");
      }
    } catch (e) {
      setLoading("3");
      // setError(e.message);
    }
  };
  React.useEffect(() => {
    getData();
    getData2();
    getData3();
    getData4();
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } ,backgroundColor:'#e5eaf5' }}
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
              {loading === "2" ? (
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
