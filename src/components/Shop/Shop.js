import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import AddToCart from "../AddToCart/AddToCart";
import Product from "../Product/Product";
import { addToDb, getToDb } from "../Utility/addToDb";
import "./Shop.css";
const Shop = () => {
  // ! load products data
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getToDb();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    console.log(savedCart);
    setCarts(savedCart);
  }, [products]);

  const handelAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = carts.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...carts, selectedProduct];
    } else {
      const rest = carts.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCarts(newCart);
    // ! add to db
    addToDb(selectedProduct.id);
  };
  return (
    <section id="shop">
      {/* products */}
      <div className="products wrapper">
        <div>
          <h4 className="py-4">NEW INCOMES</h4>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handelAddToCart={handelAddToCart}
            />
          ))}
        </Row>
      </div>
      {/* order */}
      <div className="order border">
        <AddToCart carts={carts} />
      </div>
    </section>
  );
};

export default Shop;
