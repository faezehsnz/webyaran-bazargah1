import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";

import Autocomplete from "@mui/material/Autocomplete";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

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
        <Grid item xs={12} sm={3}>
          <Autocomplete
            disablePortal
            id="clear-on-escape"
            options={props.cities != null ? props.cities : null}
            getOptionLabel={(option) => option.sazmaniCityName}
            onChange={(e, value) => props.setOrigin(value)}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", 
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
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                ampm={false}
                label="زمان بارگیری(از)"
                onChange={(e) => props.setLoadingTime(e)}
                minDate={new Date()}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                ampm={false}
                label="زمان بارگیری(تا)"
                onChange={(e) => props.setDownloadInterval(e)}
                minDate={props.loadingTime}
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
        <Grid item xs={12} sm={3}>
          <Autocomplete
            disablePortal
            id="clear-on-escape"
            options={props.cities != null ? props.cities : null}
            getOptionLabel={(option) => option.sazmaniCityName}
            onChange={(e, value) => props.setDestination(value.ID)}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", 
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
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                ampm={false}
                label="زمان تخلیه(از)"
                onChange={(e) => props.setDischargeTime(e)}
                minDate={props.downloadInterval}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                ampm={false}
                label="زمان تخلیه(تا)"
                onChange={(e) => props.setDrainInterval(e)}
                minDate={props.dischargeTime}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
