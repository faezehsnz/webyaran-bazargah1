// react-routers components
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
import { Alert } from "@mui/material";
function ProfilesList({ title, profiles, shadow }) {
  const renderProfiles = profiles.map(
    ({ image, name, description, action, icon }) => (
      <MDBox
        key={name}
        component="li"
        display="flex"
        alignItems="center"
        py={1}
        mb={1}
      >
        <MDBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <MDTypography variant="button" fontWeight="medium">
            {name}
          </MDTypography>
          <MDTypography variant="caption" color="text">
            {description}
          </MDTypography>
        </MDBox>
      </MDBox>
    )
  );

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          {title}
        </MDTypography>
      </MDBox>

      <MDBox p={2}>
        <Alert variant="filled" severity="error">
          درصورتی که اطلاعات بار شما نامتعارف باشد بار ثبت میشود اما بعد از
          تایید ادمین در بازارگاه اعلام میشود!
        </Alert>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
