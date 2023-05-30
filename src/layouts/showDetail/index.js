import { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import BillingInformation from "layouts/billing/components/BillingInformation";
// Data

// RTL components
import Projects from "layouts/rtl/components/Projects";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setDirection } from "context";
import Map from "./map";
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { Typography } from "@mui/material";

function ShowDetail() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [, dispatch] = useMaterialUIController();

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "rtl");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Grid container spacing={6} mt={5}>
        <Grid item xs={6} ml={4}>
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
              {/* <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
              /> */}
            </MDBox>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Box py={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={12}>
                  <Map />
                </Grid>
              </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default ShowDetail;
