import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { InputLabel, Select, MenuItem ,FormControl} from "@mui/material";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      مکانیزم مورد نیاز حمل 
      </Typography>
      <p>پر کردن فیلد های ستاره دار (*) اجباری است.</p>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={3}>
        <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              نوع ماشین
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              defaultValue={10}
              label="نوع ماشین"
            >
              <MenuItem value="44"></MenuItem>
              <MenuItem value={10}>خاور</MenuItem>
              {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
        <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              پوشش ماشین
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              defaultValue={10}
              label="پوشش ماشین"
            >
              <MenuItem value="44"></MenuItem>
              <MenuItem value={10}>کفی</MenuItem>
              {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}