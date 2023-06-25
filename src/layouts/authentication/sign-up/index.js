import React from "react";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { InputLabel } from "@mui/material";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";
// Images
import bgImage from "assets/images/shutterstock_723474445.jpg";
import Footer from "examples/Footer";



function Cover(props) {
  const [value, setValue] = React.useState(0);
  return (
    <CoverLayout image={bgImage} >
      {value == 1 ? (
         <Form4 setValue={setValue}/>
      ) : value == 3 ? (
        <Form1 setValue={setValue}/>
      ) : value == 2 ? (
        <Form2 setValue={setValue}/>
      ) : (
       <Form3 setValue={setValue}/>
      )}
    </CoverLayout>
  );
}

export default Cover;