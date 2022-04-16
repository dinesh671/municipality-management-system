import "../app.css";
import React from "react";
import { Container, Form,Button,  } from "react-bootstrap";
function Login() {
  return (
    <Container className="login">
      <Form className="login-card">
      <h4>Login/SignUp</h4>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <div className="forget-pass">Forget Password?</div>
      </Form.Group>
      <Button variant="success" type="submit">
    Submit
  </Button>
  <div className="Register-Here">Not Register? <span>Register Here</span></div>
  
    </Form>
    </Container>
  );
}

export default Login;