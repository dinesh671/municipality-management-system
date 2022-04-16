import "../app.css";
import { Form,Row,Col, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const margin = {
     marginBottom:".5em",
 }

function Contact() {
  return (
   <Form className="size" action="https://formspree.io/f/mdobwpgg" method="post">
  <Row style={margin}>
    <Col>
      <Form.Label >First Name</Form.Label>
      <Form.Control placeholder="First name" name="firstName" required />
    </Col>
    <Col>
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Last name" name="lastName"/>
    </Col>
  </Row>
  <Form.Group className="mb-3" style={margin} controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" name="Email" required/>
  </Form.Group>
  <Form.Group style={margin} className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Query</Form.Label>
    <Form.Control as="textarea" rows={3}  name="Query" required/>
  </Form.Group>
  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>
  );
}

export default Contact;