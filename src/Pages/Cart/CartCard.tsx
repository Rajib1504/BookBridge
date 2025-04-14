import { FaRegTrashCan } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import useAxiosSecure from "../../Hooks/axiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useCartCount from "../../Hooks/useCartCount";

type CartCardProps = {
  serial: number;
  cartInfo: any;
  quantity: number;
  onQuantityChange: (newQty: number) => void;
};

const CartCard = ({
  cartInfo,
  serial,
  quantity,
  onQuantityChange,
  cartsInfoRefetch,
}: CartCardProps) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { cartCountRefetch } = useCartCount();

  const handleDecrease = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDelete = () => {
    axiosSecure
      .patch(
        `/api/delete/cart?cartId=${cartInfo?.cartId}&userEmail=${user?.email}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          cartsInfoRefetch();
          cartCountRefetch();
          toast.success("Item deleted.");
        }
      })
      .catch(() => {
        toast.error("Something went wrong! Try again.");
      });
  };

  return (
    <div className="grid grid-cols-11 gap-4 items-stretch">
      <p className="col-span-1">{serial + 1}</p>
      <figure className="w-full h-full col-span-4">
        <img
          className="w-full h-full object-cover rounded-md"
          src={cartInfo?.bookDetails[0]?.coverImage}
          alt="book img"
        />
      </figure>

      <div className="space-y-1 h-full col-span-5">
        <h3 className="text-lg">{cartInfo?.bookDetails[0]?.title}</h3>

        <div className="flex items-center gap-2">
          <div className="join">
            <button onClick={handleDecrease} className="btn btn-xs join-item">
              -
            </button>
            <button className="btn btn-xs join-item">{quantity}</button>
            <button onClick={handleIncrease} className="btn btn-xs join-item">
              +
            </button>
          </div>
          <RxCross1 />
          <p className="flex items-center text-[#d62928]">
            <LuDollarSign />
            {cartInfo?.bookDetails[0]?.rentalPrice || 0}
          </p>
        </div>
      </div>
      <div onClick={handleDelete} className="col-span-1">
        <FaRegTrashCan className="text-[#d62928] cursor-pointer"></FaRegTrashCan>
      </div>
    </div>
  );
};

export default CartCard;
