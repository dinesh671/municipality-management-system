import React from "react";
import logo from "../img/logo.png"
import {Navbar, Nav,NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
function Header(){
    return(
            <Navbar variant="dark" expand="lg" style={{background:"#33B263", color:"#FFFF "}}>
                <Container>
                    <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="335.41"
                                height="86.37"
                                className="d-inline-block align-top"
                                alt="logo"
                                
                            />
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#link">ABOUT US</Nav.Link>
                        <Nav.Link href="#link">SERVICES</Nav.Link   >
                        <Nav.Link href="#link">E-APP</Nav.Link>
                        <Nav.Link href="#link">ALERTS</Nav.Link>
                        <NavDropdown title="LEGAL" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">PRIVACY POLICY</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">TERMS AND CONDITIONS</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">RETURN, REFUND AND CANCELLATION POLICY</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">CONTACT US</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header;