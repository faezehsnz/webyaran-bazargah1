import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  AppBar,
  Divider,
  InputLabel,
  Box,
  Button,
  ListItem,
  ListItemText,
  Select,
  Dialog,
  MenuItem,
  TextField,
  Slide,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BasicModal({ handleClose, handleOpen, open }) {
  const [data, setData] = React.useState(false);
  const [title, setTitle] = React.useState(null);
  const [body, setBody] = React.useState(null);
  const [priority, setPro] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const local = JSON.parse(localStorage.getItem("key"));
  const postInfo = async (e) => {
    var bodyFormData = new FormData();
    bodyFormData.append("userID", local.userInfo.mobile);
    bodyFormData.append("title", title);
    bodyFormData.append("body", body);
    bodyFormData.append("priority ", priority);
    bodyFormData.append("category ", category );
    try {
      const response = await fetch(
        "https://hagbaar.com/api/Tickets/createTicket",
        {
          mode: "cors",
          method: "POST",
          body: bodyFormData,
        }
      );
      // window.open('/dashboard' , '_self')
      const data = await response.json();
      toast.success('با موفقیت ثبت شد!')
      handleClose()
    } catch (e) {
      toast(e.detail);
      // setError(e.message);
    }
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ padding: "20px" }}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              افزودن تیکت
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: "40px" }}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            sx={{ m: 1, minWidth: 250 }}
            value={title}
            label="عنوان"
          ></TextField>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="demo-simple-select-label">دسته بندی</InputLabel>
            <Select
              sx={{ height: "45px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="دسته بندی "
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={1}>مالی</MenuItem>
              <MenuItem value={2}>بار</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="demo-simple-select-label">اولویت</InputLabel>
            <Select
              sx={{ height: "45px" }}
              onChange={(e) => setPro(e.target.value)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="اولویت"
            >
              <MenuItem value={0}>پایین</MenuItem>
              <MenuItem value={1}>بالا</MenuItem>
              <MenuItem value={2}>بحرانی</MenuItem>
            </Select>
          </FormControl>
          <Divider />
        </Box>

        <TextField
          multiline={true}
          label="متن پیام"
          onChange={(e) => setBody(e.target.value)}
          sx={{ mx: "30px", minWidth: "90%" }}
          inputProps={{
            style: {
              height: "150px",
            },
          }}
        ></TextField>
        <Button
          autoFocus
          variant="contained"
          sx={{ width: "300px", alignSelf: "center", mt: 3 }}
          onClick={postInfo}
        >
          ارسال
        </Button>
      </Dialog>
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
    </div>
  );
}
