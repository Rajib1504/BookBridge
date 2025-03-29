import { Rating } from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";
import { useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const BestSellerCard = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='w-72' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <figure className="relative">
                <img
                    src="https://demo.exptheme.com/cetara/wp-content/uploads/2021/08/book-21.jpg"
                    alt="Shoes"
                    className="rounded-xl" />
                {
                    isHovered && <>
                        <Zoom duration={500}>
                            <div className='hidden md:block absolute w-full bottom-8 px-4'>
                                <button className='w-full text-white btn uppercase tracking-widest text-xs bg-[#201c1c] border-0 hover:bg-[#d62928]'>Add to Cart <HiOutlineShoppingBag className='text-lg'></HiOutlineShoppingBag> </button>
                            </div>
                        </Zoom>
                    </>
                }
            </figure>
            <div className="card-body gap-0 space-y-2 p-4 items-start text-center">
                <div className='flex items-center gap-x-2'>
                    <p></p>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={3}
                        readOnly
                    />
                    <h5 className='text-[#828282] text-sm'>(1 review)</h5>
                </div>
                <h2 className="card-title">Marshall Kilburn Portable</h2>
                <h5 className='text-[#828282] text-sm'>Business of Art</h5>
                <div className='flex items-center gap-x-2'>
                    <h3 className='text-[#d62928] font-medium text-xl'>$10.00</h3>
                    <h5 className='text-[#828282] text-sm line-through'>$12.00</h5>
                </div>
                <button className='mt-2 md:hidden w-full text-white btn uppercase tracking-widest text-xs bg-[#201c1c] border-0 hover:bg-[#d62928]'>Add to Cart <HiOutlineShoppingBag className='text-lg'></HiOutlineShoppingBag> </button>
            </div>
        </div>
    );
};

export default BestSellerCard;