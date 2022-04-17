import React from "react";
import logo from "../img/logo.png"
import {Navbar, Nav,NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
function Header(){
    return(
            <Navbar variant="dark" expand="lg" style={{background:"#044A1E", color:"#FFFF "}}>
                <Container>
                    <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="335.41"
                                height="86.37"
                                className="d-inline-block align-top"
                                alt="logo"
                                onClick={()=>{window.location.pathname= "/home"}}
                                
                            />
                        </Navbar.Brand >
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav">
                        <Nav.Link href="#" onClick={()=>{window.location.pathname= "/home"}}>HOME</Nav.Link>
                        <Nav.Link href="#link" onClick={()=>{window.location.pathname= "/about"}}>ABOUT US</Nav.Link>
                        <Nav.Link href="#link" onClick={()=>{window.location.pathname= "/service"}}>SERVICES</Nav.Link   >
                        <Nav.Link href="#link" onClick={()=>{window.location.pathname= "/contact"}}>CONTACT</Nav.Link>
                        <Nav.Link href="#link" onClick={()=>{window.location.pathname= "/tradeLicense"}}>TRADE LICENSE</Nav.Link>
                        <NavDropdown title="LEGAL" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">PRIVACY POLICY</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">TERMS AND CONDITIONS</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">RETURN, REFUND AND CANCELLATION POLICY</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">CONTACT US</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header;