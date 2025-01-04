import { TextField, Button, Box, Typography, FormGroup, Checkbox, FormControlLabel, RadioGroup, FormLabel, Radio, FormControl, } from "@mui/material";
import React from "react";

function FormHandling() {

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "start", maxWidth: 400, margin:{xs:  "0 10px", sm: '0 auto'} , padding: 2, border: "1px solid #ccc", borderRadius: 2, boxShadow: 3,
      }}
    >
      <Typography variant='h5' gutterBottom> User Form </Typography>

      <form>
        <TextField required size="small" label="Email" variant="outlined" type="email" fullWidth margin="normal"/>
        <TextField required size="small" label="Password" variant="outlined" type="password" fullWidth margin="normal" />

        <FormControl>
          <FormLabel>Hobbies</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox />} label="Travling" />
            <FormControlLabel control={<Checkbox />} label="Reading" />
            <FormControlLabel control={<Checkbox />} label="Cooking" />
          </FormGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" defaultValue={"male"} row>
            <FormControlLabel control={<Radio />} value="male" label="Male" />
            <FormControlLabel control={<Radio />} value="female" label="Female" />
            <FormControlLabel control={<Radio/>} value="other" label="Other" />
          </RadioGroup>
        </FormControl>

        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} >Login </Button>
      </form>
    </Box>
  );
}

export default FormHandling;
