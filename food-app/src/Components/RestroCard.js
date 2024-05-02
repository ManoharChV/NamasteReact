import { CLOUDINARY_URL } from "../utils/constants";
import { UserContext } from "../utils/userContext";
import { useContext } from "react";
function RestroCard(props) {
  const {loggedInUser}=useContext(UserContext);
  return (
    <div className="border-2  rounded-xl border-solid w-[270px] h-[450px] mb-5    border-gray-500 ">
      <div className="h-[200px] border  m-[20px] rounded-2xl">
        <img
          className="w-[100%] h-[100%]  rounded-2xl mx-[auto] "
          src={CLOUDINARY_URL + props.imgId}
          alt="rest-icon"
        ></img>
      </div>
      <div className="p-3 w-64">
        <p className=" text-lg   font-bold ">{props.name}</p>
        <p className="break-words">{props.cuisine}</p>
        <p>{props.rating} ratings</p>
        <p>{props.forTwo}</p>
        <p>{props.eta}</p>
        <p>User:{loggedInUser}</p>
      </div>
    </div>
  );
}

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div >
        <label className=" m-5 p-1  text-white  bg-sky-600 absolute">Promoted</label>
        <div >
          <RestroCard {...props}></RestroCard>
        </div>
      </div>
    );
  };
};
export default RestroCard;
