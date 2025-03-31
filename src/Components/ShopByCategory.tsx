import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image_1 from "../assets/Images/ShopByCategory/image_1.png"

const ShopByCategory = () => {
  return (
    <section className="bg-[#F1E9E7] w-full my-14 py-6 min-h-screen">
      <aside className="w-full flex justify-center items-center flex-col font-bold ">
        <p className="uppercase text-xs tracking-widest font-bold text-[#d62928]">
          category
        </p>
        <h3 className="font-Gilda leading-snug font-light text-5xl ">
          Shop by categories
        </h3>
      </aside>
      <div className="border-2 w-[80%] mx-auto border-red-600">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div  className="flex items-center justify-around">
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
           
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div  className="flex items-center justify-around">
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
           
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div  className="flex items-center justify-around">
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            {/* next one */}
           
            <div className="border-2 border-gray-400  rounded-lg p-10 flex flex-col justify-center gap-5 items-center ">
              <figure>
                <img src={image_1} className=" w-20" alt="" />
               
              </figure>
              <div className="flex-col justify-center items-center text-center">
                  <h3 className="font-semibold">Art & Photography</h3>
                  <p>1 Book </p>
              </div>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByCategory;
