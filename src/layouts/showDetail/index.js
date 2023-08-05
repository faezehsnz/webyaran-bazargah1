import { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Data

// RTL components
import Projects from "layouts/rtl/components/Projects";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setDirection } from "context";
import Map from "./map";
import { Alert, Typography } from "@mui/material";
import { connect } from "react-redux";
import { setShowData } from "components/store/actions";
import Table from "./table";
import DriverTable from "./driverTable";

function ShowDetail(props) {
  const [, dispatch] = useMaterialUIController();
  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "rtl");
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {props.showID.length != 0 ? (
        <>
          <Grid container spacing={4} mt={3} justifyContent="center">
            <Grid
              container
              spacing={1}
              mb={5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} md={3.5}>
                <Alert
                  variant="filled"
                  severity="success"
                  sx={{ color: "#FFF" }}
                >
                  وضعیت بار{" "}
                  {props.showID !== null
                    ? props.showID.active == 1
                      ? "فعال "
                      : "غیرفعال"
                    : "نامشخص"}{" "}
                  است!
                </Alert>
              </Grid>
              <Grid item xs={12} md={3.5}>
                <Alert variant="filled" severity="info">
                  بار در وضعیت{" "}
                  {props.showID !== null
                    ? props.showID.receipt == 0
                      ? "در انتظار حمل "
                      : props.showID.receipt == 2
                      ? "درحال حمل"
                      : "درمقصد"
                    : "نامشخص"}{" "}
                  قرار دارد
                </Alert>
              </Grid>
              <Grid item xs={12} md={3.5}>
                <Alert
                  variant="filled"
                  severity="warning"
                  sx={{ color: "#FFF" }}
                >
                  {props.showID !== null
                    ? props.showID.type_of_wage == 0
                      ? "کرایه در مبدا"
                      : props.showID.type_of_wage == 1
                      ? "کرایه در مقصد"
                      : "نامشخص"
                    : null}
                </Alert>
              </Grid>
            </Grid>
             <Grid item xs={12} md={6}>
              <Grid item xs={12}>
                <Card>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    sx={{ backgroundColor: "#344767" }}
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <Typography color="#FFF">اطلاعات بار</Typography>
                  </MDBox>
                  <MDBox pt={3}>
                    {props.showID !== null ? (
                      <Table report={props.showID} />
                    ) : (
                      "اطلاعاتی جهت نمایش وجود ندارد"
                    )}
                  </MDBox>
                </Card>
              </Grid>
             <Grid item xs={12} mt={6}>
                <Card>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    sx={{ backgroundColor: "#344767" }}
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <Typography color="#FFF">اطلاعات راننده و ماشین</Typography>
                  </MDBox>
                  <MDBox pt={3}>
                    {props.showID !== null ? (
                      <DriverTable report={props.showID} />
                    ) : (
                      "اطلاعاتی جهت نمایش وجود ندارد"
                    )}
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  sx={{ backgroundColor: "#344767" }}
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <Typography color="#FFF">موقعیت </Typography>
                </MDBox>
                <MDBox pt={3}>
                  <Typography mx={3} variant="h6">
                    زمان بارگیری:
                    {props.showID !== null
                      ? new Date(
                          props.showID.loading_time * 1000
                        ).toLocaleDateString("fa-IR")
                      : null}
                  </Typography>
                  <Typography mx={3} mt={2} variant="h6">
                    زمان تخلیه:{" "}
                    {props.showID !== null
                      ? new Date(
                          props.showID.discharge_time * 1000
                        ).toLocaleDateString("fa-IR")
                      : null}
                  </Typography>
                  <Map />
                </MDBox>
              </Card>
            </Grid> 
          </Grid>
        </>
      ) : (
        <p>اطلاعاتی جهت نمایش وجود ندارد</p>
      )}
      {/* <Footer /> */}
    </DashboardLayout>
  );
}
const mapStateToProps = (state) => ({
  showID: state.showID,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setShowData: (value) => dispatch(setShowData(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
