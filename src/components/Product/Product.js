import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { AiFillStar } from "react-icons/ai";
import "./Product.css";
const Product = ({ product }) => {
  const { name, img, price } = product;
  return (
    <Col>
      <Card
        className="position-relative rounded-0 border-0"
        style={{ height: "500px" }}
      >
        <Card.Img variant="top " src={img} />
        <Card.Body className="text-center">
          <h6>{name}</h6>
          <h5 className="price mx-auto">${price}</h5>
          <div className="star-icon ">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </Card.Body>
        <button className="cart-btn w-100 border-0 position-absolute bottom-0 py-2 fw-bold">
          Add To Cart
        </button>
      </Card>
    </Col>
  );
};

export default Product;
