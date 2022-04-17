import "../app.css";
import { Form,Row,Col, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const margin = {
     marginBottom:".5em",
 }

function Contact() {
  return (
    <div className="form-grid">
   <Form className="size" action="https://formspree.io/f/mdobwpgg" method="post">
      <h2>Complaint Register form</h2>
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
      <Row className="margin margin-top">
        <Col>
        <Form.Label >Email</Form.Label>
          <Form.Control placeholder="Enter email" />
        </Col>
        <Col>
        <Form.Label >phone</Form.Label>
          <Form.Control placeholder="Phone" />
        </Col>
      </Row>

      <Form.Label>Compliant Catogery</Form.Label>
      <Form.Select aria-label="Default select example" className="margin">
        <option>Select</option>
        <option value="1">Potholes</option>
        <option value="2">Drainage Issue</option>
        <option value="3">Uncut Grass</option>
        <option value="4">Traffic Light Issue</option>
        <option value="5">Street Light Issue</option>
        <option value="5">Open Burning</option>
      </Form.Select>
    <Form.Group controlId="formFileMultiple" className="mb-3">
    <Form.Label>Upload file</Form.Label>
    <Form.Control type="file" multiple />
  </Form.Group>
    <Form.Group style={margin} className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Query</Form.Label>
      <Form.Control as="textarea" rows={3}  name="Query" required/>
    </Form.Group>
    <Button variant="success" type="submit">
      Submit
    </Button>
</Form>
    </div>
  );
}

export default Contact;