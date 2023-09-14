import { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import NextCard, { withDiscountedLabel } from "./NextCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { REST_URL } from "../utils/constants";
import '../../index.css'

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  console.log(filteredRestaurants);

  const NextCardDiscounted = withDiscountedLabel(NextCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_URL);
    const jsonData = await data.json();
    const validCards = jsonData?.data?.cards?.filter(
      (item) => item.card && item.card.card && item.card.card.info
    );
    setRestaurants(validCards);
    setFilteredRestaurants(validCards);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline</h1>;
  }

  const handleClick = () => {
    const filteredList = restaurants.filter(
      (res) => res.card.card.info.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
  };

  return restaurants?.length === 0 ? (
    <Spinner>Loading</Spinner>
  ) : (
    <div className="body flex-col">
      <div className="filter flex justify-center mb-8">
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
      <div className="flex flex-col">
      <div className="text-3xl font-semibold mb-4 text-center">Top Restaurants Near You</div>
        <div className="flex justify-center flex-wrap gap-4">
          {filteredRestaurants?.length === 0 ? (
            <h1>No restaurants available</h1>
          ) : (
            filteredRestaurants?.map((restaurant) => (
              <Link
                key={restaurant.card.card?.info.id}
                to={"/restaurants/" + restaurant?.card?.card?.info?.id}
              >
                {restaurant?.card?.card?.info?.aggregatedDiscountInfoV3
                  ?.header ? (
                  <NextCardDiscounted restaurantData={restaurant} />
                ) : (
                  <NextCard restaurantData={restaurant}></NextCard>
                )}
                {/* <NextCard restaurantData={restaurant}></NextCard> */}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
