import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/axiosSecure";
import useAuth from "../../Hooks/useAuth";
import CartCard from "./CartCard";
import { LuDollarSign } from "react-icons/lu";
import { useState } from "react";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [total, setTotal] = useState(0);
  console.log(total);

  const { data: cartsInfo = [] } = useQuery({
    enabled: !!user?.email,
    queryKey: ["cartsInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/cart?userEmail=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      {/* cart title  */}
      <h3 className="text-4xl font-Gilda">Cart</h3>
      <div className="divider"></div>

      {/* cart content  */}
      <div className="flex flex-col gap-6">
        {cartsInfo.map((cartInfo: any, i: number) => (
          <CartCard
            key={cartInfo.cartId}
            serial={i}
            cartInfo={cartInfo}
            setTotal={setTotal}
          ></CartCard>
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
    </div>
  );
};

export default Cart;
