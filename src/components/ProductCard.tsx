"use client";

import React from "react";
import Link from "next/link";
import { Product } from "../types";
import { useDispatch } from "react-redux";
import { incrementQuantity } from "../redux/cartSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(incrementQuantity());
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h5>{product.title}</h5>
        <h5>{product.category}</h5>
        <p className="price">${product.price}</p>
        <div className="card-buttons">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link href={`/product/${product.id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
