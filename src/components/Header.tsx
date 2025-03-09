"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  incrementQuantity,
  decrementQuantity,
  removeCart,
} from "../redux/cartSlice";
import Link from "next/link";
import "../styles/header.scss";

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <h1>E-Commerce</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li className="cart-items">
            Cart ({cartItems})
            {cartItems > 0 && (
              <div className="cart-details">
                <ul>
                  <li>
                    <div className="quantity-buttons">
                      <button onClick={() => dispatch(incrementQuantity())}>
                        +
                      </button>
                      <button onClick={() => dispatch(decrementQuantity())}>
                        -
                      </button>
                      <button onClick={() => dispatch(removeCart())}>
                        Remove
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
