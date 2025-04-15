import Banner from "../../Components/Banner";
import BestSeller from "../../Components/BestSeller";
import Discount from "../../Components/Discount";
import ShopbyBrands from "../../Components/ShopbyBrands";
import ShopByCategory from "../../Components/ShopByCategory";
import Testimonial from "../../Components/Testimonials";
import TopAuther from "../../Components/TopAuther";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSeller />
      <Discount />
      <ShopByCategory />
      <ShopbyBrands />
      <TopAuther />
      <Testimonial />
    </div>
  );
};

export default Home;
