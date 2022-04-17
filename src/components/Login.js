import "../app.css";
import React from "react";
import TextField from '@mui/material/TextField';
import { Container, Form,Button,  } from "react-bootstrap";
function Login() {
  return (
    <Container className="login">
      <Form className="login-card">
      <h4>Login/SignUp</h4>
      <TextField className="phone" 
      id="outlined-basic" label="Phone Number" variant="outlined" />
      <Button variant="success" type="submit">
    Submit
  </Button>
  <div className="Register-Here">Not Register? <span>Register Here</span></div>
  
    </Form>
    </Container>
  );
}

export default Login;