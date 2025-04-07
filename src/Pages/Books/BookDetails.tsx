import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/spinner/Spinner";
import { Rating } from "@smastrom/react-rating";
import { LuDollarSign } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const BookDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const {
    data: specificBookDetails = {},
    isLoading: specificBookDetailsLoading,
  } = useQuery({
    queryKey: ["specificBookDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/book/${id}`);
      return res.data;
    },
  });

  console.log(specificBookDetails);

  const [count, setCount] = useState(1);

  // increase/decrease handler
  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 my-20 font-Inter">
      {specificBookDetailsLoading && <Spinner />}
      <div className="card lg:card-side bg-base-100 shadow-sm max-w-4xl mx-auto">
        <figure className="w-1/2">
          <img src={specificBookDetails?.coverImage} alt="Book's image" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title font-Gilda text-4xl font-normal text-gray-700">
            {specificBookDetails?.title}
          </h2>
          {/* author and review's */}
          <div className="grid grid-cols-2">
            <p>
              <span className="text-gray-600">Author:</span>{" "}
              {specificBookDetails?.contact?.name}
            </p>{" "}
            <div className="flex items-center gap-x-2">
              <Rating style={{ maxWidth: 100 }} value={3} readOnly />
              <h5 className="text-[#828282] text-sm">(1 review)</h5>
            </div>
          </div>

          <div className="divider"></div>
          <h3 className="text-[#d62928] font-medium text-4xl flex items-center ">
            <LuDollarSign />
            {specificBookDetails?.rentalPrice || 0}
          </h3>
          {/* stock status  */}
          <div>
            <span className="flex items-center justify-start gap-2 text-green-600">
              {/* todo: need to change pending to available  */}
              {specificBookDetails?.status === "pending" && (
                <>
                  <FaRegCheckCircle /> In-stock
                </>
              )}
              {specificBookDetails?.status === "sold" && (
                <>
                  <FaRegCheckCircle className="text-red-600" />{" "}
                  <span className="text-red-600">Out of stock</span>
                </>
              )}
            </span>
          </div>

          {/* quantity selector  */}

          <div className="join">
            <button onClick={handleDecrease} className="btn join-item">
              -
            </button>
            <button className="btn join-item">{count}</button>
            <button onClick={handleIncrease} className="btn join-item">
              {" "}
              +
            </button>
          </div>
          {/* add to card area  */}
          <div className="flex items-center gap-4 mt-4">
            <div className="w-full">
              <button className="w-full text-white btn uppercase tracking-widest text-xs bg-[#201c1c] border-0 hover:bg-[#d62928]">
                Add to Cart{" "}
                <HiOutlineShoppingBag className="text-lg"></HiOutlineShoppingBag>{" "}
              </button>
            </div>
            <button className="btn btn-square hover:bg-[#d62928] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-[1.2em]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
