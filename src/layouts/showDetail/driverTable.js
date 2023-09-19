import { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Typography ,Divider } from "@mui/material";
// Material Dashboard 2 React contexts
import { useMaterialUIController, setDirection } from "context";
import { connect } from "react-redux";
import { setShowData } from "components/store/actions";

function DriverTable({report}) {
  console.log(report)
  return (
    <>
      <Grid item xs={12} mb={3} display="flex" direction="column" justifyContent="center" maxWidth={100}>
        <Grid item xs={12} >
              <Grid
                container
                display="flex"
                direction="row-reverse"
                justifyContent="space-between"
                borderBottom="1px solid #D9D9D9"
                py={1}
                px={3}
              >
                <Grid item>
                  <Typography variant="p" color="inherit">
                    {report.driverName !== false ? report.driverName.name + report.driverName.lastName : 'بار برای راننده ای ثبت نشده است'}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" color="inherit" textAlign="end">
                    نام راننده :
                  </Typography>
                </Grid>
              </Grid>
        </Grid>
        <Divider
          orientation="vertical"
          variant="fullwidth"
          flexItem
          sx={{ border: "1px solid rgba(26, 55, 89, 0.24)" }}
        />
        <Grid item xs={12}>
              <Grid
                container
                display="flex"
                direction="row-reverse"
                justifyContent="space-between"
                borderBottom="1px solid #D9D9D9"
                px={3}
                py={1}
              >
                <Grid item>
                  <Typography variant="p" color="inherit">
                  {report.driverName !== false ? report.driverName.nationalCode :null}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" color="inherit" textAlign="end">
                    کد ملی :
                  </Typography>
                </Grid>
              </Grid>
        </Grid>
        <Grid item xs={12}>
              <Grid
                container
                display="flex"
                direction="row-reverse"
                justifyContent="space-between"
                borderBottom="1px solid #D9D9D9"
                px={3}
                py={1}
              >
                <Grid item>
                  <Typography variant="p" color="inherit">
                  {report.driverName !== false ? report.driverName.hoshmandNumber :null}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" color="inherit" textAlign="end">
                    شماره هوشمند :
                  </Typography>
                </Grid>
              </Grid>
        </Grid>
        <Grid item xs={12}>
              <Grid
                container
                display="flex"
                direction="row-reverse"
                justifyContent="space-between"
                borderBottom="1px solid #D9D9D9"
                px={3}
                py={1}
              >
                <Grid item>
                  <Typography variant="p" color="inherit">
                  {report.driverName !== false ? report.driverName.mobile :null}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" color="inherit" textAlign="end">
                    شماره تماس :
                  </Typography>
                </Grid>
              </Grid>
        </Grid>
        <Grid item xs={12}>
              <Grid
                container
                display="flex"
                direction="row-reverse"
                justifyContent="space-between"
                borderBottom="1px solid #D9D9D9"
                px={3}
                py={1}
              >
                <Grid item>
                  <Typography variant="p" color="inherit">
                  {report.driverName !== false ? report.driverName.ghavinameNumber :null}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" color="inherit" textAlign="end">
                    شماره گواهینامه :
                  </Typography>
                </Grid>
              </Grid>
        </Grid>
       
        </Grid>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(DriverTable);
