import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed!!");
  };

  return (
    <div>
      <div className="flex gap-16 max-w-[90%] mt-4">
        <div className="w-[50%]">
          <img
            height={200}
            width={200}
            src={item.image}
            alt=""
            className="h-full w-full "
          />
        </div>
        <div>
          <h1 className="text-gray-700 font-bold text-xl text-left  mt-1">
            {item.title}
          </h1>
          <p className=" text-gray-600 font-normal text-lg text-left mt-4">
            {item.description.slice(0, 81)}....
          </p>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-bold">${item.price}</p>
            <button
              onClick={removeFromCart}
              className="bg-red-300 p-3 opacity-50 rounded-full"
            >
              <MdDelete className="text-red-800" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-gray-600 mt-8"></div>
    </div>
  );
};

export default CartItem;
