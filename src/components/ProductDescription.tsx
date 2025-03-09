"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "../styles/product-description.scss";
import { fetchProducts } from "@/services/api.service";

type ProductType = {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductDescription = () => {
  const { id } = useParams();
  const [data, setData] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getProduct = async () => {
    try {
      const response = await fetchProducts(Number(id));
      setData(response);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!data) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="product-description-page">
      <div className="product-details">
        <div className="product-image">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="product-info">
          <h2 className="product-title">{data.title}</h2>
          <h4>{data.category}</h4>
          <p className="product-description">{data.description}</p>
          <div className="product-price-rating">
            <p className="price">${data.price}</p>
            <div className="rating">
              <span className="rate">{data.rating.rate}</span>
              <span className="count">({data.rating.count} reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
