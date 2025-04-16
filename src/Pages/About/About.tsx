import aboutBG from "../../assets/pageBackground/aboutusbg.jpeg";
import { TfiBook } from "react-icons/tfi";
import { CiTrophy } from "react-icons/ci";
import { PiHandCoinsLight } from "react-icons/pi";
import partner1 from "../../assets/Partners/p1.webp";
import partner2 from "../../assets/Partners/partner2.webp";
import partner3 from "../../assets/Partners/p3.webp";
import partner4 from "../../assets/Partners/partner4.webp";
import partner5 from "../../assets/Partners/partner5.webp";
import partner6 from "../../assets/Partners/partner6.webp";
const AboutPage: React.FC = () => {
  return (
    <div className="mt-16">
      {/* Backgroud Image section */}
      <div
        className="hero h-64"
        style={{
          backgroundImage: `url(${aboutBG})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-md">
            <h1 className="mb-5 font-Gilda text-5xl">About Us</h1>
          </div>
        </div>
      </div>

      {/* about details content section  */}
      <div className="max-w-7xl mx-auto p-4 py-28">
        <div className="flex flex-col items-center max-w-3xl mx-auto px-4">
          <h1 className="font-Gilda text-5xl">
            Welcome to <span className="text-[#d62928]">BookBridge</span>
          </h1>
          <p className="text-2xl font-Gilda pt-4 tracking-wide">
            We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all.
          </p>
        </div>

        {/* What we really do section */}

        <div className="max-w-3xl mx-auto px-4 pt-16">
          <h3 className="text-[#d62928] pb-4 text-xl font-semibold">
            What we really do?
          </h3>
          <p className="text-md font-Inter pt-3 tracking-wide leading-7 text-justify">
            First, and most intuitively, the more education someone has, the
            more likely they are{" "}
            <span className="text-[#d62928]">to be a reader.</span> Beyond
            that,urban people read more than rural people, affluence is
            associated with reading, and young girls read earlier than boys do
            and continue to read more in adulthood.
          </p>
        </div>
        <div className="max-w-3xl mx-auto px-4 pt-24">
          <div className="grid grid-cols-3 gap-6 ">
            <div className="space-y-3 flex items-center flex-col">
              <p className="text-5xl">
                <TfiBook />
              </p>
              <h4 className="text-4xl tracking-wider">45m</h4>
              <p className="text-lg tracking-wider">Products</p>
            </div>
            <div className="space-y-3 flex items-center flex-col">
              <p className="text-5xl">
                <CiTrophy />
              </p>
              <h4 className="text-4xl tracking-wider">2m</h4>
              <p className="text-lg tracking-wider">Active Seller</p>
            </div>
            <div className="space-y-3 flex items-center flex-col">
              <p className="text-5xl transform rotate-180 scale-x-[-1]">
                <PiHandCoinsLight />
              </p>
              <h4 className="text-4xl tracking-wider">30m</h4>
              <p className="text-lg tracking-wider">Active Buyers</p>
            </div>
          </div>
        </div>

        <div className="divider max-w-3xl mx-auto px-4 pt-12"></div>

        {/* our vission section  */}
        <div className="max-w-3xl mx-auto px-4 pt-16">
          <h3 className="text-[#d62928] pb-4 text-xl font-semibold">
            Our Vision
          </h3>

          <p className="text-md font-Inter pt-3 tracking-wide leading-7 text-justify">
            Wherever you go, take a book with you. When I leave the house, I
            always make sure to have my drivers license, my keys and my book, at
            a minimum.{" "}
            <span className="text-[#d62928]">The book stays with me</span> in
            the car, and I take it into the office and to appointments and
            pretty much everywhere I go, unless I know I definitely won’t be
            reading.
          </p>
        </div>

        {/* our partners section  */}
        <div className="pt-24">
          <h3 className="text-center text-4xl font-Gilda mb-8">Our Partner</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <figure>
              <img src={partner1} alt="partner img" />
            </figure>
            <figure>
              <img src={partner2} alt="partner img" />
            </figure>
            <figure>
              <img src={partner3} alt="partner img" />
            </figure>
            <figure>
              <img src={partner4} alt="partner img" />
            </figure>
            <figure>
              <img src={partner5} alt="partner img" />
            </figure>
            <figure>
              <img src={partner6} alt="partner img" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
