import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { InputLabel, Select, MenuItem } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
export default function AddressForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        اطلاعات بار
      </Typography>
      <Typography>پر کردن فیلد های ستاره دار (*) اجباری است.</Typography>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={3}>
        <Autocomplete
              disablePortal
              id="clear-on-escape"
              options={props.goodTypes}
              renderInput={(params) => <TextField variant="standard" {...params} label="نوع بار" />}
            />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="lastName"
            name="lastName"
            label="شرح محموله"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
        <Autocomplete
              disablePortal
              id="clear-on-escape"
              options={props.packing}
              renderInput={(params) => <TextField variant="standard" {...params} label="نوع بسته بندی" />}
            />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="address2"
            name="address2"
            label="انبار"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="standard-start-adornment"
            variant="standard"
            label="وزن*"
            dir="ltr"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">کیلوگرم</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="standard-start-adornment"
            variant="standard"
            label="عرض بار*"
            dir="ltr"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">سانتی متر</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="standard-start-adornment"
            variant="standard"
            label="طول بار*"
            dir="ltr"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">سانتی متر</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="standard-start-adornment"
            variant="standard"
            label="ارتفاع بار"
            dir="ltr"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">سانتی متر</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="standard-start-adornment"
            variant="standard"
            label="تعداد"
            dir="ltr"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">عدد</InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
