import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { CLOUDINARY_URL, MENU_URL } from '../utils/constants'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import { useRestaurantMenu } from '../utils/useRestaurantMenu'

 const RestaurantMenu = () => {
  //useParams -- used to read the route params
  const {resId}=useParams();
 
  //Custom Hook useRestaurantMenu
  const [resInfo, items]=useRestaurantMenu(resId);
  return items.length===0?<Shimmer></Shimmer>: ( 
    <div className='rest-menu'>
        <h1>{resInfo.name}</h1>
        <h3>{resInfo.cuisines.join(",")}</h3>
        <h3>{resInfo.costForTwoMessage}</h3>
        <h3>{resInfo.avgRating}</h3>
        <h2>Menu</h2>
        <ul>
          {items.map((i)=>{
            return (<li key={i.card.info.id}>{i.card.info.name}:{(i.card.info.price|| i.card.info.defaultPrice)/100} </li>)
          })}
        </ul>
    </div>
  )
}
export default RestaurantMenu
