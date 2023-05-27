
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BillingInformation from "layouts/billing/components/BillingInformation";

function Notifications() {
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <Box mt={8}>
        <Box mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <BillingInformation title='بارهای درحال حمل'/>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Notifications;
