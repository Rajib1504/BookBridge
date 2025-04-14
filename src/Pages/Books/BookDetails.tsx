import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/spinner/Spinner";
import { Rating } from "@smastrom/react-rating";
import { LuDollarSign } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import BestSellerCard from "../../Components/BestSellerCard";

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
      <div className="card md:card-side bg-base-100 shadow-sm max-w-4xl mx-auto">
        <figure className="w-full md:w-1/2">
          <img src={specificBookDetails?.coverImage} alt="Book's image" />
        </figure>
        <div className="card-body w-full md:w-1/2">
          <h2 className="card-title font-Gilda text-4xl font-normal text-gray-700">
            {specificBookDetails?.title}
          </h2>
          {/* author and review's */}
          <div className="grid grid-cols-2">
            <p>
              <span className="text-gray-600">Author:</span>{" "}
              {specificBookDetails?.author}
            </p>
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

          <div>
            <p>
              <span className="text-gray-600">Sold by:</span>{" "}
              {specificBookDetails?.contact?.name}
            </p>
          </div>
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
            {/* add to cart area  */}
            <div className="w-full">
              <button className="w-full text-white btn uppercase tracking-widest text-xs bg-[#201c1c] border-0 hover:bg-[#d62928]">
                Add to Cart{" "}
                <HiOutlineShoppingBag className="text-lg"></HiOutlineShoppingBag>{" "}
              </button>
            </div>

            {/* add to wishlist  */}
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

      {/* tabs  */}
      {/* description tab  */}
      <div className="mt-20">
        <div className="tabs tabs-border">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Product Description"
            defaultChecked
          />

          <div className="tab-content bg-base-100 py-10">
            <div className="px-4 md:px-10 py-8 space-y-8 text-gray-800">
              <div>
                <h1 className="text-4xl font-bold mb-1 font-Gilda">
                  {specificBookDetails?.title}
                </h1>
                <p className="text-lg text-gray-600 italic">
                  by {specificBookDetails?.author}
                </p>
                <p className="text-gray-600 text-sm">
                  Posted At:{" "}
                  {new Date(specificBookDetails?.postAt).toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 border-t border-b py-6">
                <p>
                  <span className="font-medium">Category:</span>{" "}
                  {specificBookDetails?.category}
                </p>
                <p>
                  <span className="font-medium">Location:</span>{" "}
                  {specificBookDetails?.location}
                </p>
                <p>
                  <span className="font-medium">Condition:</span>{" "}
                  {specificBookDetails?.condition}
                </p>
                <p>
                  <span className="font-medium">Availability:</span>{" "}
                  {specificBookDetails?.availability}
                </p>
                {specificBookDetails?.availability !== "Exchange" && (
                  <p>
                    <span className="font-medium">Rental Price:</span> $
                    {specificBookDetails?.rentalPrice}
                  </p>
                )}
              </div>

              <div className="space-y-2 border-b pb-6">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {specificBookDetails?.description}
                </p>
              </div>

              {specificBookDetails?.availability === "Exchange" && (
                <div className="space-y-2 border-b pb-6">
                  <h2 className="text-xl font-semibold">
                    Exchange Preferences
                  </h2>

                  <ul className="flex flex-wrap gap-4 text-gray-700 list-none pl-0">
                    {specificBookDetails?.exchangePreferences
                      ?.split(",")
                      .map((item: string, idx: number) => (
                        <li
                          key={idx}
                          className="before:content-['•'] before:mr-2 before:text-gray-700"
                        >
                          {item.trim()}
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              <div className="space-y-2  pb-6">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {specificBookDetails?.contact?.name}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {specificBookDetails?.contact?.email}
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  {specificBookDetails?.contact?.phone}
                </p>
              </div>
            </div>
          </div>

          {/* review tab */}
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Reviews (1)"
          />
          <div className="tab-content bg-base-100 py-10">Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
