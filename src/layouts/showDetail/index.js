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
import { Alert, Typography } from "@mui/material";
import BCGChart from "./test";

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
      {/* <BCGChart
        data={[
          { x: 50, y: 50, size: 10, color: 'red' },
          { x: 100, y: 100, size: 5, color: 'blue' },
          { x: 150, y: 50, size: 15, color: 'green' },
          { x: 200, y: 150, size: 7, color: 'orange' },
          { x: 250, y: 100, size: 12, color: 'purple' }
        ]}
        width={300}
        height={200}
      /> */}
      <Grid container spacing={4} mt={3} justifyContent="center">
        <Grid
          container
          spacing={1}
          mb={5}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={3.5}>
            <Alert variant="filled" severity="success" sx={{ color: "#FFF" }}>
              وضعیت بار فعال است!
            </Alert>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Alert variant="filled" severity="info">
              بار در وضعیت "در انتظار" قرار دارد
            </Alert>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Alert variant="filled" severity="warning" sx={{ color: "#FFF" }}>
              کرایه در "مبداء"
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
                <Typography color="#FFF">اطلاعات راننده </Typography>
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
              </Typography>
              <Typography mx={3} mt={2} variant="h6">
                زمان تخلیه:
              </Typography>

              <Map />
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
      </Grid>

      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default ShowDetail;
