import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { CDN_URL } from "../utils/constants";

export default function NextCard(props) {
  const { restaurantData } = props;
  const { name, cuisines, avgRating, costForTwo } =
    restaurantData?.card.card?.info;
  return (
    <Card className="py-4 max-w-xs">
      <CardBody className="overflow-visible py-2 next-card-body relative">
        <Image
          alt="Restaurant Image"
          className="object-cover rounded-xl"
          src={CDN_URL + restaurantData.card.card.info.cloudinaryImageId}
          width={270}
          height={180}
        />
        <h1 className="uppercase absolute z-10">{costForTwo}</h1>
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{name}</h4>
        <h6 className="uppercase">{cuisines.join(", ")}</h6>
        <h6 className="uppercase">{avgRating}</h6>
      </CardHeader>
    </Card>
  );
}
