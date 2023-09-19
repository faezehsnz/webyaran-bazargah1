import React ,{useEffect}from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer"
import ProfilesList from "examples/Lists/ProfilesList";
// Overview page components
import Header from "layouts/profile/components/Header";
// import PlatformSettings from "layouts/profile/components/PlatformSettings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Data
import profilesListData from "layouts/profile/data/profilesListData";
import BasicModal from "./modal";

// Images
function Ticket() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(false);
  const local = JSON.parse(localStorage.getItem("key"));
  const postInfo = async (e) => {
      var bodyFormData = new FormData();
      bodyFormData.append("userID", local.userInfo.mobile);
      try {
        const response = await fetch(
          "https://hagbaar.com/api/Tickets/getTikectList",
          {
            mode: "cors",
            method: "POST",
            body: bodyFormData,
          }
        );
        // window.open('/dashboard' , '_self')
        const data = await response.json();
        setData(data.tickets)
      } catch (e) {
        toast(e.detail);
        // setError(e.message);
      }
  };
  useEffect(() => {
    postInfo()
  }, [2]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <DashboardLayout>
      <BasicModal handleClose={handleClose} handleOpen={handleOpen} open={open}/>
      <DashboardNavbar />
      <Box mb={2} />
      <Header handleOpen={handleOpen}>
        <Box mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={12}>
              <ProfilesList title="تیکت ها" profiles={data} shadow={false} />
            </Grid>
          </Grid>
        </Box>
      </Header>
      {/* <Footer /> */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </DashboardLayout>
  );
}

export default Ticket;
