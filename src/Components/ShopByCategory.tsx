
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image_1 from "../assets/Images/ShopByCategory/image_1.png";
import image_2 from "../assets/Images/ShopByCategory/image_2.png";
import image_3 from "../assets/Images/ShopByCategory/image_3.png";
import image_4 from "../assets/Images/ShopByCategory/image_4.png";
import image_5 from "../assets/Images/ShopByCategory/image_5.png";
import { Link } from 'react-router-dom';


const ShopByCategory = () => {
  return (
    <section className="bg-[#eedfdba2] w-full my-14 py-6 min-h-screen flex justify-center items-center gap-8 flex-col">
      <aside className="w-full flex justify-center items-center flex-col font-bold ">
        <p className="uppercase text-xs tracking-widest font-bold text-[#d62928]">
          category
        </p>
        <h3 className="font-Gilda leading-snug text-center font-light text-5xl ">
          Shop by categories
        </h3>
      </aside>
      <div className="w-[80%] mx-auto">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
          className="mySwiper"
        >
          {/* Create an array of data to map over */}
          {[
            { image: image_1, title: "Art & Photography", count: "1 Book" },
            { image: image_2, title: "Biography & Memoirs", count: "1 Book" },
            { image: image_3, title: "History", count: "1 Book" },
            { image: image_4, title: "Business of Art", count: "1 Book" },
            { image: image_5, title: "Children's Books", count: "1 Book" },
            { image: image_1, title: "Art & Photography", count: "1 Book" },
            { image: image_2, title: "Biography & Memoirs", count: "1 Book" },
            { image: image_3, title: "History", count: "1 Book" },
            { image: image_4, title: "Business of Art", count: "1 Book" },
            { image: image_5, title: "Children's Books", count: "1 Book" },
            // Add more items if needed
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={'/'} className="flex justify-center"> {/* Center the single item */}
                <div  className="hover:text-[#d62928] border-2 border-gray-400 w-[224px] h-[224px] rounded-lg flex flex-col justify-center gap-5 items-center">
                  <figure className="hover:scale-105 hover:duration-300">
                    <img src={item.image} className="w-20" alt={item.title} />
                  </figure>
                  <div className="flex-col justify-center items-center text-center">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.count}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByCategory;