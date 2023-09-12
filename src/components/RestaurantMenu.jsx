import React, { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import NextAccordion from "./NextAccordion";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(null);

  if (restaurantInfo === null) {
    return <Spinner>Loading</Spinner>;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) => {
        return (
          cat.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div>
      <div className="text-center">
        <div className="font-bold my-5 text-2xl">{name}</div>
        <p className="font-bold text-lg">{cuisines.join(", ")}</p>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
      </div>
      {categories.map((cat, index) => (
        //Controlled Component
        <RestaurantCategory
          key={cat?.card?.card?.title}
          data={cat?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
