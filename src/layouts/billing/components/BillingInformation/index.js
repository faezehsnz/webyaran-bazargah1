import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import City from "components/Checkout/data.json";
import Bar from "components/Checkout/bar.json";
// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  DataGrid,
  faIR,
  GridToolbar,
} from "@mui/x-data-grid";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import NotificationItem from "examples/Items/NotificationItem";
import Menu from "@mui/material/Menu";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
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
import FullScreenDialog from "../modal";

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
  const [open, setOpen] = React.useState(false);
  const [param, setParam] = React.useState(null);
  const [packing, setPacking] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [defaultP, setDefaultP] = React.useState(null);
  const [defaultC, setDefaultC] = React.useState(null);
  const [defaultD, setDefaultD] = React.useState(null);
  const [cities, setCities] = React.useState([
    {
      ID: "1",
      sazmaniCityXID: "26441030",
      sazmaniCityName: "نوجه ده سادات",
      TaxID: "1301000",
      TaxState: "13",
      Latitude: "37.9098127",
      Longitude: "46.9631703",
      active: "1",
    },
    {
      ID: "2",
      sazmaniCityXID: "26441031",
      sazmaniCityName: "کرگان",
      TaxID: "1301000",
      TaxState: "13",
      Latitude: "38.1067244",
      Longitude: "48.4829618",
      active: "1",
    },
  ]);
  const [goodTypes, setGoodTypes] = React.useState(null);
  const [carTypes, setCarTypes] = React.useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);

  const handleCloseMenu = () => setOpenMenu(false);

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
  const getProps = async (e) => {
    setCities(City.cities.map((option) => option));
    setPacking(City.pakings.map((option) => option));
    setCarTypes(City.mecanismTypes.map((option) => option));
    setGoodTypes(Bar.goodTypes.map((option) => option));
  };
  const FindIndexPacking = () => {
    if (props.showID !== [] && packing !== null) {
      const e = packing.filter((i) => i.id == props.showID.packing);
      setDefaultP(e);
      console.log(e);
    }
  };
console.log(props.showID)
  const FindIndexCity = async () => {
    if (props.showID !== [] && cities !== null) {
      console.log(cities, props.showID);
      const e = cities.filter((i) => i.ID == props.showID.origin);
      setDefaultC(e);
    }
  };
  const FindIndexDist = async () => {
    if (props.showID !== [] && cities !== null) {
      const e = cities.filter((i) => i.ID == props.showID.destination);
      console.log(e)
      setDefaultD(e);
    }
  };
  console.log(defaultD);
  useEffect(() => {
    getProps();
    FindIndexCity();
    FindIndexPacking();
    FindIndexDist();
  }, [open]);
  const renderMenu = (params) => (
    <>
      <FullScreenDialog
        dd={defaultD}
        dc={defaultC}
        dp={defaultP}
        data={props.showID !== null ? props.showID :null}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
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
          onClick={() => navigate("/bar/show")}
        />
        {props.showID !== null ? (
          <>
            {props.showID.active == 1 ? (
              <NotificationItem
                onClick={handleClickOpen}
                icon={<ModeEditOutlineOutlinedIcon />}
                title="ویرایش"
              />
            ) : null}
          </>
        ) : null}

        <NotificationItem icon={<DeleteOutlineOutlinedIcon />} title="حذف" />
        {props.showID !== null ? (
          <>
            {local.role == 3 &&
            props.showID !== null &&
            props.showID.the_status == 0 &&
            props.showID.transportationCompani == 0 ? (
              <NotificationItem
                icon={<MenuOutlinedIcon />}
                title="پذیرفتن"
                onClick={() => getData(props.showID)}
              />
            ) : local.role == 1 &&
              props.showID !== null &&
              props.showID.transportationCompani > 0 &&
              props.showID.the_status == 0 ? (
              <NotificationItem
                icon={<MenuOutlinedIcon />}
                title="رزرو"
                onClick={() => getData1(props.showID)}
              />
            ) : local.role == 3 &&
              props.showID.the_status > 0 &&
              props.showID.havale_id == 0 &&
              props.showID.transportationCompani > 0 ? (
              <NotificationItem
                icon={<MenuOutlinedIcon />}
                title="حواله"
                onClick={() => getData2(props.showID)}
              />
            ) : local.role == 3 &&
              props.showID !== null &&
              props.showID.the_status > 0 &&
              props.showID.transportationCompani > 0 &&
              props.showID.havale_id > 0 &&
              props.showID.receipt == 0 ? (
              <NotificationItem
                icon={<MenuOutlinedIcon />}
                title="بارنامه کردن"
                onClick={() => getData3(props.showID)}
              />
            ) : props.showID.the_status > 0 &&
              props.showID !== null &&
              props.showID.receipt == 2 &&
              props.showID.active == 0 ? (
              <NotificationItem
                icon={<MenuOutlinedIcon />}
                title="تحویل دادن"
                onClick={() => getData4(props.showID)}
              />
            ) : null}{" "}
          </>
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
  console.log(props.showID)
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
      field: "originName",
      headerName: "شهر مبدا",
      headerAlign: "center",
      width: 150,
      // renderCell: (params) => {
      //   var date = params.value
      //   var validDate = new Date(date * 1000).toLocaleDateString('fa-IR');
      //   return <p>{validDate}</p>
      // }
    },
    {
      field: "destinationName",
      headerName: "شهر مقصد",
      headerAlign: "center",
      width: 170,
    },
    {
      field: "ownerName",
      headerName: "صاحب بار",
      headerAlign: "center",
      width: 140,
    },
    {
      field: "fare",
      headerName: "مقدار کرایه",
      headerAlign: "center",
      width: 160,
      renderCell: (params) => {
        return (
          <p>
            {params !== null && params !== undefined ?  params.row.fare.toLocaleString() : 0 }
          </p>
        );
      },
    },
    {
      field: "the_status",
      headerName: "وضعیت حمل",
      headerAlign: "center",
      width: 250,
      renderCell: (params) => {
        return (
          <p>
            {params.value == 0
              ? "در انتظار پذیرش"
              : params.value > 0
              ? " پذیرش شده توسط " +
                params.row.driverName.name +
                params.row.driverName.lastName
              : null}
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
      field: "receipt",
      headerName: "وضعیت تحویل",
      headerAlign: "center",
      width: 140,
      renderCell: (params) => {
        return (
          <p>
            {params.value == 0
              ? "در انتظار حمل "
              : params.value == 2
              ? "درحال حمل"
              : "درمقصد"}
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
