import { useState ,useEffect } from "react";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { connect } from "react-redux";
import { setUserID, setCityID ,setShowData ,setBarData} from "components/store/actions";
import { Alert } from "@mui/material";
// Billing page components
import BillingInformation from "layouts/billing/components/BillingInformation";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import GridDriver from "./gridDriver";
import GridCompany from "./gridCompany";
import GridOwner from "./gridOwner";

function Users(props) {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState("");
  const getData = async (e) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem('key'))
    bodyFormData.append("role", 4);
    bodyFormData.append("questionRole", e);
    try {
      setLoading(true);
      const response = await fetch("https://hagbaar.com/api/auth/getAdminUser", {
        mode: "cors",
        method: "POST",
        body: bodyFormData,
      });
      const data = await response.json();
      console.log(data.data)
      setReport(data.data);
      setLoading(false);
      if (error !== "0") {
        setError(data.detail);
      }
    } catch (e) {
      // handleClickOpen();
      setError(e.detail);
    }
  };
  const handleChange = async(event) => {
    await setValue(event.target.value);
    getData(event.target.value)
  };
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <Box mt={8}>
        <Box mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
            <Box sx={{ maxWidth: 220}}>
              <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">نقش</InputLabel>
                 <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   value={value}
                   label="نقش"
                   sx={{minHeight:50 , mb:5}}
                   onChange={handleChange}
                 >
                  <MenuItem value={1}>رانندگان</MenuItem>
                  <MenuItem value={2}>صاحبان کالا</MenuItem>
                  <MenuItem value={3}>شرکت های حمل</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {value == 1 ? (
                <GridDriver
                  report={report}
                  title='رانندگان'/>
              ) : value == 2 ? (
                <GridOwner
                  report={report}
                  title='صاحبان کالا'/>
              ) : value == 3 ? (
                <GridCompany
                  report={report}
                  title='شرکت های حمل'/>
              )
              :(
                <Alert severity="error">لطفا ابتدا نقش مورد نظر خود را انتخاب کنید.</Alert>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

const mapStateToProps = (state) => ({
  userId: state.userId,
  cityId: state.cityId,
  barData: state.barData,
  showID: state.showID
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserID: (value) => dispatch(setUserID(value)),
    setCityID: (value) => dispatch(setCityID(value)),
    setBarData: (value) => dispatch(setBarData(value)),
    setShowData: (value) => dispatch(setShowData(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
