import { useState } from "react";
import {
  FormHelperText,
  Typography,
  Input,
  Button,
  InputLabel,
  Card,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { setType } from "components/store/actions";
import { setMobile } from "components/store/actions";

function Form4(props) {
  const [error, setError] = useState(false);
  const postPhoneNumber = async (e) => {
    if (props.mobile === null) {
      setError(true);
    } else {
      var bodyFormData = new FormData();
      bodyFormData.append("role", props.type);
      bodyFormData.append("mobile", props.mobile);
      try {
        const response = await fetch(
          "https://hagbaar.com/api/auth/createUser",
          {
            mode: "cors",
            method: "POST",
            body: bodyFormData,
          }
        );
        const data = await response.json();
        if (data.error == 0) {
          props.setValue(2);
        }
        if (data.error !== 0) {
          toast.error(data.detail);
        }
      } catch (e) {
        toast(e.detail);
        // setError(e.message);
      }
    }
  };

  return (
    <Card sx={{ mt: -13 }}>
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
        <Typography display="block" variant="button" color="white" my={3}>
          لطفا شماره تماس خودتان را وارد کنید!
        </Typography>
      </Box>
      <Box pt={4} pb={3} px={3}>
        <Box component="form" role="form">
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              تلفن همراه
            </InputLabel>
            <Input
              required
              type="number"
              error={error}
              label="تلفن همراه"
              variant="standard"
              fullWidth
              onChange={(e) => props.setMobile(e.target.value)}
            />
            {error === true && (
              <FormHelperText sx={{ color: "red" }}>
                فیلد تلفن همراه نمیتواند خالی باشد
              </FormHelperText>
            )}
          </Box>

          <Box mt={4} mb={1}>
            <Button
              // onClick={() => }
              variant="contained"
              fullWidth
              onClick={postPhoneNumber}
              onKeyUp={(event) => {
                if (event.ctrlKey && event.key == "Enter") {
                  postPhoneNumber()
                }
              }}
            >
              دریافت کد
            </Button>
          </Box>
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    setType: (value) => dispatch(setType(value)),
    setMobile: (value) => dispatch(setMobile(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form4);
