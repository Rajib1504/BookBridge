import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuDollarSign } from "react-icons/lu";

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
const BestSellerCard = ({ book }: BestSellerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
                  <button className="w-full text-white btn uppercase tracking-widest text-xs bg-[#201c1c] border-0 hover:bg-[#d62928]">
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
        <h2 className="card-title">{book?.title}</h2>
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
