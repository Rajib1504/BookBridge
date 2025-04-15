// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./axiosSecure";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  // const { user } = useAuth();
  const auth = useAuth();
  const user = auth?.user;

  // get cart items
  const { data: cartsInfo = [], refetch: cartsInfoRefetch } = useQuery({
    enabled: !!user?.email,
    queryKey: ["cartsInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/cart?userEmail=${user?.email}&status=${"inCart"}`
      );
      return res.data;
    },
  });
  return { cartsInfo, cartsInfoRefetch };
};

export default useCart;
