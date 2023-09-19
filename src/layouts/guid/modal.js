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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BasicModal({ handleClose, handleOpen, open }) {
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
            <TextField sx={{ m: 1, minWidth: 250 }} label="عنوان"></TextField>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel
              id="demo-simple-select-label"
            >
              دسته بندی 
            </InputLabel>
            <Select
            sx={{height:'45px'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label='دسته بندی '
            >
              <MenuItem value={1}>مالی</MenuItem>
              <MenuItem value={2}>بار</MenuItem>
            </Select>
          </FormControl>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel
              id="demo-simple-select-label"
            >
              اولویت 
            </InputLabel>
            <Select
            sx={{height:'45px'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label='اولویت'
            >
              <MenuItem value={0}>پایین</MenuItem>
              <MenuItem value={1}>بالا</MenuItem>
              <MenuItem value={2}>بحرانی</MenuItem>
            </Select>
          </FormControl>
          <Divider />
        </Box>
        
        <TextField multiline={true} label="متن پیام" sx={{mx:'30px' ,minWidth:'90%' }} inputProps={{
      style: {
        height:'150px',
      },
  }}></TextField>
        <Button
          autoFocus
          variant="contained"
          sx={{ width: "300px", alignSelf: "center" ,mt:3}}
          onClick={handleClose}
        >
          ارسال
        </Button>
      </Dialog>
    </div>
  );
}
