import React from "react";
import Card from "react-bootstrap/Card";
import "./AddToCart.css";
const AddToCart = ({ carts }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of carts) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  let tax = ((total * 5) / 100).toFixed(2);
  let grandTotal = total + shipping + +tax;
  return (
    <div className="add-to-cart">
      <div className="p-3">
        <h4 className="py-4 text-center">ADD TO CART</h4>
        <div>
          <Card style={{ height: "280px" }} className=" p-0">
            <Card.Body className="p-0">
              <div className="ps-3 pt-3 pb-3">
                <h6 className="py-2">Selected Items: {quantity}</h6>
                <h6 className="py-2">Total Price: ${total}</h6>
                <h6 className="py-2">Total Shipping Charge: ${shipping}</h6>
                <h6 className="py-2">Tax: ${tax}</h6>
              </div>
              <div className="grand-total position-absolute bottom-0 w-100 text-center py-2">
                <h5>Grand Total: ${grandTotal}</h5>
              </div>
            </Card.Body>
          </Card>
          <button className="w-100 py-2 my-4 btn btn-danger fw-bold">
            Clear Cart
          </button>
          <button className="w-100 py-2 btn btn-dark fw-bold">
            Review Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
