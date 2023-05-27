/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Box mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="pending"
                title="بارهای در صف پذیرش"
                count={28}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "نسبت به هفته پیش",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box mb={1.5}>
              <ComplexStatisticsCard
                icon="cached"
                title="بارهای درحال حمل"
                count="25"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "نسبت به هفته پیش",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="local_shipping"
                title="تعداد کل ماشین ها"
                count="340"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "نسبت به هفته پیش",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="تعداد رانندگان"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "نسبت به هفته پیش",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Box mb={3}>
                <ReportsBarChart
                  color="info"
                  title="بارهای کنسل شده"
                  date="در هفته گذشته"
                  chart={reportsBarChartData}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box mb={3}>
                <ReportsLineChart
                  color="success"
                  title="تعداد ماشین ها"
                  date="در سال اخیر"
                  chart={sales}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Box mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="تعداد بارهای حمل شده"
                  date="در سال اخیر"
                  chart={tasks}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Projects />
            </Grid>
            {/* <Grid item xs={12} ={6} lg={4}>
              <OrdersOverview />
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
