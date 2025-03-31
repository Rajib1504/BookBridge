import discountImg from "../assets/discountImages/discountImg.webp";
import singleBookImg from "../assets/discountImages/singleBook.webp";
import discountBg from "../assets/discountImages/discountBg.webp";
import lineImg from "../assets/discountImages/line.webp";
import { Link } from "react-router-dom";
const Discount = () => {
  return (
    <div className="bg-[#FBE9DF] max-w-7xl mx-auto px-2 sm:px-6 md:px-16 my-20 font-Inter">
      <div
        className="grid grid-cols-7 gap-6 items-center pt-6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${discountBg})`,
        }}
      >
        <div className="col-span-2">
          <figure>
            <img src={singleBookImg} alt="a book image" />
          </figure>
        </div>
        <div className="flex flex-col items-center justify-center col-span-3">
          <h4 className="uppercase text-xs tracking-widest font-bold text-[#d62928]">
            Weekend Promotions
          </h4>
          <h2 className="text-5xl font-Gilda leading-snug">15% Discount On</h2>
          <h2 className="text-5xl font-Gilda leading-snug">All Books</h2>
          <p className="uppercase text-xs text-center tracking-widest">
            Promotion will ends on 10th November 2026. Hurry Up
          </p>
          <Link to={"/"}>
            <button className="mt-6 text-white uppercase py-6 tracking-widest text-xs border-0 btn btn-wide bg-[#d62928] hover:bg-[#FFB237]">
              Shop Now
            </button>
          </Link>
        </div>
        <div
          className="col-span-2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${lineImg})`,
          }}
        >
          <figure>
            <img src={discountImg} alt="model image" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Discount;
