import React from 'react';

import brand1 from "../assets/brandImages/book-kaixa-brands.png"
import brand2 from "../assets/brandImages/books-universe-brands.png"
import brand3 from "../assets/brandImages/eaglebook-brands.png"
import brand4 from "../assets/brandImages/education-brands.png"
import brand5 from "../assets/brandImages/garden-brands.png"
import brand6 from "../assets/brandImages/insight-book-brands.png"
import brand7 from "../assets/brandImages/kingbooks-brands.png"
import brand8 from "../assets/brandImages/learning-brands.png"
import brand9 from "../assets/brandImages/magicbook-brands.png"
import brand10 from "../assets/brandImages/owlbird-brands.png"

const ShopbyBrands = () => {

    return (
        <div className='max-w-7xl mx-auto px-2 sm:px-6 md:px-16 my-20 font-Inter'>
            <div className='space-y-4 my-6'>
                <h2 className='font-Gilda text-4xl'>Shop By Brands</h2>
            </div>

            <div className='grid grid-cols-5 gap-6'>
                {/* Brand Logos */}

                <div>
                    <img src={brand1} alt="BrandLogo" />
                </div>
                <div>
                    <img src={brand2} alt="BrandLogo" />
                </div>
                <div>
                    <img src={brand3} alt="BrandLogo" />
                </div>
                <div>
                    <img src={brand4} alt="BrandLogo" />
                </div>
                <div>
                    <img src={brand5} alt="BrandLogo" />
                </div>
                <div>
                    <img src={brand6} alt="BrandLogo" />
                </div>
                <div>
                    <img src={brand7} alt="BrandLogo" />
                </div>
                <div>
                    <img src={brand8} alt="BrandLogo" />
                </div>
                <div>
                    <img src={brand9} alt="BrandLogo" />
                </div>
                <div>
                    <img src={brand10} alt="BrandLogo" />
                </div>

            </div>

        </div>
    );
};

export default ShopbyBrands;