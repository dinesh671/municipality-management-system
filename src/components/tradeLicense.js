import React from "react";
import "./form.css"
import "../app.css"
import { Form,Row,Col,Button, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function TradeLicense(){
    return(
        <div className="container">
            <h1>Sehore Municipality Trade License</h1>
            <div className="form-container">
            <Form className="form">
            <Row className="mb-3 ">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name of Owner</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                 <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Father’s Name /Husband’s Name</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                
            </Row>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Business Establishment's Property Tax Assessment No.</Form.Label>
                <Form.Control />
                </Form.Group>

            <Col className="section">
                <h5>Address of the Business Owner</h5>
            <Row>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address line 1</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address line 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            </Col>
            <Col className="section">
                <h5>Address of the business Establishment</h5>
            <Row>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address line 1</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address line 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            </Col>

            <Row className="mb-3">
                
            </Row>
            <Row>
                <Col>
                <Form.Label>Title of Trade</Form.Label>
                <Form.Control placeholder="Title of Trade" />
                </Col>
                <Col>
                <Form.Label>Nature of Trade</Form.Label>
                <Form.Control placeholder="Nature of Trade" />
                </Col>
            </Row>
            <fieldset>
                <Form.Group as={Row} className="mb-3 margin">
                <Form.Label as="legend" className="label" column sm={2}>
                    Type of Business Establishment
                </Form.Label>
                <Col sm={10}>
                    <Form.Check
                    type="radio"
                    label="Own"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    <Form.Check
                    type="radio"
                    label="Rented"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                </Col>
                </Form.Group>
            </fieldset>
             <fieldset>
                <Form.Group as={Row} className="mb-3 margin">
                <Form.Label as="legend" className="label" column sm={2}>
                    Trade Existing Zone
                </Form.Label>
                <Col sm={10}>
                    <Form.Check
                    type="radio"
                    label="Residential"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    <Form.Check
                    type="radio"
                    label="Commercial"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                </Col>
                </Form.Group>
            </fieldset>
            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>No. of machines</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Physical Fitness certificate, in respect of dealers in food articles, eating houses, milk vendors etc,</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>No. of machines</Form.Label>
                <Form.Control placeholder="Ex: 3" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>period of License required</Form.Label>
                <Form.Control placeholder="Ex: 3" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
            <Form.Label>Brief Description of trade</Form.Label>
            <Form.Control as="textarea" rows={3}  name="Brief Description of trade" required/>
            </Form.Group>
            
            
            <Button variant="success" type="submit"  style={{width: "fit-content"}}>
                submit
            </Button>
            </Form>
            </div>
        </div>
    )
}

//  <Form.Group className="mb-3" id="formGridCheckbox">
//                 <Form.Check type="checkbox" className="checkpoint"  label="I hereby declare that all the information mentioned above is true to my knowledge. In
// case of any discrepancies if arises I will be held responsible. Hence I request you to issue
// me D & O Trade License." />
//             </Form.Group>
