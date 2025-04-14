import { useState } from "react";
import { LuDollarSign } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

type CartCardProps = {
  serial: number;
  cartInfo: any;
  setTotal: React.Dispatch<React.SetStateAction<Number>>;
};

const CartCard = ({ cartInfo, serial, setTotal }: CartCardProps) => {
  const [count, setCount] = useState(cartInfo?.quantity);

  // const totalPrice =

  // increase/decrease handler
  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex gap-4 items-stretch">
      <p>{serial + 1}</p>
      <figure className="w-20 h-full">
        <img
          className="w-full h-full object-cover rounded-md"
          src={cartInfo?.bookDetails[0]?.coverImage}
          alt="book img"
        />
      </figure>
      <div className="space-y-1 h-full">
        <h3 className="text-lg">{cartInfo?.bookDetails[0]?.title}</h3>
        <div className="flex items-center gap-2">
          <div className="join">
            <button onClick={handleDecrease} className="btn btn-xs join-item">
              -
            </button>
            <button className="btn btn-xs join-item">{count}</button>
            <button onClick={handleIncrease} className="btn btn-xs join-item">
              {" "}
              +
            </button>
          </div>
          <div>
            <RxCross1 />{" "}
          </div>
          <div>
            <p className="flex items-center justify-center text-[#d62928]">
              {" "}
              <span>
                <LuDollarSign />
              </span>
              {cartInfo?.bookDetails[0]?.rentalPrice
                ? cartInfo?.bookDetails[0]?.rentalPrice
                : 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
