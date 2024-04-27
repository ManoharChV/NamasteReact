import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
function Body() {
  useEffect(() => {
    getData().then((res) => {
      console.log(res.data.data.cards);
      setresList(
        res.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredResList(
        res.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    });
  }, []);
  const [searchText, setSearchText] = useState("");
  async function getData() {
    let data = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.463669172597825&lng=78.35589967668056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    return data;
  }
  const [resList, setresList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  return resList.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            let filteredList = resList.filter((r) =>
              r.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResList(filteredList);
          }}
        >
          Search
        </button>
        <button
          onClick={(e) => {
            console.log(resList);
            let filteredList = resList.filter((r) => r.info.avgRating > 4.2);
            console.log(filteredList);
            setFilteredResList(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((r) => {
          return (
            <Link               key={r.info.id}
            to={"/restaurants/"+r.info.id}><RestroCard 
              name={r.info.name}
              forTwo={r.info.costForTwo}
              rating={r.info.avgRating}
              cuisine={r.info.cuisines.join(",")}
              eta={r.info.sla.slaString}
              imgId={r.info.cloudinaryImageId}
            ></RestroCard></Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
