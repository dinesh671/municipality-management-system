import React from 'react'
import "../form.css"
import { Row,Col,Form } from 'react-bootstrap';
function PersonalDetails() {
  return (
    <Form>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Name</Form.Label>
      <Form.Control placeholder="Name" />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Father’s / Husband’s Name</Form.Label>
      <Form.Control placeholder="Name" />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address of the Business Owner line 1</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address of the Business Owner line 1</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Property Tax Assessment No. of Business Establishment</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Phone</Form.Label>
      <Form.Control placeholder='+91 2345678901' />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control placeholder='Ex:466114'/>
    </Form.Group>
  </Row>


  
</Form>
  )
}

export default PersonalDetails;