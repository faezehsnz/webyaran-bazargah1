import React from "react";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, faIR, GridToolbar } from "@mui/x-data-grid";
// import { connect } from 'react-redux';
// import { setData ,setReport } from '../../store/actions'
import styled from "@emotion/styled";
import { useDemoData } from "@mui/x-data-grid-generator";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NotificationItem from "examples/Items/NotificationItem";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
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
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const confirmDialog = () => (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  const renderMenu = () => (
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
      <NotificationItem onClick={() => window.open('/bar/show' ,'_self')} icon={<VisibilityOutlinedIcon/>} title="نمایش" />
      <NotificationItem icon={<ModeEditOutlineOutlinedIcon/>} title="ویرایش" />
      <NotificationItem icon={<DeleteOutlineOutlinedIcon/> } title="حذف" />
      <NotificationItem icon={<MenuOutlinedIcon/>} title="حواله کردن" />
    </Menu>
    </>
  );
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    maxColumns: 6,
  });
  const columns = [
    {
      field: "type",
      headerName: "نوع بار",
      headerAlign: "center",
    },
    {
      field: "loading_time",
      headerName: "زمان بارگیری",
      headerAlign: "center",
      width: 130,
    },
    {
      field: "destinationWeight",
      headerName: "نوع پرداخت کرایه",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "origin",
      headerName: "شهر مبدا",
      headerAlign: "center",
      // renderCell: (params) => {
      //   var date = params.value
      //   var validDate = new Date(date * 1000).toLocaleDateString('fa-IR');
      //   return <p>{validDate}</p>
      // }
    },
    {
      field: "destination",
      headerName: "شهر مقصد",
      headerAlign: "center",
    },
    {
      field: "receiverCityName",
      headerName: "نوع کرایه پیشنهادی",
      headerAlign: "center",
      width: 160,
    },
    {
      field: "fullName",
      headerName: "وضعیت حمل",
      headerAlign: "center",
      width: 190,
      // valueGetter: (params) =>
      // `${params.row.driver1FirstName || ''} ${params.row.driver1LastName || ''}`,
    },
    {
      field: "payToDriver",
      headerName: "شرکت حمل",
      headerAlign: "center",
      width: 120,
    },
    {
      field: "paymentDate",
      headerName: "وضعیت تحویل",
      headerAlign: "center",
      width: 110,
      // renderCell: (params) => {
      //   var date = params.value;
      //   var validDate = new Date(date * 1000).toLocaleDateString("fa-IR");
      //   return <p>{params.value != null ? validDate : " "}</p>;
      // },
    },
    {
      field: "paymentStatus",
      headerName: "وضعیت",
      headerAlign: "center",
      width: 160,
      // renderCell: (params) => {
      //   const isRejected = params.value == 0;
      //   return <p>{isRejected ? "پرداخت نشده" : "پرداخت شده"}</p>;
      // },
    },
    {
      field: "asssss",
      headerName: "عملیات",
      headerAlign: "center",
      align: 'center',
      width: 110,
      renderCell: (params) => (
        <>
          <MoreHorizOutlinedIcon onClick={handleOpenMenu} >
            move_vert
          </MoreHorizOutlinedIcon>
          {renderMenu()}
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
            rows={rows}
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
    </Card>
  );
}

export default BillingInformation;
