import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price:${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <div>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-cart"
        >
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
