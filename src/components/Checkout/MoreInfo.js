import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { DatePicker ,MobileDateTimePicker  ,DesktopDateTimePicker } from "@mui/x-date-pickers";
import Autocomplete from "@mui/material/Autocomplete";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function MoreInfoForm(props) {
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
            onChange={(e) => props.setSender(e.target.value)}
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
            options={props.cities != null ? props.cities : null}
            getOptionLabel={(option) => option.sazmaniCityName}
            onChange={(e , value) => props.setOrigin(value.id)}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
                label="مبدا"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="address1"
            name="address1"
            label="محل بارگیری"
            onChange={(e) => props.setDownloadLocation(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker   
            ampm={false}
              label="زمان بارگیری(از)"
              onChange={(e) => props.setLoadingTime(e)}
            />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker
              label="زمان بارگیری(تا)"
              onChange={(e) => props.setDownloadInterval(e)}
            />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={2}>
          <TextField
            id="firstName"
            name="firstName"
            label="گیرنده*"
            onChange={(e) => props.setReceiver(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Autocomplete
            disablePortal
            id="clear-on-escape"
            options={props.cities != null ? props.cities : null}
            getOptionLabel={(option) => option.sazmaniCityName}
            onChange={(e , value) => props.setDestination(value.id)}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
                label="مقصد"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="address1"
            name="address1"
            label="محل تخلیه"
            onChange={(e) => props.setDischargeLocation(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker
                 ampm={false}
              label="زمان تخلیه(از)"
              onChange={(e) => props.setDischargeTime(e)}
            />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker
            ampm={false}
              label="زمان تخلیه(تا)"
              onChange={(e) => props.setDrainInterval(e)}
            />
            </DemoContainer>
            {/* </DemoItem> */}
          </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
