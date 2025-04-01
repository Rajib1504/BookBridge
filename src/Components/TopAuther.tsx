import signature from '../assets/Images/TopAuther/signature.webp'
import author from '../assets/Images/TopAuther/top auther image.webp'
import symbol from '../assets/Images/TopAuther/about-logo-text.webp'
import book from '../assets/Images/TopAuther/author-home-img2.webp'
import book2 from '../assets/Images/TopAuther/author-home-img3.webp'
const TopAuther = () => {
  return (
    <div className="w-full bg-[#fbeded] py-8 grid grid-cols-12">
      <aside className='col-start-3 col-span-2'>
        <img src={author} alt="" />
      </aside>
      <aside className='col-start-6 col-span-3  py-16  text-left'>
        <h6 className='uppercase font-Inter text-xs tracking-widest font-bold text-[#d62928] mb-3'>Top Auther</h6>
        <h4 className='font-Gilda text-4xl mb-5'>The Weeknd</h4>
        <p className='font-Gilda mb-3 text-sm'>David is an author of such sublime depth that his works have been known to cause a tear to fall from the eyes of even the hardest of hearts.
        </p>
        <p className='font-Gilda mb-3 text-xs text-gray-500 tracking-widest'>For years, He dreamed of writing thrillers the way he thought they should be written: complex, multi-genre stories with unique plots that ‘move’. Now he is one of the New York Times bestsellers author.
        </p>
        <img src={signature} alt="" />
      </aside>
      <aside className='col-start-9 col-span-3 px-2  grid grid-cols-12'>
            <img src={symbol} alt="" className='col-span-3 col-start-1' />
            <img src={book2} alt="" className='col-start-6 col-span-5 '/>
            <img src={book} alt="" className='col-span-5 col-start-1' />
      </aside>
    </div>
  );
};

export default TopAuther;
