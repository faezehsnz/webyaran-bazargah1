import { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import BillingInformation from "layouts/billing/components/BillingInformation";
// Data

// RTL components
import Projects from "layouts/rtl/components/Projects";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setDirection } from "context";

function Reservation() {
  const [, dispatch] = useMaterialUIController();

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "rtl");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box py={3}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <BillingInformation title='بارهای رزرو شده'/>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Reservation;
