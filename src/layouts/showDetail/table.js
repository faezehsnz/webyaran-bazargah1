import { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Typography ,Divider } from "@mui/material";
// Material Dashboard 2 React contexts
import { useMaterialUIController, setDirection } from "context";
import { connect } from "react-redux";
import { setShowData } from "components/store/actions";

function Table({report}) {
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
                    {report.cargo_description}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" color="inherit" textAlign="end">
                    شرح محموله :
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
                  {report.fare}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="p" color="inherit" textAlign="end">
                    کرایه :
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
export default connect(mapStateToProps, mapDispatchToProps)(Table);
