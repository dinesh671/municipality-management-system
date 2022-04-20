import React from "react";
import {Card} from "react-bootstrap";
import product1 from "../img/illustration.svg";
import product2 from "../img/demo2.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function Product(){
   return(
       <div className="product-container">
            <h1>Products</h1>
           <div className="products-cards">
            <Card  style={{width:"560px"}}>
            <Card.Img variant="top" src={product1} />
            <Card.Body>
                <Card.Title>Compliant registering service</Card.Title>
                
            </Card.Body>
            </Card>

            <Card style={{width:"560px"}}>
            <Card.Img variant="top" src={product2} />
            <Card.Body>
                <Card.Title>Trade Licence</Card.Title>
            </Card.Body>
            </Card>

           </div>

        </div>
   )

}

export default Product;