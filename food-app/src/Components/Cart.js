import { useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
export const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  console.log(cart);
  return (
    <div>
      <div className=" flex flex-row justify-center">
        <h1 className="">Cart</h1>
      </div>
      <div className=" flex flex-row justify-center">
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
          className="w-[100px] bg-black hover:bg-slate-700 text-white rounded-md p-2 my-2"
        >
          Clear
        </button>
      </div>
      <div className="flex flex-col">
        <div className=" w-[900px] mx-auto my-2">
          <ItemList items={cart} from="cart"></ItemList>
        </div>
      </div>
    </div>
  );
};
