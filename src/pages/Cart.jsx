import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="h-[92vh]">
      {cart.length > 0 ? (
        <div className="flex max-w-6xl p-2 mx-auto space-y-10 space-x-5 pt-10 gap-11 h-[90vh]">
          <div className="w-[60%] overflow-x-scroll">
            {cart.map((item, index) => {
              return (
                <CartItem
                  item={item}
                  key={item.id}
                  itemIndex={index}
                />
              );
            })}
          </div>
          <div className="flex flex-col justify-between  w-[40%]">
            <div className="self-start">
              <div>
                <h2 className="text-green-800 font-bold text-2xl uppercase">
                  Your Cart
                </h2>
                <h1 className="text-green-800 font-bold text-[50px] uppercase">
                  Summary
                </h1>
                <p className="text-gray-700 font-bold mt-5 text-lg ">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-bold mt-5 lg">
                Total Amount:{" "}
                <span className="text-gray-900 font-extrabold">
                  ${totalAmount.toFixed(2)}
                </span>
              </p>
              <button
                className="text-white bg-green-700 w-full rounded-md font-semibold 
        text-lg p-3 px-3 mt-4"
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart is Empty!!</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
