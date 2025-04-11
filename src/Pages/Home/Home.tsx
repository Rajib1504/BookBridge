
import Banner from "../../Components/Banner";
import BestSeller from "../../Components/BestSeller";
import Discount from "../../Components/Discount";
import ShopbyBrands from "../../components/ShopbyBrands";
import ShopByCategory from "../../Components/ShopByCategory";
import Testimonial from "../../components/Testimonials";
import TopAuther from "../../Components/TopAuther";


const Home = () => {
      return (
            <div>
                <Banner/>
                <BestSeller/>
                <Discount/>
                <ShopByCategory/>
                <TopAuther/>
                <ShopbyBrands></ShopbyBrands>
                <Testimonial/>              
            </div>
      );
};

export default Home;