import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  // ! load products data
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section id="shop">
      {/* products */}
      <div className="products wrapper border">
        <div>
          <h4 className="py-4">NEW INCOMES</h4>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Row>
      </div>
      {/* order */}
      <div className="order border">Order</div>
    </section>
  );
};

export default Shop;
