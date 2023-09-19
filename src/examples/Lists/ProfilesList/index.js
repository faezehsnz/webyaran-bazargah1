import React from "react";
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import { Icon } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import BasicModal from "layouts/profile/ticket";
function ProfilesList(props) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const handleOpen = (e) => {
    setOpen(true);
    setSelected(e);
  };
  const handleClose = () => setOpen(false);
  const renderProfiles =
    props.profiles &&
    props.profiles.map((i) => (
      <MDBox
        key={i.ID}
        component="li"
        display="flex"
        alignItems="center"
        py={1}
        mb={1}
      >
        <MDBox
          mr={2}
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            py: 1,
            px: 1.3,
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            alignItems: "center",
          }}
        >
          {/* <Icon alt="something here" sx={{alignSelf:'center'}}>{icon}</Icon> */}
        </MDBox>
        <MDBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <MDTypography variant="button" fontWeight="medium">
            {i.title}
          </MDTypography>
          <MDTypography variant="caption" color="text">
            {i.body}
          </MDTypography>
        </MDBox>
        <MDBox ml="auto">
          <MDButton onClick={() => handleOpen(i)} variant="text" color="info">
            مشاهده
          </MDButton>
        </MDBox>
      </MDBox>
    ));

  return (
    <Card sx={{ height: "100%", boxShadow: "none" }}>
      <BasicModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        data={selected}
      />
      <MDBox pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          {props.title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ProfilesList;
