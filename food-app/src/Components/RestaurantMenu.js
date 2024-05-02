import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { CLOUDINARY_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

const RestaurantMenu = () => {
  //useParams -- used to read the route params
  const { resId } = useParams();

  //Custom Hook useRestaurantMenu
  const [resInfo, items, categories] = useRestaurantMenu(resId);
  return items.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="mt-[20px] p-[50px] mx-auto">
      <div className=" border rounded-md w-[100%] h-[auto] mx-[auto] p-5  border-black">
        <h1 className=" font-bold">{resInfo.name}</h1>
        <div className="flex">
          <h3>{resInfo.avgRating}</h3>
          <h3>{resInfo.costForTwoMessage}</h3>
        </div>
        <h3>{resInfo.cuisines.join(",")}</h3>
      </div>
      <div className="flex justify-center">
      <h2 className="font-bold">Menu</h2>
      </div>
      <ul>
        {categories.map((cat) => {
          return <RestaurantCategory 
            key={cat?.card?.card?.title} cat={cat} />;
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
