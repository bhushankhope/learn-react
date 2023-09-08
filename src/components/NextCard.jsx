import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CDN_URL } from "../utils/constants";

export default function NextCard(props) {
  const { restaurantData } = props;
  const { name, cuisines, avgRating, costForTwo } =
    restaurantData?.card.card?.info;

  return (
    <Card className="max-w-xs h-[20rem] w-[20rem]">
      <CardBody className="overflow-hidden relative h-[30rem]">
        <Image
          alt="Restaurant Image"
          className="object-cover h-full w-full rounded-xl" // Set image height to 100% and use object-cover
          src={CDN_URL + restaurantData.card.card.info.cloudinaryImageId}
          removeWrapper='true'
        />
        <h1 className="uppercase absolute z-10">{costForTwo}</h1>
      </CardBody>
      <CardHeader className="pb-0 pt-2 flex-col items-start">
        <h4 className="font-bold text-large text-ellipsis truncate">{name}</h4>
        <span className="text-ellipsis truncate">{cuisines.join(", ")}</span>
        <h6>{avgRating}</h6>
      </CardHeader>
    </Card>
  );
}