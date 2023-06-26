import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, faIR, GridToolbar } from "@mui/x-data-grid";
// import { connect } from 'react-redux';
// import { setData ,setReport } from '../../store/actions'
import styled from "@emotion/styled";
import { useDemoData } from "@mui/x-data-grid-generator";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NotificationItem from "examples/Items/NotificationItem";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { connect } from "react-redux";
import { setUserID, setCityID } from "components/store/actions";
import { setBarData } from "components/store/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
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
  const [openMenu, setOpenMenu] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [param, setParam] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);

  const handleCloseMenu = () => setOpenMenu(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const local = JSON.parse(localStorage.getItem("key"));
  const getData = async (params) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem("key"));
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("role", local.role);
    bodyFormData.append("barID", params.id);
    try {
      setLoading(true);
      const response = await fetch("https://hagbaar.com/api/bar/receptionBar", {
        mode: "cors",
        method: "POST",
        body: bodyFormData,
      });
      const data = await response.json();
      setLoading(false);
      if (data.error == 0) {
        toast.success(data.detail);
        // window.open('reservation' ,'_self')
      }
      if (data.error != 0) {
        setError(data.detail);
        toast.error(data.detail);
      }
    } catch (e) {
      // handleClickOpen();
      setError(e.detail);
    }
  };
  const getData1 = async (params) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem("key"));
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("role", local.role);
    bodyFormData.append("barID", params.id);
    try {
      setLoading(true);
      const response = await fetch(
        "https://hagbaar.com/api/bar/getBarByDriver",
        {
          mode: "cors",
          method: "POST",
          body: bodyFormData,
        }
      );
      const data = await response.json();
      setLoading(false);
      if (data.error == 0) {
        toast.success(data.detail);
        // window.open('reservation' ,'_self')
      }
      if (data.error != 0) {
        setError(data.detail);
        toast.error(data.detail);
      }
    } catch (e) {
      // handleClickOpen();
      setError(e.detail);
    }
  };
  const getData2 = async (params) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem("key"));
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("role", local.role);
    bodyFormData.append("barID", params.id);
    try {
      setLoading(true);
      const response = await fetch(
        "https://hagbaar.com/api/bar/getRemittanceBar",
        {
          mode: "cors",
          method: "POST",
          body: bodyFormData,
        }
      );
      const data = await response.json();
      setLoading(false);
      if (data.error == 0) {
        toast.success(data.detail);
        // window.open('reservation' ,'_self')
      }
      if (data.error != 0) {
        setError(data.detail);
        toast.error(data.detail);
      }
    } catch (e) {
      // handleClickOpen();
      setError(e.detail);
    }
  };
  const getData3 = async (params) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem("key"));
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("role", local.role);
    bodyFormData.append("barID", params.id);
    try {
      setLoading(true);
      const response = await fetch(
        "https://hagbaar.com/api/bar/getBarnamehBar",
        {
          mode: "cors",
          method: "POST",
          body: bodyFormData,
        }
      );
      const data = await response.json();
      setLoading(false);
      if (data.error == 0) {
        toast.success(data.detail);
        // window.open('reservation' ,'_self')
      }
      if (data.error != 0) {
        setError(data.detail);
        toast.error(data.detail);
      }
    } catch (e) {
      // handleClickOpen();
      setError(e.detail);
    }
  };
  const getData4 = async (params) => {
    var bodyFormData = new FormData();
    const local = JSON.parse(localStorage.getItem("key"));
    bodyFormData.append("userID", local.userInfo.ID);
    bodyFormData.append("role", local.role);
    bodyFormData.append("barID", params.id);
    try {
      setLoading(true);
      const response = await fetch(
        "https://hagbaar.com/api/bar/getDeliverBar",
        {
          mode: "cors",
          method: "POST",
          body: bodyFormData,
        }
      );
      const data = await response.json();
      setLoading(false);
      if (data.error == 0) {
        toast.success(data.detail);
        // window.open('reservation' ,'_self')
      }
      if (data.error != 0) {
        setError(data.detail);
        toast.error(data.detail);
      }
    } catch (e) {
      // handleClickOpen();
      setError(e.detail);
    }
  };
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
          onClick={() => {
            // window.open("/bar/show", "_self");
            props.setBarData(params);
          }}
          icon={<VisibilityOutlinedIcon />}
          title="نمایش"
        />
        <NotificationItem
          icon={<ModeEditOutlineOutlinedIcon />}
          title="ویرایش"
        />
        <NotificationItem icon={<DeleteOutlineOutlinedIcon />} title="حذف" />
        {local.role == 3 &&
        params.the_status == 0 &&
        params.transportationCompani == 0 ? (
          <NotificationItem
            icon={<MenuOutlinedIcon />}
            title="پذیرفتن"
            onClick={() => getData(params)}
          />
        ) : local.role == 1 &&
          params.transportationCompani > 0 &&
          params.the_status == 0 ? (
          <NotificationItem
            icon={<MenuOutlinedIcon />}
            title="رزرو"
            onClick={() => getData1(params)}
          />
        ) : local.role == 3 &&
          params.the_status > 0 &&
          params.transportationCompani > 0 ? (
          <NotificationItem
            icon={<MenuOutlinedIcon />}
            title="حواله"
            onClick={() => getData2(params)}
          />
        ) : local.role == 3 &&
          params.the_status > 0 &&
          params.transportationCompani > 0 &&
          params.havale_id > 0 &&
          params.receipt == 0 ? (
          <NotificationItem
            icon={<MenuOutlinedIcon />}
            title="بارنامه کردن"
            onClick={() => getData3(params)}
          />
        ) : params.the_status > 0 &&
          params.receipt == 2 &&
          params.active == 0 ? (
          <NotificationItem
            icon={<MenuOutlinedIcon />}
            title="تحویل دادن"
            onClick={() => getData4(params)}
          />
        ) : null}
        {/* ) : (
        <NotificationItem
          icon={<MenuOutlinedIcon />}
          title="رزرو توسط راننده"
          onClick={() => getData(params)}
        />
        )} */}
      </Menu>
    </>
  );
  const columns = [
    {
      field: "cargo_description",
      headerName: "نوع بار",
      headerAlign: "center",
      width: 130,
    },
    {
      field: "loading_time",
      headerName: "زمان بارگیری",
      headerAlign: "center",
      width: 130,
      renderCell: (params) => {
        var date = params.value;
        var validDate = new Date(date * 1000).toLocaleDateString("fa-IR");
        return <p>{validDate}</p>;
      },
    },
    {
      field: "type_of_wage",
      headerName: "نوع پرداخت کرایه",
      headerAlign: "center",
      width: 150,
      renderCell: (params) => {
        return <p>{params.value == 1 ? "کرایه در مبدا" : "کرایه در مقصد"}</p>;
      },
    },
    {
      field: "download_location",
      headerName: "شهر مبدا",
      headerAlign: "center",
      // renderCell: (params) => {
      //   var date = params.value
      //   var validDate = new Date(date * 1000).toLocaleDateString('fa-IR');
      //   return <p>{validDate}</p>
      // }
    },
    {
      field: "discharge_location",
      headerName: "شهر مقصد",
      headerAlign: "center",
    },
    {
      field: "fare",
      headerName: "مقدار کرایه",
      headerAlign: "center",
      width: 160,
    },
    {
      field: "the_status",
      headerName: "وضعیت حمل",
      headerAlign: "center",
      width: 250,
      renderCell: (params) => {
        return (
          <p>
            {params.value === 0
              ? "در انتظار پذیرش"
              : params.value === 3 ? " پذیرش شده توسط " +
                params.row.driverName.name +
                params.row.driverName.lastName :null}
          </p>
        );
      },
    },
    {
      field: "transportationCompani",
      headerName: "شرکت حمل",
      headerAlign: "center",
      width: 140,
      renderCell: (params) => {
        return <p>{params.value === 0 ? "در انتظار " : "پذیرش شده"}</p>;
      },
    },
    {
      field: "receipt",
      headerName: "وضعیت تحویل",
      headerAlign: "center",
      width: 140,
      renderCell: (params) => {
        return (
          <p>
            {params.value === 0
              ? "در مبدا "
              : params.value === 2
              ? "درحال حمل"
              : "درمقصد"}
          </p>
        );
      },
    },
    {
      field: "asssss",
      headerName: "عملیات",
      headerAlign: "center",
      align: "center",
      width: 110,
      renderCell: (params) => (
        <>
          {/* {setParam(params)} */}
          <MoreHorizOutlinedIcon onClick={(e) => handleOpenMenu(e)}>
            move_vert
          </MoreHorizOutlinedIcon>
          {renderMenu(params.row)}
          {/* {confirmDialog()} */}
        </>
      ),
    },
  ];
  // var date = new Date(props.report.issueDate * 1000);
  // var rowID = props.report.map((row) => row.paymentStatus)
  const rows = [
    { id: 1, name: "Snow", lname: "Jon", type: 35 },
    { id: 2, name: "Snow", lname: "Jon", type: 35 },
    { id: 3, name: "Snow", lname: "Jon", type: 35 },
    { id: 4, name: "Snow", lname: "Jon", type: 35 },
    { id: 5, name: "Snow", lname: "Jon", type: 35 },
    { id: 6, name: "Snow", lname: "Jon", type: 35 },
    { id: 7, name: "Snow", lname: "Jon", type: 35 },
    { id: 8, name: "Snow", lname: "Jon", type: 35 },
    { id: 9, name: "Snow", lname: "Jon", type: 35 },
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
        {props.title == "بارهای حواله شده در بازارگاه" ? (
          <Button variant="contained" sx={{ color: "#FFF" }}>
            حواله کردن ({0}) بارنامه
          </Button>
        ) : null}
      </Box>
      <Box pt={1} pb={2} px={2}>
        <Box component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <StyledDataGrid
            slots={{ toolbar: GridToolbar }}
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserID: (value) => dispatch(setUserID(value)),
    setCityID: (value) => dispatch(setCityID(value)),
    setBarData: (value) => dispatch(setBarData(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BillingInformation);
