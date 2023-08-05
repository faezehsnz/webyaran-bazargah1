import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
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

function Grid(props) {
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
          title="غیرفعال کردن"
          // onClick={() => navigate("/bar/show")}
        />
      </Menu>
    </>
  );
  const columns = [
    {
        field: "ID",
        headerName: "id",
        headerAlign: "center",
        width: 50,
    },
    {
      field: "brandName",
      headerName: "نام",
      headerAlign: "center",
      width: 130,
    },
    {
      field: "name",
      headerName: " نام رابط",
      headerAlign: "center",
      width: 130,
    },
    {
      field: "lastName",
      headerName: "نام خانوادگی رابط",
      headerAlign: "center",
      width: 130,
    },
    {
      field: "sabtNumber",
      headerName: "شماره ثبت",
      headerAlign: "center",
      width: 150,
    },
    {
      field: "hamlCode",
      headerName: "شماره حمل",
      headerAlign: "center",
      width: 130,
    },
    {
        field: "hamlType",
        headerName: "نوع",
        headerAlign: "center",
        width: 110,
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
  console.log(props.report)
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
          <DataGrid
            slots={{ toolbar: GridToolbar }}
            getRowId={(row) => row.ID} 
            localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
            columns={columns}
            rows={props.report}
            // {...props.report}
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
export default connect(mapStateToProps, mapDispatchToProps)(Grid);
