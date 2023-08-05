import { useRef, useEffect } from "react";
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
import {
  setUserID,
  setCityID,
  setShowData,
  setBarData,
} from "components/store/actions";
import { Alert ,Button} from "@mui/material";
// Billing page components
import ReactToPrint from "react-to-print";
import "./style.css";
function Print(props) {
  let componentRef = useRef();
  console.log(props.showID);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box mt={8}>
        <Box mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <ReactToPrint
                trigger={() => <Button variant="contained" sx={{mb:3}}>پرینت</Button>}
                content={() => componentRef}
              />
              <div
                ref={(el) => (componentRef = el)}
                class="page-break-inside"
                dir="rtl"
                style={{
                  backgroundColor: "white",
                  padding: "50px",
                  fontSize: "12px",
                  width: "100%",
                  border: "1px solid #000",
                }}
              >
                <table id="cost-center-detail-table" width="100%">
                  <thead>
                    <tr>
                      <th
                        style={{
                          border: "1px solid #111",
                          width: "80px",
                          overflow: "wrap",
                        }}
                      >
                        تاریخ
                      </th>
                      <th style={{ border: "1px solid #111" }}>{new Date(props.showID.issueDate * 1000).toLocaleDateString("fa-IR")}</th>
                      <th style={{ border: "none" }} rowspan="4">
                        <h1>بازارگاه هاگ بار</h1>
                        {/* <img
                          src="https://virabar.app/assets/img/barname-logo.png"
                          alt="jsj"
                          width="300"
                          srcset=""
                        /> */}
                      </th>
                      <th
                        style={{
                          border: "1px solid #111",
                          width: "80px",
                          overflow: "wrap",
                        }}
                      >
                        شرکت حمل
                      </th>
                      <th style={{ border: "1px solid #111" }}>{props.showID.executor}</th>
                    </tr>
                  </thead>
                </table>
                <br />

                <table
                  class="header_columns"
                  style={{ width: "100%", padding: "5px", borderSpacing: "0" }}
                >
                  <thead>
                    <h2 style={{ marginBottom: "20px", marginTop: "20px" }}>
                      اطلاعات بار
                    </h2>
                    <tr>
                      <th style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                        شماره بارنامه
                      </th>
                      <th>شرح محموله</th>
                      <th>وزن</th>
                      <th>مبدا</th>
                      <th>مقصد</th>
                      <th>کمیسیون بارنامه</th>
                      <th>ارزش بار</th>
                      <th>کرایه</th>
                      <th> شماره سریال بارنامه</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ alignItems: "center" }}>
                      <td
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          textAlign: "center",
                        }}
                      >
                        {props.showID.bolNr}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.goodsDescription}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.netWeight}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.senderCityName}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.receiverCityName}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.commissionAmount}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.goodsCost}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.fare}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.bolSerialNr}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="header_columns"
                  style={{ width: "100%", padding: "5px", borderSpacing: "0" }}
                >
                  <thead>
                    <h2 style={{ marginBottom: "20px", marginTop: "20px" }}>
                      {" "}
                      اطلاعات راننده و ماشین
                    </h2>
                    <tr>
                      <th style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                        نام و نام خانوادگی
                      </th>
                      <th>شماره هوشمند</th>
                      <th>شماره تماس</th>
                      <th>پلاک ماشین</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ alignItems: "center" }}>
                      <td
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          textAlign: "center",
                        }}
                      >
                        {props.showID.driver1FirstName +
                          " " +
                          props.showID.driver1LastName}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.driver1SmartCard}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.driver1MobileNr}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {props.showID.vehicleLicensePlateNr}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
  showID: state.showID,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserID: (value) => dispatch(setUserID(value)),
    setCityID: (value) => dispatch(setCityID(value)),
    setBarData: (value) => dispatch(setBarData(value)),
    setShowData: (value) => dispatch(setShowData(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Print);
