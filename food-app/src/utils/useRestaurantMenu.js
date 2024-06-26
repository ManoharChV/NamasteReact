import { useEffect, useState } from "react";
import axios from "axios";
import { MENU_URL } from "./constants";


//Custom Hook useRestaurantMenu
export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);


    //UseEffect --EMPTY Dependency array [] -- RUN only Once
  //UseEffect --NO Dependency array -- RUN EveryTime
  //UseEffect --[item] -- RUNs whenever the item updates 
  useEffect(() => {
    fetchMenu();
  },[]);
  let fetchMenu = async () => {
    let res=await axios.get(MENU_URL+resId)
    let items=res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    let categories=res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(i=>i.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    setCategories(categories)
    let resinfo=res?.data?.data?.cards[2]?.card?.card?.info
    setResInfo(resinfo)
    setItems(items??[])
  };
  return [resInfo, items,categories ]
};
