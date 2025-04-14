import React from "react";
import useAxiosSecure from "./axiosSecure";
import useAuth from "./useAuth";
import useCart from "./useCart";
import useCartCount from "./useCartCount";
import toast from "react-hot-toast";

const useAddToCart = () => {
  const axiosSecure = useAxiosSecure();
  const { cartsInfoRefetch } = useCart();
  const { cartCountRefetch } = useCartCount();
  const { user } = useAuth();
  const handleAddtoCart = (bookId: number) => {
    const cartInfo = {
      bookId: bookId,
      quantity: 1,
      userEmail: user?.email,
      status: "inCart",
    };
    console.log(cartInfo);
    axiosSecure
      .post("/api/cart", cartInfo)
      .then((res) => {
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
      .catch((err) => console.log(err));
  };
  return handleAddtoCart;
};

export default useAddToCart;
