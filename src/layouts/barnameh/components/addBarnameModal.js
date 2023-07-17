import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// project imports
// import { gridSpacing } from 'store/constant';
import {
  Button,
  Grid,
  TextField,
} from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddBarname({
  open,
  handleClickOpen,
  handleClose,
  data,
}) {
  const [bolNr, setBolNr] = React.useState(null);
  const [bolSerialNr, setBolSerialNr] = React.useState(null);
  const [commissionAmount, setCommissionAmount] = React.useState(null);
  const getData3 = async (params) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem("key"));
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("role", local.role);
    bodyFormData.append("barID", params.id);
    bodyFormData.append("bolNr", bolNr);
    bodyFormData.append("bolSerialNr", bolSerialNr);
    bodyFormData.append("barID", commissionAmount);
    try {
      // setLoading(true);
      const response = await fetch(
        "https://hagbaar.com/api/Barnameh/createBarnameh",
        {
          mode: "cors",
          method: "POST",
          body: bodyFormData,
        }
      );
      const data = await response.json();
      // setLoading(false);
      if (data.error == 0) {
        toast.success(data.detail);
        handleClose()
      }
      if (data.error != 0) {
        // setError(data.detail);
        toast.error(data.detail);
      }
    } catch (e) {
      // handleClickOpen();
      // setError(e.detail);
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"اطلاعات بارنامه"}</DialogTitle>
        <DialogContent sx={{ alignItems: "center" ,width:'300px'}}>
          <Grid item xs={12} sm={12} mt={2}>
            <TextField
              id="lastName"
              name="lastName"
              label="شماره بارنامه"
              onChange={(e) => setBolNr(e.target.value)}
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={12} mt={2}>
            <TextField
              id="lastName"
              name="lastName"
              label="سری بارنامه"
              onChange={(e) => setBolSerialNr(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={12} mt={2}>
            <TextField
              id="lastName"
              name="lastName"
              label="کمسیون بارنامه"
              onChange={(e) => setCommissionAmount(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => getData3(data)}>افزودن بارنامه</Button>
        </DialogActions>
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
