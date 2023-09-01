import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, avgRating, costForTwo, maxDeliveryTime } =
    restaurantData?.data;
  return (
    <div
      className="flex flex-col p-4 m-2 restaurant-card"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="restaurant-logo"
        src={CDN_URL + restaurantData.data.cloudinaryImageId}
        alt="restaurant logo"
      ></img>
      <h3 className="restaurant-name text-red-700">{name}</h3>
      <h4 className="restaurant-cusine">{cuisines.join(", ")}</h4>
      <h4 className="restaurant-rating">{avgRating} Stars</h4>
      <h4 className="restaurant-cost">{costForTwo / 100} Rupees</h4>
      <h4 className="restaurant-est-time">{maxDeliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
