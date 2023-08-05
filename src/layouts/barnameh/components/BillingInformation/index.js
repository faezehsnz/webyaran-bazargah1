import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import City from "components/Checkout/data.json";
import Bar from "components/Checkout/bar.json";
// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, faIR, GridToolbar } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import NotificationItem from "examples/Items/NotificationItem";
import Menu from "@mui/material/Menu";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { connect } from "react-redux";
import {
  setUserID,
  setCityID,
  setShowData,
  setBarData,
} from "components/store/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  // direction: 'rtl',
  "& .super-app-theme--2": {
    backgroundColor: "rgb(192, 216, 193)",
  },
  "& .super-app-theme--1": {
    backgroundColor: "rgb(192, 216, 193)",
  },
  "& .super-app-theme--0": {
    backgroundColor: "rgb(249, 210, 179)",
  },
}));
// Billing page components
// import Bill from "layouts/billing/components/Bill";

function BillingInformation(props) {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);

  const handleCloseMenu = () => setOpenMenu(false);

  const renderMenu = (params) => (
    <>
      <Menu
        anchorEl={openMenu}
        anchorReference={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={Boolean(openMenu)}
        onClose={handleCloseMenu}
        sx={{ mt: 2 }}
      >
        <NotificationItem
          icon={<VisibilityOutlinedIcon />}
          title="نمایش"
          onClick={() => navigate("/print")}
        />
      </Menu>
    </>
  );
  const columns = [
    {
      field: "bolNr",
      headerName: "شماره بارنامه",
      headerAlign: "center",
      width: 140,
    },
    {
      field: "bolSerialNr",
      headerName: "سری بارنامه",
      headerAlign: "center",
      width: 140,
    },

    {
      field: "bilingDate",
      headerName: "تاریخ بارنامه",
      headerAlign: "center",
      width: 130,
      renderCell: (params) => {
        var date = params.value;
        var validDate = new Date(date * 1000).toLocaleDateString("fa-IR");
        return <p>{validDate}</p>;
      },
    },
    {
      field: "cargo_description",
      headerName: "نوع بار",
      headerAlign: "center",
      width: 130,
    },
    {
      field: "originName",
      headerName: "شهر مبدا",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "destinationName",
      headerName: "شهر مقصد",
      headerAlign: "center",
      width: 170,
    },
    {
      field: "driverName",
      headerName: "نام راننده",
      headerAlign: "center",
      width: 250,
      renderCell: (params) => {
        return (
          <p>{params.row.driverName && params.row.driverName.name + params.row.driverName.lastName}</p>
        );
      },
    },
    {
      field: "fare",
      headerName: "مقدار کرایه",
      headerAlign: "center",
      width: 160,
      renderCell: (params) => {
        return (
          <p>
            {params !== null && params !== undefined
              ? params.row.fare.toLocaleString()
              : 0}
          </p>
        );
      },
    },
    {
      field: "transportationCompani",
      headerName: "شرکت حمل",
      headerAlign: "center",
      width: 220,
      renderCell: (params) => {
        return (
          <p>
            {params.value == 0
              ? "در انتظار "
              : params.value > 0
              ? " پذیرش شده توسط " + params.row.hamlCompanyName.brandName
              : null}
          </p>
        );
      },
    },
    {
      field: "action",
      headerName: "عملیات",
      headerAlign: "center",
      align: "center",
      width: 110,
      renderCell: (params) => (
        <>
          <MoreHorizOutlinedIcon onClick={(e) => handleOpenMenu(e)}>
            move_vert
          </MoreHorizOutlinedIcon>
          {renderMenu(params.row)}
        </>
      ),
    },
  ];

  return (
    <Card id="delete-account">
      <Box
        pt={3}
        px={2}
        flexDirection="row"
        display="flex"
        justifyContent="space-between"
      >
        <Typography variant="h6" fontWeight="medium">
          {props.title}
        </Typography>
      </Box>
      <Box pt={1} pb={2} px={2}>
        <Box component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <StyledDataGrid
            slots={{ toolbar: GridToolbar }}
            getRowId={(row) => row.ID} 
            localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
            columns={columns}
            rows={props.report}
            // {...data}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            onRowClick={(rows) => {
              props.setShowData(rows.row);
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            checkboxSelection
            showCellVerticalBorder
          />
        </Box>
      </Box>
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
    </Card>
  );
}
const mapStateToProps = (state) => ({
  userId: state.userId,
  cityId: state.cityId,
  barData: state.barData,
  showID: state.showID,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserID: (value) => dispatch(setUserID(value)),
    setCityID: (value) => dispatch(setCityID(value)),
    setBarData: (value) => dispatch(setBarData(value)),
    setShowData: (value) => dispatch(setShowData(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BillingInformation);
