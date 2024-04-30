import { CLOUDINARY_URL } from "../utils/constants";
function RestroCard(props) {
  return (
    <div className="restro-card">
      <img
        className="rest-icon"
        src={CLOUDINARY_URL + props.imgId}
        alt="rest-icon"
      ></img>
      <h3>{props.name}</h3>
      <h4 style={{ overflow: "hidden" }}>{props.cuisine}</h4>
      <h4>
        {props.rating} <i className="fa-solid fa-star"></i>
      </h4>
      <h4>{props.forTwo}</h4>
      <h4>{props.eta}</h4>
    </div>
  );
}


export const withPromotedLabel=(restroCard)=>{
  return (props)=>{
    return (<div><label className="promoted-label">Promoted</label>
    <restroCard {...props} ></restroCard>
     </div>)
  }
}
export default RestroCard;
