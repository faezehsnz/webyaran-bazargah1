import { useState ,useEffect } from "react";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { connect } from "react-redux";
import { setUserID, setCityID ,setShowData ,setBarData} from "components/store/actions";
import { Alert } from "@mui/material";
// Billing page components
import BillingInformation from "layouts/billing/components/BillingInformation";

function Canceled(props) {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getData = async (e) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem('key'))
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("role", local.role);
    bodyFormData.append("cityID", local.userInfo.cityID);
    try {
      setLoading(true);
      const response = await fetch("https://hagbaar.com/api/bar/getDeliveredBars", {
        mode: "cors",
        method: "POST",
        body: bodyFormData,
      });
      const data = await response.json();
      setReport(data.bars);
      setLoading(false);
      if (error !== "0") {
        setError(data.detail);
      }
    } catch (e) {
      // handleClickOpen();
      setError(e.detail);
    }
  };
  useEffect(() => {
    getData();
  }, [1]);
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <Box mt={8}>
        <Box mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
            {report !== [] ? (
                <BillingInformation
                  report={report}
                  title='بارهای در حال حمل'/>
              ) : (
                <Alert severity="error">{error}</Alert>
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
export default connect(mapStateToProps, mapDispatchToProps)(Canceled);
