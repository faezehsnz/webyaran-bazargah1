import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Card } from "@mui/material";
// Material Dashboard 2 React components

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
// Overview page components
import Header from "layouts/aboutUs/components/Header";
// import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
import BasicModal from "./modal";

// Images
function AboutUs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box mb={2} />
      <Header handleOpen={handleOpen}>
        <Grid container spacing={1}>
          <Grid item xs={12} xl={12}>
            <MDBox pt={2} px={2}>
              <MDTypography
                variant="h6"
                fontWeight="medium"
                textTransform="capitalize"
              >
                درباره ما
              </MDTypography>
            </MDBox>

            <MDBox p={2}>
              <p style={{ fontSize: "15px" }}>
                شرکت حمل و نقل هاگ بار در 1373/6/7 تأسیس گردید و تا اواخـر سـال
                1386 که در اختیار سهامداران فعلی قرار گرفت فعالیت قابل ذکری
                نداشت و در 7-8 سال آخر نیز عملا غیر فعال بود . در 1387 با
                سازماندهی و فراهم نمودن شرایـط فعالیت و خـرید تعـداد ده دستگاه
                کانتینر یخچالدار شرکت عملا به عرصه حمل و نقل کشور وارد شد و با
                استفاده از کشنده های خود مالک و کانتینر های متعلق به خود اقدام
                به فعالیت نمود .<br></br>طی سال 1388 با خرید 6 دستگاه کشنده ولو
                و 6 دستگاه کشنده رنو و چهل دستگاه کانتینر یخچالدار فعالیت های
                شرکت شدت یافت . شرکت نسبت به تقویت ناوگان و حضور قوی و مؤثر در
                حمل و نقل کشور از سال 1389 اقداماتی انجام نموده ودرحال حاضر
                علاوه برفعالیت دربخش حمل ونقل بین المللی یکی از بزرگترین شرکتهای
                حمل ونقل جاده ای توانمند کشورنیزمیباشد
              </p>
              <Box
                sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <p>
                    <i className="material-icons">&#xe0c8;</i> آدرس
                    <br></br>
                  </p>
                  <p style={{ fontSize: "12px", marginTop: "10px" }}>
                    تهران کیلومتر12جاده مخصوص کرج خیابان سپاه اسلام خیابان جلال
                    <br></br>
                    کدپستی: 1389814651
                  </p>
                  <p style={{ marginTop: "30px" }}>
                    <i className="material-icons">&#xe8c5; </i> اطلاعات تماس
                    <br></br>
                  </p>
                  <p style={{ fontSize: "12px", marginTop: "10px" }}>
                    دفتر مدیریت: 44907166-8 44908911
                    <br></br>
                    امورعملیات: 44907161-4
                    <br></br>
                    امور فنی: 44907165
                    <br></br>
                    امورشعب ونمایندگیها: -44909315 -44909313 -44909311
                  </p>
                  <p style={{marginTop:'30px'}}>
                   <i className="material-icons">&#xe158;	</i> ایمیل 
                    <br></br>
                    </p>
                    <p style={{ fontSize: "12px" ,marginTop:'10px'}}>
                    <a href="mailto:info@hagbarco.com">info@hagbarco.com</a>
                    <br></br>
                    <a href="mailto:info@hbtc.biz">info@hbtc.biz</a>
                    <br></br>
                    <a href="http://hagbarco.com/default.aspx?PID=صفحه%20نخست">Website:hagbarco.com</a>
                  </p>
                </Box>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.9601568668722!2d51.20662183432651!3d35.70390797011258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfaf1d3a6ae11%3A0x607c16dd4a9c361d!2z2LTYsdqp2Kog2K3ZhdmEINmIINmG2YLZhCDYqNuM2YYg2KfZhNmF2YTZhNuMINmH2KfaryDYqNin2LE!5e0!3m2!1sen!2s!4v1560689070585!5m2!1sen!2s"
                  width="300"
                  height="250"
                  frameBorder="0"
                  style={{ border: "0px" }}
                ></iframe>
              </Box>
            </MDBox>
          </Grid>
        </Grid>
      </Header>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default AboutUs;
