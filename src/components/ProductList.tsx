"use client";

import { useState, useMemo } from "react";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Header from "./Header";
import "../styles/product-listing.scss";

interface HomePageProps {
  products: Product[];
}

const ProductList = ({ products }: HomePageProps) => {
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (categoryFilter) {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    filtered.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    return filtered;
  }, [categoryFilter, sortOrder, products]);

  return (
    <div className="product-list-page">
      <Provider store={store}>
        <Header />
        <div className="filters">
          <select
            onChange={(e) => setCategoryFilter(e.target.value)}
            value={categoryFilter}
            className="filter-select"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="women's clothing">Womens Clothing</option>
            <option value="men's clothing">Mens Clothing</option>
          </select>
          <select
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            value={sortOrder}
            className="filter-select"
          >
            <option value="asc">Sort by Price (Low to High)</option>
            <option value="desc">Sort by Price (High to Low)</option>
          </select>
        </div>

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="no-products">No products found</p>
          )}
        </div>
      </Provider>
    </div>
  );
};

export default ProductList;
