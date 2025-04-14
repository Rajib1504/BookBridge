import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/axiosSecure";

const axiosSecure = useAxiosSecure();

  const {
    data: cartInfo = [],
    isLoading: cartInfoLoading,
    refetch,
  } = useQuery({
    queryKey: ["cartInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/cart`);
      return res.data;
    },
  });

  console.log(cartInfo);

const Cart = () => {
  return <div></div>;
};

export default Cart;
