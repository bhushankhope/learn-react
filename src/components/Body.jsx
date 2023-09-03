import { useEffect, useState } from "react";
import RESTAURANT_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import ShimmerUI from "./Shimmer";
import { Input } from "@nextui-org/react";
import NextCard from "./NextCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&collection=80403&tags=layout_Shawarma_Contextual&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const jsonData = await data.json();
    const validCards = jsonData.data.cards.filter(
      (item) => item.card && item.card.card && item.card.card.info
    );
    setRestaurants(validCards);
    setFilteredRestaurants(validCards);
  };

  const handleClick = () => {
    const filteredList = restaurants.filter(
      (res) => res.card.card.info.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
  };

  console.log(restaurants);

  return restaurants.length === 0 ? (
    <Spinner>Loading</Spinner>
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search-container flex">
          <Input
            type="email"
            label="Search"
            className="w-[340px] search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Button
            color="success"
            onClick={() => {
              const searchedRestaurants = restaurants.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchedRestaurants);
            }}
            className="filter-btn m-2"
          >
            Search
          </Button>
        </div>
        <Button
          color="success"
          onClick={handleClick}
          className="filter-btn m-2"
        >
          Top Rated Restaurants
        </Button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurants available</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.card.card?.info.id}
              to={"/restaurants/" + restaurant?.card?.card?.info?.id}
            >
              <NextCard restaurantData={restaurant}></NextCard>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
