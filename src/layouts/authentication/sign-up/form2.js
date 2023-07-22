import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";

import { FormHelperText } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { InputLabel } from "@mui/material";
// Billing page components
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card } from "@mui/material";
import { useState } from "react";
import { connect } from "react-redux";
import { setType } from "components/store/actions";
import { setMobile } from "components/store/actions";

function Form2(props) {
  const [code, setCode] = useState(null);
  const [error, setError] = useState(false);
  const postCode = async (e) => {
    if (code === null) {
      setError(true);
    } else {
      var bodyFormData = new FormData();
      bodyFormData.append("role", props.type);
      bodyFormData.append("mobile", props.mobile);
      bodyFormData.append("activationalCode", code);
      try {
        const response = await fetch(
          "https://hagbaar.com/api/auth/mobileValidation",
          {
            mode: "cors",
            method: "POST",
            body: bodyFormData,
          }
        );
        // window.open('/dashboard' , '_self')
        const data = await response.json();
        if (data.error == 0) {
          props.setValue(3);
          // window.open('/dashboard' , '_self')
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
          فرآیند ثبت نام آغاز شد. لطفا کد پیامک شده را وارد کنید.
        </Typography>
      </Box>
      <Box pt={4} pb={3} px={3}>
        <Box component="form" role="form">
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">کد</InputLabel>
            <Input
              required
              type="number"
              label="تلفن همراه"
              variant="standard"
              fullWidth
              error={error}
              onChange={(e) => setCode(e.target.value)}
            />
            {error == true && (
              <FormHelperText sx={{ color: "red" }}>
                {" "}
                فیلد کد نمیتواند خالی باشد
              </FormHelperText>
            )}
          </Box>

          <Box mt={4} mb={1}>
            <Button
              onClick={() => postCode()}
              onKeyUp={(event) => {
                if (event.ctrlKey && event.key == "Enter") {
                  postCode();
                }
              }}
              variant="contained"
              fullWidth
            >
              وارد کردن اطلاعات
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

export default connect(mapStateToProps, mapDispatchToProps)(Form2);
