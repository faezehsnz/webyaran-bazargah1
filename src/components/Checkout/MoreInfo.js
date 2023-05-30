import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import Autocomplete from "@mui/material/Autocomplete";

export default function MoreInfoForm(props) {
  console.log(props.cities)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        سایر توضیحات
      </Typography>
      <p>پر کردن فیلد های ستاره دار (*) اجباری است.</p>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={2}>
          <TextField
            id="firstName"
            name="firstName"
            label="فرستنده*"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          {/* <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              شهر مبدا*
            </InputLabel> */}
            <Autocomplete
              disablePortal
              id="clear-on-escape"
              // options={props.cities != null ? props.cities.map((option) => option.sazmaniCityName) :null}
              renderInput={(params) => <TextField variant="standard" {...params} label="مبدا" />}
            />
            {/* <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              defaultValue={10}
              label="نوع ماشین"
            >
              <MenuItem value="44"></MenuItem>
              <MenuItem value={10}>بندر ماهشهر</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select> */}
          {/* </FormControl> */}
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="address1"
            name="address1"
            label="محل بارگیری"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DatePicker label="زمان بارگیری(از)" />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={2}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DatePicker label="زمان بارگیری(تا)" />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={2}>
          <TextField
            id="firstName"
            name="firstName"
            label="گیرنده*"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
            <Autocomplete
              disablePortal
              id="clear-on-escape"
              options={props.cities.map((option) => option.sazmaniCityName)}
              renderInput={(params) => <TextField variant="standard" {...params} label="مقصد" />}
            />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="address1"
            name="address1"
            label="محل تخلیه"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DatePicker label="زمان تخلیه(از)" />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={2}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DatePicker label="زمان تخلیه(تا)" />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
