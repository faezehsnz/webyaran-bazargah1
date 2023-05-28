import React from "react";
import {AppBar} from "@mui/material";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";

// Material Dashboard 2 React examples
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { InputLabel } from "@mui/material";
// Billing page components
import { connect } from "react-redux";
import { setType } from "components/store/actions";
import { Card } from "@mui/material";

function Form1(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card sx={{ marginTop: -20 }}>
      <Box
        variant="gradient"
        bgcolor="info"
        borderRadius="lg"
        coloredshadow="success"
        mx={2}
        p={3}
        mb={1}
        textAlign="center"
      >
        <Typography variant="h4" fontWeight="medium" color="white" mt={3}>
          ثبت نام
        </Typography>
        <Typography display="block" variant="button" color="white" my={1}>
          لطفا اطلاعات خودتان را به درستی وارد کنید
        </Typography>
      </Box>
      <Box pt={4} pb={3} px={3}>
      
        <Box component="form" role="form">
          {props.type == 1 ?
          <>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              نام و نام خانوادگی
            </InputLabel>
            <Input
              required
              type="نام و نام خانوادگی"
              label="Name"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              نام پدر
            </InputLabel>
            <Input
              required
              type="number"
               variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              کدملی
            </InputLabel>
            <Input
              required
              type="number"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">شماره گواهینامه</InputLabel>
            <Input
              required
              type="email"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              شماره هوشمند
            </InputLabel>
            <Input
              required
              type="number"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              آدرس
            </InputLabel>
            <Input
              required
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mt={4} mb={1}>
            <Button 
            component={Link}
            to="/dashboard"
            variant="contained" fullWidth>
              ثبت نام
            </Button>
          </Box>
          </>
        : props.type == 2 ?
        <>
         <TabContext value={value}>
        <Grid item xs={12} md={12} lg={12} >
            <AppBar position="static">
              <TabList onChange={handleChange}>
                <Tab value="0" label="حقیقی"/>
                <Tab value="1" label="حقوقی"/>
              </TabList>
            </AppBar>
          </Grid>
          <TabPanel value="0">
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              نام و نام خانوادگی
            </InputLabel>
            <Input
              required
              type="نام و نام خانوادگی"
              label="Name"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              شماره تلفن
            </InputLabel>
            <Input
              required
              type="number"
              label="تلفن همراه"
              variant="standard"
              fullWidth
            />
          </Box>
         
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">کدملی</InputLabel>
            <Input
              required
              type="email"
              label="کدملی"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">آدرس</InputLabel>
            <Input
              required
              type="text"
              label="آدرس"
              variant="standard"
              fullWidth
            />
          </Box>
          </TabPanel>
          <TabPanel value="1">
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              نام شرکت
            </InputLabel>
            <Input
              required
              type="نام شرکت"
              label="Name"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              شناسه ملی
            </InputLabel>
            <Input
              required
              type="number"
              label="شناسه ملی"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              شماره ثبت
            </InputLabel>
            <Input
              required
              type="number"
              label="شماره ثبت"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">نام رابط</InputLabel>
            <Input
              required
              type="text"
              label="نام و نام خانوادگی رابط"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              کدملی رابط
            </InputLabel>
            <Input
              required
              type="number"
              label=" کدملی رابط"
              variant="standard"
              fullWidth
            />
          </Box>

          </TabPanel>
          </TabContext>
          <Box mt={4} mb={1}>
            <Button 
            component={Link}
            to="/dashboard"
            variant="contained" fullWidth>
              ثبت نام
            </Button>
          </Box>
          </>
          : props.type == 3 ?
          <>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              نام 
            </InputLabel>
            <Input
              required
              type="نام "
              label="Name"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              شناسه ملی
            </InputLabel>
            <Input
              required
              type="number"
              label="شناسه ملی"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              شماره ثبت
            </InputLabel>
            <Input
              required
              type="number"
              label="شماره ثبت"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">شماره سازمان حمل و نقل</InputLabel>
            <Input
              required
              type="number"
              label="شماره سازمان حمل و نقل"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">نام رابط</InputLabel>
            <Input
              required
              type="text"
              label="نام و نام خانوادگی رابط"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              آدرس
            </InputLabel>
            <Input
              required
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <InputLabel htmlFor="standard-adornment-password">
              شماره تلفن
            </InputLabel>
            <Input
              required
              type="number"
              label="تلفن همراه"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box mt={4} mb={1}>
            <Button 
            component={Link}
            to="/dashboard"
            variant="contained" fullWidth>
              ثبت نام
            </Button>
          </Box>
          </>
          :
          <>
          لطفا نقش خود را وارد کنید
          <Button onClick={() => props.setValue(5)}> انتخاب نقش</Button>
          </>
         }
          
          <Box mt={3} mb={1} textAlign="center">
            <Typography variant="button" color="text">
              قبلا ثبت نام کرده اید؟
              <Typography
                  component={Link}
                  to="/"
                  variant="button"
                  color="info"
                  fontWeight="medium"
              >
                ورود
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

const mapStateToProps = state => ({
  type : state.type ,
});

const mapDispatchToProps = dispatch => {
return {
  setType: (value) => dispatch(setType(value)),
}
};

export default connect(mapStateToProps ,mapDispatchToProps)(Form1);
