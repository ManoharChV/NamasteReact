import { useEffect, useState } from "react";
import RestroCard, { withPromotedLabel } from "./RestroCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
function Body() {
  const PromotedRestrocard = withPromotedLabel(RestroCard);
  useEffect(() => {
    getData().then((res) => {
      console.log(res.data.data.cards);
      let list =
        res.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      list[0]["info"]["promoted"] = true;
      setresList(list);
      setFilteredResList(list);
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
  if (!useOnlineStatus()) {
    return (
      <h1>
        Looks like you are offline!!! please check your internet connection
      </h1>
    );
  }
  console.log(resList);
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
            /*Link is used to route the application to specific route 
            to={routename and params}
            route name must defined in the createBrowserRouter (refer index.js)
            */
            <Link
              className="text-link"
              key={r.info.id}
              to={"/restaurants/" + r.info.id}
            >
              {r.info.promoted?<PromotedRestrocard  name={r.info.name}
                forTwo={r.info.costForTwo}
                rating={r.info.avgRating}
                cuisine={r.info.cuisines.join(",")}
                eta={r.info.sla.slaString}
                imgId={r.info.cloudinaryImageId}></PromotedRestrocard>:<RestroCard
                name={r.info.name}
                forTwo={r.info.costForTwo}
                rating={r.info.avgRating}
                cuisine={r.info.cuisines.join(",")}
                eta={r.info.sla.slaString}
                imgId={r.info.cloudinaryImageId}
              ></RestroCard> }
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
