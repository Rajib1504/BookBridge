import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./axiosSecure";
import useAuth from "./useAuth";

const useCartCount = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // get cart items
  const { data: cartCount = 0, refetch: cartCountRefetch } = useQuery({
    enabled: !!user?.email,
    queryKey: ["cartCount", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/cart/count?userEmail=${user?.email}`
      );
      return res.data;
    },
  });
  return { cartCount, cartCountRefetch };
};

export default useCartCount;
