import location from "../assets/featuresIcon/location.svg"
import premium from "../assets/featuresIcon/premium.svg"
import support from "../assets/featuresIcon/support.svg"

const Features = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex gap-4 border-2 border-base-300 py-8 px-14 rounded">
                    <div>
                        <img src={location} alt="LocationIcon" />
                    </div>
                    <div>
                        <h2 className="font-Gilda text-2xl">Free Delivery</h2>
                        <p className="font-Inter">For all oders over $99</p>
                    </div>
                </div>

                <div className="flex gap-4 border-2 border-base-300 py-8 px-14 rounded">
                    <div>
                        <img src={premium} alt="PremiumIcon" />
                    </div>
                    <div>
                        <h2 className="font-Gilda text-2xl">High Quality</h2>
                        <p className="font-Inter">Best quality bookstore</p>
                    </div>
                </div>

                <div className="flex gap-4 border-2 border-base-300 py-8 px-14 rounded">
                    <div>
                        <img src={support} alt="SupportIcon" />
                    </div>
                    <div>
                        <h2 className="font-Gilda text-2xl">24/7 Support</h2>
                        <p className="font-Inter">Dedicated support</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;