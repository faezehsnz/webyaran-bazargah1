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
  open,
  handleClickOpen,
  handleClose,
  data,
}) {
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
        {data != [] ? (
          <Checkout
            data={data}
            handleClose={handleClose}
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
