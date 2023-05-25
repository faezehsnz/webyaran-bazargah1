import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import { InputLabel, Select, MenuItem } from "@mui/material";
export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        اطلاعات بار
      </Typography>
      <p>پر کردن فیلد های ستاره دار (*) اجباری است.</p>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={3}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              نوع بار
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              defaultValue={10}
              label="نوع بار"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              نوع بسته بندی
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              defaultValue={10}
              label="نوع بسته بندی"
            >
              <MenuItem value="44"></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
            label="وزن"
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
            label="عرض بار"
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
            label="طول بار"
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
