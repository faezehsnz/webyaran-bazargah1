import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./BsrDetail";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import MoreInfoForm from "./MoreInfo";
import FinancialInfoForm from "./Financial";

const steps = [
  "اطلاعات بار",
  "اطلاعات مکانیزم حمل",
  "سایر توضیحات",
  "اطلاعات مالی",
  // "بازبینی",
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  fontFamily: "IRANSansWeb",
});

export default function Checkout() {
  const [cities, setCities] = React.useState('');
  const [goodTypes, setGoodTypes] = React.useState(null);
  const [carTypes, setCarTypes] = React.useState(null);
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
            
          />
        );
      case 1:
        return (
          <PaymentForm
            setCoverTypeCarFeatures={setCoverTypeCarFeatures}
            setMechanism={setMechanism}
            carTypes={carTypes != null && carTypes}
          />
        );
      case 2:
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
            cities={packing != null && cities}
          />
        );
      case 3:
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
  const getData = async (e) => {
    try {
      const response = await fetch(
        "https://vira-etg.ir/api/Generals/getPaking"
      );
      const data = await response.json();
      setPacking(data.pakings.map(option => option.name))
    } catch (e) {
    }
  };
  const getData2 = async (e) => {
    try {
      const response = await fetch(
        "https://vira-etg.ir/api/Generals/getCities"
      );
      const data = await response.json();
      setCities(data.cities)
    } catch (e) {
      // setError(e.message);
    }
  };
  const getData3 = async (e) => {
    try {
      const response = await fetch(
        "https://vira-etg.ir/api/Generals/getMecanismType"
      );
      const data = await response.json();
      setCarTypes(data.mecanismTypes.map(option => option.name))
      console.log(data);
    } catch (e) {
      // setError(e.message);
    }
  };
  const getData4 = async (e) => {
    try {
      const response = await fetch(
        "https://vira-etg.ir/api/Generals/getGoodType",
      );
      const data = await response.json();
      setGoodTypes(data.goodTypes.map(option => option.name))
    } catch (e) {
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
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
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
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
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
    </ThemeProvider>
  );
}
