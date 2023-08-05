import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { InputLabel, Select, MenuItem, Divider, Input } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
export default function AddressForm(props) {
  console.log(props.data)
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
            defaultValue={{ name: props.data.TypeBarName }}
            getOptionLabel={(option) => option.name}
            onChange={(e , value)=> props.setType(value.id)}
            renderInput={(params) => (
              <TextField variant="standard" 
              {...params}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', 
              }}
               label="نوع بار" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="lastName"
            name="lastName"
            label="شرح محموله"
            defaultValue={props.data.cargo_description}
            onChange={(e) => props.setCargoDescription(e.target.value)}
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
            getOptionLabel={(option) => option.name}
            onChange={(e , value)=> props.setPacking2(value.id)}
            defaultValue={{ name: props.data.pakingName }}
            renderInput={(params) => (
              <TextField variant="standard" 
              {...params}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', 
              }}
              label="نوع بسته بندی" />
            )}
          />
        </Grid>
        <Divider variant="middle" />
        <Grid container spacing={3} mt={1} ml={1}>
          <Grid item xs={12} sm={2}>
            <TextField
              id="standard-start-adornment"
              defaultValue={props.data.weight}
              variant="standard"
              label="وزن*"
              onChange={(e) => props.setWight(e.target.value)}
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
              defaultValue={props.data.thickness}
              onChange={(e) => props.setWidth(e.target.value)}
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
              defaultValue={props.data.width}
              onChange={(e) => props.setLength(e.target.value)}
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
              onChange={(e) => props.setThickness(e.target.value)}
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
              defaultValue={props.data.number}
              onChange={(e) => props.setNumber(e.target.value)}
              dir="ltr"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">عدد</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                ترافیک بار
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={age}
                onChange={(e) => props.setTrafficBar(e.target.value)}
                defaultValue={props.data.trafficBar == 1 ? 1 : 0}
                label=""
              >
                <MenuItem value={0}>بار عادی</MenuItem>
                <MenuItem value={1}>بار ترافیکی</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={1} ml={1}>
          <Grid item xs={12} sm={3}>
            <Autocomplete
              disablePortal
              id="clear-on-escape"
              options={props.carTypes}
              getOptionLabel={(option) => option.name}
            onChange={(e , value)=> props.setCarType(value.id)}
            renderInput={(params) => (
              <TextField variant="standard" 
              {...params}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', 
              }}
                label="نوع ماشین" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                پوشش ماشین
              </InputLabel>
              <Input
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                defaultValue={props.data.cover_type_car_features}
                // value={age}
                // onChange={handleChange}
                // onChange={(e) => props.setNumber(e.target.value)}
                label="پوشش ماشین"
              >
                {/* <MenuItem value="44"></MenuItem>
                <MenuItem value={10}>کفی</MenuItem> */}
                {/* <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
              </Input>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
