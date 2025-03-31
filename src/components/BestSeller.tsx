import React from "react";
// import BestSellerCard from "./BestSellerCard";

const BestSeller = () => {
    return (
        <div className='max-w-7xl mx-auto px-2 sm:px-6 md:px-16 my-20 font-Inter'>
            <div className='space-y-4 my-6'>
                <h5 className='text-[#d62928] text-sm tracking-[4px] font-bold'>BESTSELLER</h5>
                <h2 className='font-Gilda text-4xl'>Bestseller Books</h2>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
                <input type="radio" name="my_tabs_2" className="tab" aria-label="All" defaultChecked />
                <div className="tab-content bg-base-100 py-10">
                    <div className='grid place-items-center sm:place-items-baseline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-30'>
                        {/* Card will be placed Here */}
                        {/* <BestSellerCard></BestSellerCard>
                        <BestSellerCard></BestSellerCard>
                        <BestSellerCard></BestSellerCard>
                        <BestSellerCard></BestSellerCard> */}
                    </div>

                </div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Art & Photography" />
                <div className="tab-content bg-base-100 py-10">

                    <div className='grid place-items-center sm:place-items-baseline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-30'>
                        {/* Card will be placed Here */}
                        {/* <BestSellerCard></BestSellerCard>
                        <BestSellerCard></BestSellerCard>
                        <BestSellerCard></BestSellerCard>
                        <BestSellerCard></BestSellerCard> */}
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Cookbooks, Foods" />
                <div className="tab-content bg-base-100 py-10">


                {/* <BestSellerCard></BestSellerCard> */}
                </div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Drawing" />
                <div className="tab-content bg-base-100 py-10">Tab content 3</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Graphic Design" />
                <div className="tab-content bg-base-100 py-10">Tab content 3</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Photography" />
                <div className="tab-content bg-base-100 py-10">Photography</div>
            </div>
        </div>
    );
};

export default BestSeller;