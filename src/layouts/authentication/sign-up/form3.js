import React from "react";
// Material Dashboard 2 React components
import Box from "@mui/material/Box";

import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { InputLabel } from "@mui/material";
// Billing page components
import { setType } from "components/store/actions";
import { Card } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { connect } from "react-redux";
function Form3(props) {
  //  var type = props.type
  const handleChange = (event) => {
    props.setType(event.target.value);
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
        <Typography display="block" variant="button" color="white" my={1}>
          لطفا نقش خود را انتخاب کنید
        </Typography>
      </Box>
      <Box pt={4} pb={3} px={3}>
        <Box>
          <FormControl variant="standard" fullWidth>
            <InputLabel
              id="demo-simple-select-standard-label"
              sx={{ marginTop: -1.5 }}
            >
              نقش
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={props.type}
              onChange={handleChange}
            >
              <MenuItem value={1}>راننده</MenuItem>
              <MenuItem value={2}>صاحب کالا</MenuItem>
              <MenuItem value={3}>شرکت حمل</MenuItem>
            </Select>
          </FormControl>
          <Box mt={4} mb={1}>
            <Button
              variant="contained"
              onClick={() => props.setValue(1)}
              fullWidth
            >
              بعدی
            </Button>
          </Box>
          <Box mt={3} mb={1} textAlign="center">
            <Typography variant="button" color="text">
              قبلا ثبت نام کرده اید؟
              <Typography
                  to="/"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
              >
                ورود
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
const mapStateToProps = (state) => ({
  type: state.type,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setType: (value) => dispatch(setType(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form3);
