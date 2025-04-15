import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/axiosSecure";
import useAuth from "../../Hooks/useAuth";
import CartCard from "./CartCard";
import { LuDollarSign } from "react-icons/lu";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { cartsInfo, cartsInfoRefetch } = useCart();

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [total, setTotal] = useState(0);

  // Initialize quantities
  useEffect(() => {
    if (cartsInfo.length > 0) {
      const initialQuantities: { [key: string]: number } = {};
      cartsInfo.forEach((item) => {
        initialQuantities[item.cartId] = item.quantity || 1;
      });
      setQuantities(initialQuantities);
    }
  }, [cartsInfo]);

  // Update total price when quantities change
  useEffect(() => {
    const totalPrice = cartsInfo.reduce((acc, item) => {
      const qty = quantities[item.cartId] || 1;
      const price = parseFloat(item.bookDetails[0]?.rentalPrice) || 0;
      return acc + qty * price;
    }, 0);
    setTotal(totalPrice);
  }, [quantities, cartsInfo]);

  const handleQuantityChange = (cartId: string, qty: number) => {
    setQuantities((prev) => ({
      ...prev,
      [cartId]: qty,
    }));
    axiosSecure
      .patch(
        `api/cart?userEmail=${user?.email}&cartId=${cartId}&newQuantity=${qty}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) toast.success("Cart updated.");
      })
      .catch(() => {
        toast.error("Something went wrong! Try again.");
      });
  };

  const hanldeCheckout = (cartsInfo: any) => {
    const cartIds = cartsInfo.map((cartInfo: any) => cartInfo.cartId);
    const bookIds = cartsInfo.map((cartInfo: any) => cartInfo.bookId);

    const checkoutInfo = {
      cartIds: cartIds,
      bookIds: bookIds,
      userEmail: user?.email,
      userName: user?.displayName,
    };
    axiosSecure
      .post("/api/rent", checkoutInfo)
      .then((res) => {
        window.location.replace(res.data.url);
      })
      .catch(() => toast.error("Something went wrong. Try again."));
  };

  return (
    <div>
      <h3 className="text-4xl font-Gilda">Cart</h3>
      <div className="divider"></div>

      <div className="flex flex-col gap-6">
        {cartsInfo.length <= 0 && (
          <h3 className="text-[#d62928]">Please add to cart first.</h3>
        )}
        {cartsInfo.map((cartInfo: any, i: number) => (
          <CartCard
            key={cartInfo.cartId}
            cartsInfoRefetch={cartsInfoRefetch}
            serial={i}
            cartInfo={cartInfo}
            quantity={quantities[cartInfo.cartId] || 1}
            onQuantityChange={(qty) =>
              handleQuantityChange(cartInfo.cartId, qty)
            }
          />
        ))}
      </div>

      <div className="divider"></div>

      <div className="flex justify-between pe-4 font-Gilda">
        <p className="text-xl">Subtotal: </p>
        <p className="flex items-center text-[#d62928] text-2xl font-bold">
          <LuDollarSign />
          {total}
        </p>
      </div>

      <div className="divider"></div>

      <div className="w-full bottom-8 px-4">
        <button
          onClick={() => hanldeCheckout(cartsInfo)}
          className={`w-full text-white btn uppercase tracking-widest text-xs bg-[#201c1c] border-0 hover:bg-[#d62928] ${
            cartsInfo.length <= 0 && "btn-disabled"
          }`}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
