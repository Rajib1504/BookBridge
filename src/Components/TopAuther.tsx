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
      <aside className='col-start-6 col-span-3'>
        <h6>Top Auther</h6>
        <h4>The Weeknd</h4>
        <p>David is an author of such sublime depth that his works have been known to cause a tear to fall from the eyes of even the hardest of hearts.
        </p>
        <p>For years, He dreamed of writing thrillers the way he thought they should be written: complex, multi-genre stories with unique plots that ‘move’. Now he is one of the New York Times bestsellers author.
        </p>
        <img src={signature} alt="" />
      </aside>
      <aside className='col-start-9 col-span-3 px-2 border-2 border-red-400 grid grid-cols-12'>
            <img src={symbol} alt="" className='col-span-3 col-start-1' />
            <img src={book2} alt="" className='col-start-6 col-span-5 '/>
            <img src={book} alt="" className='col-span-5 col-start-1' />
      </aside>
    </div>
  );
};

export default TopAuther;
