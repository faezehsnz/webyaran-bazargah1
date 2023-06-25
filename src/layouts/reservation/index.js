import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BillingInformation from "layouts/billing/components/BillingInformation";
import { connect } from "react-redux";
import { setUserID, setCityID } from "components/store/actions";
import { setBarData ,setID} from "components/store/actions";

function Reservation(props) {
  const local = localStorage.getItem('data')
  const [open, setOpen] = React.useState(false);
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
      const response = await fetch("https://hagbaar.com/api/bar/getReservationBars", {
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
      <DashboardNavbar />
      <Box py={3}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              {loading === true ? (
                <BillingInformation report={report} title="بارهای رزرو شده" />
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
  id: state.id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserID: (value) => dispatch(setUserID(value)),
    setCityID: (value) => dispatch(setCityID(value)),
    setID: (value) => dispatch(setID(value)),
    setBarData: (value) => dispatch(setBarData(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
