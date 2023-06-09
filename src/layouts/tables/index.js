
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import Checkout from "components/Checkout";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
    <DashboardNavbar />
    <Box py={3}>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
          <Checkout />
          </Grid>
        </Grid>
      </Box>
    </Box>
    {/* <Footer /> */}
  </DashboardLayout>
  
  );
}

export default Tables;
