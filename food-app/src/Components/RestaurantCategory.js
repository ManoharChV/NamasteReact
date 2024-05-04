import { CLOUDINARY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { ItemList } from "./ItemList";
export const RestaurantCategory = (props) => {
  return (
    <div className="p-[5px]">
      <div className=" border-solid rounded-lg	 border mx-auto  w-[55%]">
        <div
          className="flex h-[50px]   justify-between items-center"
          onClick={() => {
            props.setShowItemsIndex();
          }}
        >
          <div className="m-5">
            <span>
              {props?.cat?.card?.card?.title} (
              {props?.cat?.card?.card?.itemCards.length})
            </span>
          </div>
          <div className="m-5 cursor-pointer">
            {props.showItems ? <span>⬆️</span> : <span>⬇️</span>}
          </div>
        </div>
        <div>
          {props.showItems && (
          <ItemList items={props?.cat?.card?.card?.itemCards}></ItemList>)
          }</div>
      </div>
    </div>
  );
};
