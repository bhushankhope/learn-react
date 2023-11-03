import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { Button } from "@nextui-org/react";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div  className="flex items-center flex-col">
      <div className="text-center font-bold text-4xl mb-4">Cart</div>
      <Button color="success" className="text-center"
      onClick={handleClearCart}>Clear Cart</Button>
      <div className="w-9/12 flex items-center">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
