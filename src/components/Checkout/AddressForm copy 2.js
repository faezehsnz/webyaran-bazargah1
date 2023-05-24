import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormHelperText } from '@mui/material';

export default function FinancialInfoForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
          اطلاعات مالی
      </Typography>
      <p>پر کردن فیلد های ستاره دار (*) اجباری است.</p>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={2}>
          <TextField
            id="firstName"
            name="firstName"
            label="نوع پرداخت کرایه"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="lastName"
            name="lastName"
            label="ارزش کالا(ریال)"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="address1"
            name="address1"
            label="حداقل کرایه"
            fullWidth
            variant="standard"
          />
          <FormHelperText>این فیلد از سازمان گرفته میشود</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="address2"
            name="address2"
            label="نوع کرایه پیشنهادی"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="city"
            name="city"
            label="کرایه پیشنهادی مشتری(ریال)"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}