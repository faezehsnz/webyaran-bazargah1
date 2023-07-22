import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormHelperText ,InputAdornment ,FormControl , InputLabel, Select, MenuItem} from '@mui/material';

export default function FinancialInfoForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
          اطلاعات مالی
      </Typography>
      <p>پر کردن فیلد های ستاره دار (*) اجباری است.</p>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={3}>
        <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              نوع پرداخت کرایه
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              onChange={(e) => props.setTypeOfWage(e.target.value)}
              defaultValue={10}
              label=""
            >
              <MenuItem value={0}>در مقصد</MenuItem>
              <MenuItem value={1}>در مبدا</MenuItem>
               <MenuItem value={3}>کیف پول</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          
        <TextField
            id="standard-start-adornment"
            variant="standard"
            label="ارزش کالا"
            defaultValue={props.lnsurance_value}
            onChange={(e) => props.setFare(e.target.value)}
            dir="ltr"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">ریال</InputAdornment>
              ),
            }}
          />
        </Grid>
       
        <Grid item xs={12} sm={3}>
        <FormControl variant="standard" fullWidth>
            <TextField
            id="standard-start-adornment"
            variant="standard"
            label="کرایه پیشنهادی"
            defaultValue={props.customer_offer_fare}
            onChange={(e) => props.setCustomerOfferFare(e.target.value)}
            dir="ltr"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">ریال</InputAdornment>
              ),
            }}
          />
            {/* <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              defaultValue={10}
              label="پوشش ماشین"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select> */}
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}