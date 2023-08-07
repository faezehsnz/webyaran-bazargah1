import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "layouts/authentication/components/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BillingInformation from "layouts/billing/components/BillingInformation";
import { connect } from "react-redux";
import {
  setUserID,
  setCityID,
  setShowData,
  setBarData,
  setID,
} from "components/store/actions";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Billing(props) {
  const navigate = useNavigate();

  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const login = async (e) => {
    const local = JSON.parse(localStorage.getItem("key"));
    console.log(local);
    var bodyFormData = new FormData();
    bodyFormData.append("role", local.role);
    bodyFormData.append("mobile", local.userInfo.mobile);
    bodyFormData.append("password", local.userInfo.password);
    try {
      const response = await fetch("https://hagbaar.com/api/auth/loginByPass", {
        mode: "cors",
        method: "POST",
        body: bodyFormData,
      });
      const data = await response.json();
      console.log(data.userInfo.status);
      if (data.userInfo.status != 1) {
        toast.error('شما مجاز به استفاده از بازارگاه نمیباشید');
        setTimeout(() => {
          window.open('/' , '_self')
        }, 5000);
      }
    } catch (e) {
      // toast(e.detail);
      // setError(e.message);
    }
  };
  const getData = async (e) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem("key"));
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("role", local.role);
    bodyFormData.append("cityID", local.userInfo.cityID);
    try {
      setLoading(true);
      const response = await fetch("https://hagbaar.com/api/bar/getBars", {
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
    login();
  }, [1]);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box mt={8}>
        <Box mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              {report !== [] ? (
                <BillingInformation
                  report={report}
                  title="بارهای در صف پذیرش"
                />
              ) : (
                <Alert severity="error">
                  {error == null ? "با مشخصات شما هیچ باری وجود ندارد" : error}
                </Alert>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Footer /> */}
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
    </DashboardLayout>
  );
}
const mapStateToProps = (state) => ({
  userId: state.userId,
  cityId: state.cityId,
  barData: state.barData,
  id: state.id,
  showID: state.showID,
  data: state.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserID: (value) => dispatch(setUserID(value)),
    setCityID: (value) => dispatch(setCityID(value)),
    setBarData: (value) => dispatch(setBarData(value)),
    setID: (value) => dispatch(setID(value)),
    setShowData: (value) => dispatch(setShowData(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Billing);
