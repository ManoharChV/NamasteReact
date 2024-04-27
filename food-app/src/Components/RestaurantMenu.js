import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { CLOUDINARY_URL, MENU_URL } from '../utils/constants'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'

 const RestaurantMenu = () => {
  const {resId}=useParams();
  const [items, setItems]=useState([]);
  const [resInfo, setResInfo]=useState({});
  console.log(resId)
  useEffect(()=>{
    fetchMenu();
  }, [])
  let  fetchMenu=async ()=>{
    let res=await axios.get(MENU_URL+resId)
    let items=res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
    let resinfo=res?.data?.data?.cards[2]?.card?.card?.info
    setResInfo(resinfo)
    setItems(items??[])
  }
  return items.length===0?<Shimmer></Shimmer>: ( 
    <div className='rest-menu'>
        <h1>{resInfo.name}</h1>
        <h3>{resInfo.cuisines.join(",")}</h3>
        <h3>{resInfo.costForTwoMessage}</h3>
        <h3>{resInfo.avgRating}</h3>
        <h2>Menu</h2>
        <ul>
          {items.map((i)=>{
            return (<li key={i.card.info.id}>{i.card.info.name}: {i.card.info.price/100} </li>)
          })}
        </ul>
    </div>
  )
}
export default RestaurantMenu
