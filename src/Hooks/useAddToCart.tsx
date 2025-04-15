// @ts-nocheck
import useAxiosSecure from "./axiosSecure";
import useAuth from "./useAuth";
import useCart from "./useCart";
import useCartCount from "./useCartCount";
import toast from "react-hot-toast";

const useAddToCart = () => {
  const axiosSecure = useAxiosSecure();
  const { cartsInfoRefetch } = useCart();
  const { cartCountRefetch } = useCartCount();
  // const { user } = useAuth();
  const auth = useAuth();
  const user = auth?.user;
  const handleAddtoCart = (bookId: number, price: number) => {
    const cartInfo = {
      bookId: bookId,
      quantity: 1,
      userEmail: user?.email,
      price: price,
      status: "inCart",
    };
    axiosSecure
      .post("/api/cart", cartInfo)
      .then((res: any) => {
        if (res.data.insertedId) {
          cartsInfoRefetch();
          cartCountRefetch();
          toast.success("Added to cart.");
        } else if (res.data.modifiedCount > 0) {
          cartsInfoRefetch();
          cartCountRefetch();
          toast.success("Updated cart quantity.");
        }
      })
      .catch(() => toast.error("Something went wrong. Try again."));
  };
  return handleAddtoCart;
};

export default useAddToCart;
