import React from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

export default function NextAccordion({ data }) {
  // console.log(data);
  const { title } = data;
  const strippedTitle = title.replace(/[^\w\s]/gi, "");
  const { itemCards } = data;
  console.log(data);
  return (
    <div>
      <Accordion variant="light">
        <AccordionItem
          aria-label="Accordion 1"
          title={
            <div className="flex">
              <div>{strippedTitle}</div>
              <span className="ml-2"> ({data.itemCards.length})</span>
            </div>
          }
          key={title}
          className="w-6/12 m-auto font-bold border-b-2 mb-2 py-0 bg-gray-100 px-4"
        >
          {itemCards.map((card) => (
            <div key={card.card.info.id} className="container border-b-2">
              <div className="py-4 flex justify-between w-full">
                <div className="w-9/12 mr-4">
                  <div className="font-normal">{card?.card?.info?.name}</div>
                  <div className="font-normal">
                    {card?.card?.info?.price
                      ? card?.card?.info?.price / 100
                      : card?.card?.info?.defaultPrice / 100}
                  </div>
                  <div className="mt-2 font-light text-gray-500 text-sm mr-1">
                    {card?.card?.info?.description}
                  </div>
                </div>
                <div className="relative w-3/12 h-[8rem]">
                  <div className="absolute bottom-0">
                    <Button
                      color="success"
                      className="bottom-0 left-8 bg-white text-green-500"
                    >
                      Add Item +
                    </Button>
                  </div>
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      card?.card?.info?.imageId
                    }
                    className="h-full w-full"
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
