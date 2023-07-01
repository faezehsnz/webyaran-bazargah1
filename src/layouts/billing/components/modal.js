import * as React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// project imports
import MainCard from "./mainCard";
// import { gridSpacing } from 'store/constant';
import {
  IconButton,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  Autocomplete,
  Toolbar,
  FormHelperText,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import Checkout from "./BillingInformation/Checkout";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  dd,
  dc,
  dp,
  open,
  handleClickOpen,
  handleClose,
  data,
}) {
  const [loading, setLoading] = React.useState("1");
  const [cities, setCities] = React.useState("");
  const [goodTypes, setGoodTypes] = React.useState(null);
  const [carTypes, setCarTypes] = React.useState(null);
  const [carType, setCarType] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [type, setType] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [packing, setPacking] = React.useState(null);
  const [packing2, setPacking2] = React.useState(null);
  const [weight, setWight] = React.useState(null);
  const [number, setNumber] = React.useState(null);
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
  const [fare, setFare] = React.useState(null);
  const [customerOfferFare, setCustomerOfferFare] = React.useState(null);
  const [havaleId, setHavaleId] = React.useState(null);
  const [barnameId, setBarnameId] = React.useState(null);
  const [defaultP, setDefaultP] = React.useState(null);
  const [cargoDescription, setCargoDescription] = React.useState(null);
  const postInfo = async (e) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem("key"));
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("type", type);
    bodyFormData.append("packing", packing2);
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
      }
      if (data.error != 0 && data.error != 0) {
        toast.error(data.detail);
        setActiveStep(0);
      }
    } catch (e) {
      toast(e.detail);
      setActiveStep(0);
      // setError(e.message);
    }
  };
  console.log(dd);
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Typography variant="h6" gutterBottom>
          اطلاعات بار
        </Typography>
        {dd != [] ? (
          <Checkout
            data={data}
            // dd={dd !== null ? dd[0].sazmaniCityName : ""}
            // dc={dc !== null ? dc[0].sazmaniCityName : ""}
            // dp={dp !== null ? dp[0] : ""}
          />
        ) : null}
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
      </Dialog>
    </div>
  );
}
