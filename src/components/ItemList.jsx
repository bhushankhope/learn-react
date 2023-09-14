import React from "react";
import { CDN_URL } from "../utils/constants";
import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="py-4 border-b-2 border-gray-200 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="pr-2 pb-4">{item?.card?.info?.name}</span>
              <span>
                Rs.{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="relative w-3/12 h-full]">
            <div className="absolute bottom-0">
              <Button className="bottom-0" color="success"
              onClick={()=>handleAddItem(item)}>
                Add Item +
              </Button>
            </div>
            <img
              src={CDN_URL + item?.card?.info.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
