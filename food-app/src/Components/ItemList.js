import { useDispatch } from "react-redux";
import { CLOUDINARY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
export const ItemList = (props) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return props?.items?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    props?.items?.map((i) => {
      return (
        <div className="border   rounded-lg		 m-2">
          <div className="flex justify-between">
            <div className=" flex  items-center" key={i.card.info.name}>
              <p className="p-3  text-lg font-bold">
                {i.card.info.name} -{" "}
                {(i.card.info.price || i?.card?.info?.defaultPrice) / 100}
              </p>
            </div>
            {i?.card?.info?.imageId && (
              <div className="flex justify-end">
                <div className="relative">
                  {props.from == "cart" ? (
                     <button
                     onClick={() =>{dispatch(removeItem({id:i.card.info.id}))}}
                     className="  hover:bg-gray-700  bg-white absolute  
                    font-bold  text-green-500 rounded-md p-2 mx-auto my-1   translate-x-[-50%]  left-[50%]  bottom-3 border-[1px] border-solid  text-center"
                   >
                     Remove
                   </button>
                  ) : (
                    <button
                      onClick={() => handleAddItem(i)}
                      className="  hover:bg-gray-700  bg-white absolute  
                     font-bold  text-green-500 rounded-md p-2 mx-auto my-1   translate-x-[-50%]  left-[50%]  bottom-3 border-[1px] border-solid  text-center"
                    >
                      Add+
                    </button>
                  )}
                  <img
                    className=" rounded-lg border m-[20px] h-[144px] w-[156px]"
                    alt="item"
                    src={CLOUDINARY_URL + i?.card?.info?.imageId}
                  ></img>
                </div>
              </div>
            )}
          </div>
          <p className="p-3 text-wrap">{i.card.info.description}</p>
        </div>
      );
    })
  );
};
