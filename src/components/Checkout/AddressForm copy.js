import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function MoreInfoForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
          سایر توضیحات
      </Typography>
      <p>پر کردن فیلد های ستاره دار (*) اجباری است.</p>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="فرستنده"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="lastName"
            name="lastName"
            label="شهر مبدا"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="address1"
            name="address1"
            label="محل بارگیری"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        </Grid>
        <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="فرستنده"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="lastName"
            name="lastName"
            label="شهر مبدا"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="address1"
            name="address1"
            label="محل بارگیری"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}