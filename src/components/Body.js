import React from "react";
import responsive from "../img/responsive.jpg"
import clean from "../img/clean code.jpg"
import valid from "../img/valid code.jpg"
import users from "../img/user friendly.jpg"
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
function Body(){
    return(
        <div className="card-container">
            <div className="cards">
            
            <Card >
                <Card.Img variant="top" src={responsive} width={250} height={250} />
                <Card.Title>Responsive</Card.Title>
                <Card.Body>Fully supported in modern browsers, such as Safari, Chrome and Opera, as well as mobile 
                    devices that use these same browsers (iPad, iPhone, etc.). Older browsers and Firefox degrade nicely and still resize as one would expect of a responsive image, except that both resolutions</Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={clean} width={250} height={250} />
                <Card.Title>Clean design</Card.Title>
                <Card.Body>Bold, clean designs draw attention and make browsing easy for users. We offer a clutter-free and aesthetically uncomplicated experience</Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={valid} width={250} height={250} />
                <Card.Title>Valid code</Card.Title>
                <Card.Body>We develop Applications using valid code, which is a very important factor in web & application development. Valid code produces better search engine results leading to more traffic to the website</Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={users} width={250} height={250} />
                <Card.Title>User Friendly</Card.Title>
                <Card.Body>We aim to build a website that can be seamlessly used by anyone.</Card.Body>
            </Card>

        </div>
        </div>

    );
}

export default Body;