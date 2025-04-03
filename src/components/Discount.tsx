import discountImg from "../assets/discountImages/discountImg.webp";
import singleBookImg from "../assets/discountImages/singleBook.webp";
import discountBg from "../assets/discountImages/discountBg.webp";
import lineImg from "../assets/discountImages/line.webp";
import { Link } from "react-router-dom";
const Discount = () => {
  return (
    // width control container
    <div className="bg-[#FBE9DF] max-w-7xl mx-auto px-4 sm:px-6 md:px-16 my-20 font-Inter">
      {/* content container  */}
      <div
        className="grid grid-cols-6 lg:grid-cols-7 gap-6 items-center pt-6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${discountBg})`,
        }}
      >
        {/* single book::: first container  */}
        <div className="lg:col-span-2 hidden lg:block">
          <figure>
            <img src={singleBookImg} alt="a book image" />
          </figure>
        </div>
        {/* text container::: second container */}
        <div className="flex flex-col items-start lg:items-center justify-center col-span-3 border">
          <h4 className="uppercase text-xs tracking-widest font-bold text-[#d62928]">
            Weekend Promotions
          </h4>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-Gilda leading-snug">
            15% Discount On
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-Gilda leading-snug">
            All Books
          </h2>
          <p className="uppercase text-xs tracking-widest">
            Promotion will ends on 10th November 2026. Hurry Up
          </p>
          <Link to={"/"}>
            <button className="mt-6 text-white uppercase py-6 tracking-widest text-xs border-0 btn btn-wide bg-[#d62928] hover:bg-[#FFB237]">
              Shop Now
            </button>
          </Link>
        </div>
        {/* discount image container::: third container  */}
        <div
          className="lg:col-span-2 col-span-3 bg-cover bg-center bg-no-repeat border"
          style={{
            backgroundImage: `url(${lineImg})`,
          }}
        >
          <figure className="scale-122 md:scale-none">
            <img src={discountImg} alt="model image" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Discount;
