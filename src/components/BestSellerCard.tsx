import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hooks/axiosSecure";
import toast from "react-hot-toast";
import { GiMailShirt } from "react-icons/gi";
import useAuth from "../Hooks/useAuth";

type Books = {
  availability: string;
  title: string;
  author: string;
  category: string;
  description: string;
  condition: string;
  coverImage: string;
  rentalPrice?: number;
  exchangePreferences: string;
  location: string;
  ownerName: string;
  contactEmail: string;
  contactPhone: string;
  bookId: number;
};
type BestSellerCardProps = {
  book: Books;
};

const axiosSecure = useAxiosSecure();
// const { user } = useAuth();
// console.log(user);

const BestSellerCard = ({ book }: BestSellerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // add to cart
  const handleAddtoCart = (bookId: number) => {
    const cartInfo = {
      bookId: bookId,
      quantity: 1,
      userEmail: "najmul.nh.shaon@gmail.com",
    };
    axiosSecure.post("/api/cart", cartInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Added to cart.");
      }
    });
  };

  return (
    <div
      className="w-64"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <figure className="relative">
          <img
            src={book?.coverImage}
            alt="cover image"
            className="rounded-xl w-full h-48 object-fill"
          />
          {isHovered && (
            <>
              <Zoom duration={500}>
                <div className="hidden md:block absolute w-full bottom-8 px-4">
                  <button
                    onClick={() => handleAddtoCart(book?.bookId)}
                    className="w-full text-white btn uppercase tracking-widest text-xs bg-[#201c1c] border-0 hover:bg-[#d62928]"
                  >
                    Add to Cart{" "}
                    <HiOutlineShoppingBag className="text-lg"></HiOutlineShoppingBag>{" "}
                  </button>
                </div>
              </Zoom>
            </>
          )}
        </figure>
        <div className="absolute top-1">
          <span className="badge badge-xs badge-warning rounded text-white">
            {book?.availability}
          </span>
        </div>
      </div>
      <div className="card-body gap-0 space-y-2 p-4 items-start text-center">
        <div className="flex items-center gap-x-2">
          <Rating style={{ maxWidth: 100 }} value={3} readOnly />
          <h5 className="text-[#828282] text-sm">(1 review)</h5>
        </div>
        <Link to={`/browse-books/${book?.bookId}`}>
          <h2 className="card-title hover:underline hover:text-[#d62928]">
            {book?.title}
          </h2>
        </Link>
        <h5 className="text-[#828282] text-sm">{book?.category}</h5>
        <div className="flex items-center gap-x-2">
          <h3 className="text-[#d62928] font-medium text-xl flex items-center ">
            <LuDollarSign />
            {book?.rentalPrice || 0}
          </h3>
          <h5 className="text-[#828282] text-sm line-through">$12.00</h5>
        </div>
        <button className="mt-2 md:hidden w-full text-white btn uppercase tracking-widest text-xs bg-[#201c1c] border-0 hover:bg-[#d62928]">
          Add to Cart{" "}
          <HiOutlineShoppingBag className="text-lg"></HiOutlineShoppingBag>{" "}
        </button>
      </div>
    </div>
  );
};

export default BestSellerCard;
