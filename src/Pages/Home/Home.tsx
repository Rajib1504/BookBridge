
import Banner from "../../Components/Banner";
import BestSeller from "../../Components/BestSeller";
import Discount from "../../Components/Discount";
import ShopbyBrands from "../../components/ShopbyBrands";
import ShopByCategory from "../../Components/ShopByCategory";
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
               
            </div>
      );
};

export default Home;