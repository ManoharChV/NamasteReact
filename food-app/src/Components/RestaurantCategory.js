import { useState } from "react";
import { CLOUDINARY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export const RestaurantCategory = (props) => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div className="p-[5px]">
      <div className=" border-solid rounded-lg	 border mx-auto  w-[55%]">
        <div
          className="flex h-[50px]   justify-between items-center"
          onClick={() => {
            setShowItems(!showItems);
          }}
        >
          <div className="m-5" >
            <span>
              {props?.cat?.card?.card?.title} (
              {props?.cat?.card?.card?.itemCards.length})
            </span>
          </div>
          <div className="m-5 cursor-pointer">
            {showItems? <span>⬆️</span>:
            <span>⬇️</span>}
          </div>
        </div>
        <div>
          {props?.cat?.card?.card?.itemCards.length === 0 ? (
            <Shimmer></Shimmer>
          ) : (
            showItems &&
            props?.cat?.card?.card?.itemCards.map((i) => {
              return (
                <div className="border   rounded-lg		 m-2">
                  <div className="flex justify-between">
                    <div className=" flex  items-center" key={i.card.info.name}>
                      <p className="p-3  text-lg font-bold">
                        {i.card.info.name} -{" "}
                        {(i.card.info.price || i?.card?.info?.defaultPrice) /
                          100}
                      </p>
                    </div>
                    {i?.card?.info?.imageId && (
                      <div className="flex    justify-end">
                        <img
                          className=" rounded-lg border m-[20px] h-[150px] w-[175px]"
                          alt="item"
                          src={CLOUDINARY_URL + i?.card?.info?.imageId}
                        ></img>
                      </div>
                    )}
                  </div>
                  <p className="p-3 text-wrap">{i.card.info.description}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
