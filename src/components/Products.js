import React from "react";
import {Card,Button} from "react-bootstrap";
import product1 from "../img/demo1.jpg";
import product2 from "../img/demo2.jpg";
import product3 from "../img/demo3.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function Product(){
   return(
       <div className="product-container">
           <div className="products-cards">

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product1} />
            <Card.Body>
                <Card.Title>MMS Citizen Interface</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Click here</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product2} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Click here</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product3} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Click here</Button>
            </Card.Body>
            </Card>

           </div>

        </div>
   )

}

export default Product;