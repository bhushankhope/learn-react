import { useState } from "react";
import RESTAURANT_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { Button } from "@nextui-org/react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(RESTAURANT_LIST);

  const handleClick = () => {
    const filteredList = restaurants.filter((res) => res.data.avgRating > 4);
    setRestaurants(filteredList);
  };
  return (
    <div className="body">
      <div className="filter">
        <Button
          color="success"
          onClick={handleClick}
          className="filter-btn m-2"
        >
          Top Rated Restaurants
        </Button>
      </div>
      <div className="flex flex-wrap">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.id}
            restaurantData={restaurant}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default Body;
