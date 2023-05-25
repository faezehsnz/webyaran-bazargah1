import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, faIR, GridToolbar } from "@mui/x-data-grid";
// import { connect } from 'react-redux';
// import { setData ,setReport } from '../../store/actions'
import styled from "@emotion/styled";
import { useDemoData } from "@mui/x-data-grid-generator";
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
      width:130
    },
    {
      field: "destinationWeight",
      headerName: "نوع پرداخت کرایه",
      headerAlign: "center",
      width:150
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
      width:160
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
      field: "paymentDate",
      headerName: "عملیات",
      headerAlign: "center",
      width: 110,
      // renderCell: (params) => {
      //   var date = params.value;
      //   var validDate = new Date(date * 1000).toLocaleDateString("fa-IR");
      //   return <p>{params.value != null ? validDate : " "}</p>;
      // },
    },
  ];
  // var date = new Date(props.report.issueDate * 1000);
  // var rowID = props.report.map((row) => row.paymentStatus)
  return (
    <Card id="delete-account">
      <Box pt={3} px={2}>
        <Typography variant="h6" fontWeight="medium">
          بارهای در صف پذیرش
        </Typography>
      </Box>
      <Box pt={1} pb={2} px={2}>
        <Box component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <StyledDataGrid
            slots={{ toolbar: GridToolbar }}
            localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
            //  sx={{
            //   '& .MuiDataGrid-row': {
            //     ...((params) => params.row.paymentStatus == 0 &&  {
            //       backgroundColor:"rgb(249, 210, 179)"
            //     }
            //     ),
            //     ...((params) => params.row.paymentStatus == 1 &&  {
            //       backgroundColor:"rgb(192, 216, 193)"
            //     }
            //     )
            //   }
            // }}
            // getRowClassName={(params) => `super-app-theme--${params.row.paymentStatus}`}
            // key={props.report.ID}
            // {...props.report}
            // getRowId={(row) => row.ID}
            columns={columns}
            rows={data}
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
            showCellVerticalBorder
          />
        </Box>
      </Box>
    </Card>
  );
}

export default BillingInformation;
