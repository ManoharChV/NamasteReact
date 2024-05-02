import { useContext, useEffect, useState } from "react";
import RestroCard, { withPromotedLabel } from "./RestroCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/userContext";
function Body() {
  const {loggedInUser}=useContext(UserContext);
  const{setUserName}=useContext(UserContext)
  const PromotedRestrocard = withPromotedLabel(RestroCard);
  useEffect(() => {
    getData().then((res) => {
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
  return resList.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className=" m-0 p-0">
        <div className="flex">
          <input
            className="border-solid border-2 mr-5 ml-[2px] w-[25%]  focus-within :border-blue-400 border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className=" border-solid border-gray-500 text-white  hover:bg-blue-900 mr-10 px-8  bg-blue-700 "
            onClick={() => {
              let filteredList = resList.filter((r) =>
                r.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
          <input
            className="border-solid border-2 mr-5 ml-[2px] w-[25%]  focus-within :border-blue-400 border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          ></input>
          <button
            onClick={(e) => {
              let filteredList = resList.filter((r) => r.info.avgRating > 4.2);
              setFilteredResList(filteredList);
            }}
          >
            Top Restaurants
          </button>
        </div>
        <div className="flex flex-wrap  pt-[30px] justify-evenly mt-1 gap-2">
          {filteredResList.map((r) => {
            return (
              /*Link is used to route the application to specific route 
            to={routename and params}
            route name must defined in the createBrowserRouter (refer index.js)
            */
              <Link
                className=""
                key={r.info.id}
                to={"/restaurants/" + r.info.id}
              >{r.info.promoted ? (
                  <PromotedRestrocard
                    name={r.info.name}
                    forTwo={r.info.costForTwo}
                    rating={r.info.avgRating}
                    cuisine={r.info.cuisines.join(",")}
                    eta={r.info.sla.slaString}
                    imgId={r.info.cloudinaryImageId}
                  ></PromotedRestrocard>
                ) : (
                  <RestroCard
                    name={r.info.name}
                    forTwo={r.info.costForTwo}
                    rating={r.info.avgRating}
                    cuisine={r.info.cuisines.join(",")}
                    eta={r.info.sla.slaString}
                    imgId={r.info.cloudinaryImageId}
                  ></RestroCard>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
