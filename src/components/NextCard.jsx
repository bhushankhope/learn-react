import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CDN_URL } from "../utils/constants";

export const NextCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, avgRating, costForTwo } =
    restaurantData?.card?.card?.info;

  return (
    <Card className="max-w-xs h-[20rem] w-[20rem]">
      <CardBody className="overflow-hidden h-[30rem] p-4">
        <Image
          alt="Restaurant Image"
          className="object-cover h-full w-full rounded-xl" // Set image height to 100% and use object-cover
          src={CDN_URL + restaurantData.card.card.info.cloudinaryImageId}
          removeWrapper="true"
        />
        {/* <h1 className="uppercase absolute z-10">{restaurantData?.card?.card?.info?.aggregatedDiscountInfoV3?.header}</h1> */}
      </CardBody>
      <CardHeader className="px-4 pb-4 pt-0 flex-col items-start">
        <h4 className="font-bold text-large text-ellipsis truncate">{name}</h4>
        <h1>{costForTwo}</h1>
        <span className="text-ellipsis truncate">{cuisines.join(", ")}</span>
        <h6>{avgRating}</h6>
      </CardHeader>
    </Card>
  );
};

export const withDiscountedLabel = (NextCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-black text-white z-[100] rounded-lg p-1 m-1">Discount</div>
        <NextCard {...props}></NextCard>
      </div>
    );
  };
};

export default NextCard;
