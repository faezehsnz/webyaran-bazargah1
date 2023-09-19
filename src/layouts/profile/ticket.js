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
import ChatUI from "./chat";
import MDBox from "components/MDBox";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BasicModal({ handleClose, handleOpen, open, data }) {

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
              تیکت
            </Typography>
          </Toolbar>
        </AppBar>
        <MDBox display="flex" flexDirection="row">
          <Box>
            <Box sx={{ p: "40px" }}>
              <TextField
              disabled
                sx={{ m: 1, minWidth: 250 }}
                defaultValue={data && data.title}
                value={data && data.title}
                label="عنوان"
              ></TextField>
              <Divider />
              <TextField
              disabled
                sx={{ m: 1, minWidth: 250 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="دسته بندی "
                defaultValue={data && data.categoryName}
                value={data && data.categoryName}
              ></TextField>
              <Divider />
              <TextField
                sx={{ m: 1, minWidth: 250 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="اولویت"
                disabled
                defaultValue={data && data.priorityName}
                value={data && data.priorityName}
              ></TextField>
              <Divider />
            </Box>

            <TextField
              multiline={true}
              disabled
              label="متن پیام"
              value={data && data.body}
              sx={{ mx: "30px", minWidth: "90%" }}
              inputProps={{
                style: {
                  height: "150px",
                },
              }}
            ></TextField>
          </Box>
          <ChatUI data={data} />
        </MDBox>
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
