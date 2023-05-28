import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import {Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { InputLabel } from "@mui/material";
// Billing page components
import BillingInformation from "layouts/billing/components/BillingInformation";
import { Card } from "@mui/material";

function Form4(props) {
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
            label="تلفن همراه"
            variant="standard"
            fullWidth
          />
        </Box>

        <Box mt={4} mb={1}>
          <Button
            onClick={() => props.setValue(2)}
            variant="contained"
            fullWidth
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
  </Card>
  );
}

export default Form4;
