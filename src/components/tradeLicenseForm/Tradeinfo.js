import React from 'react'
import { Row,Col,Form } from 'react-bootstrap';
import "../form.css"

function Tradeinfo() {
  return (
    <Form>
  <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>Title of Trade</Form.Label>
      <Form.Control placeholder="Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Nature of Trade</Form.Label>
      <Form.Control placeholder="Name" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address of the business establishment</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Brief Description of trade</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Type of Business establishment</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Own</option>
        <option>Rented</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Trade Existing Zone</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Residential</option>
        <option>Commercial</option>

      </Form.Select>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>No. of workers</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>1 </option>
        <option>2 </option>
        <option>3 </option>
        <option>4 </option>
        <option>more than 4 </option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>No. of machines</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>1 </option>
        <option>2 </option>
        <option>3 </option>
        <option>4 </option>
        <option>more than 4 </option>

      </Form.Select>
    </Form.Group>
  </Row>
  

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>If Rent, Monthly Rent of Business establishment</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Physical Fitness certificate,in respect of dealers in foodarticles, eating houses, milk vendors etc,</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
    

</Form>
  )
}

export default Tradeinfo;