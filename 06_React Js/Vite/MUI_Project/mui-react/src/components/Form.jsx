import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          boxShadow: "0 0 10px 0 rgba(250,250,250,0.2)",
          width: "20%",
          margin: '10px',
        }}
      >
        <TextField
          onChange={handleChange}
          name="name"
          value={inputs.name}
          sx={{ margin: "10px" }}
          size="small"
          type="name"
          placeholder="Enter name"
          variant="outlined"
        />{" "}
        <br />
        <TextField
          onChange={handleChange}
          name="email"
          value={inputs.email}
          sx={{ margin: "10px" }}
          size="small"
          type="email"
          placeholder="Enter email"
          variant="outlined"
        />{" "}
        <br />
        <TextField
          onChange={handleChange}
          name="password"
          value={inputs.password}
          sx={{ margin: "10px"}}
          size="small"
          type="password"
          placeholder="Enter password"
          variant="outlined"
        />{" "}
        <br />
        <Button type="submit" variant="contained" sx={{ margin: "10px" }}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default Form;
