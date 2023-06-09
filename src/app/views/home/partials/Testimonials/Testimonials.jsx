"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

// import required modules
import Image from "next/image";
import { Pagination } from "swiper/modules";

import quotationMark1 from "../../../../../assets/img/quotation-marks.svg";
import quotationMark2 from "../../../../../assets/img/quotation-marks2.svg";
import testimonialArrow from "../../../../../assets/img/testimonialArrow.svg";
import testimonialProviderImage from "../../../../../assets/img/testimonialProviderImage.svg";

const Testimonials = () => {
  return (
    <div className="flex justify-end">
      <div className="sm:container 2xl:container 2xl:w-full 2xl:max-w-[1620px] h-[820px] rounded-[65px_0px_0px_65px] bg-[#F5F5F5]">
        <h1 className="text-[#01B489] text-[65px] font-medium md:pt-[47px] md:pl-[90px]">
          Testimonials
        </h1>
        <div className="flex md:pl-[90px] mt-[57px] gap-10 items-end  px-20 ">
          <Image src={testimonialArrow} alt="testimonialArrow" />

          <Swiper
            // loop={true}

            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            className=" relative my-custom-slider"
            modules={[Pagination]}
            // breakpoints={{
            //   // Configure breakpoints here
            //   768: {
            //     slidesPerView: 1,
            //     spaceBetween: 10,
            //   },
            //   1024: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            //   },
            //   1280: {
            //     slidesPerView: 3,
            //     spaceBetween: 70,
            //   },
            //   1536: {
            //     slidesPerView: 4,
            //     spaceBetween: 50,
            //   },
            // }}
          >
            <SwiperSlide className="">
              <div className="2xl:w-[1180px] w-[940px] bg-white h-[490px] shadow-[0px_4px_33px_0px_rgba(202,202,202,0.25)] ">
                <div className="flex justify-between  px-9 py-7 relative">
                  <div className="items-start">
                    <Image
                      src={quotationMark1}
                      alt="quotation marker"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center mt-[178px]">
                    <p className="md:w-[637px] text-[#444F55] text-base font-normal tracking-[0.8px] text-center mb-[35px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Massa fringilla velit fames sem venenatis ullamcorper odio
                      tincidunt. At diam lectus purus urna dolor massa facilisi
                      facilisis tincidunt.
                    </p>
                    <h1 className="text-[#444F55] text-2xl font-medium tracking-[1.25px]">
                      Dr. Imran Khan{" "}
                    </h1>
                    <h2 className="text-[#7D7C7C] text-lg font-normal tracking-[0.9px] mb-[52px]">
                      Professor
                    </h2>
                    <Image
                      src={testimonialProviderImage}
                      alt="testimonialProviderImage"
                      width={126}
                      height={126}
                    />
                  </div>
                  <div className="!flex mb-[80px] !items-end ">
                    <Image
                      src={quotationMark2}
                      alt="quation marker"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="">
              <div className="2xl:w-[1180px] w-[940px] bg-white h-[490px] shadow-[0px_4px_33px_0px_rgba(202,202,202,0.25)] ">
                <div className="flex justify-between  px-9 py-7 relative">
                  <div className="items-start">
                    <Image
                      src={quotationMark1}
                      alt="quotation marker"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center mt-[178px]">
                    <p className="md:w-[637px] text-[#444F55] text-base font-normal tracking-[0.8px] text-center mb-[35px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Massa fringilla velit fames sem venenatis ullamcorper odio
                      tincidunt. At diam lectus purus urna dolor massa facilisi
                      facilisis tincidunt.
                    </p>
                    <h1 className="text-[#444F55] text-2xl font-medium tracking-[1.25px]">
                      Dr. Imran Khan{" "}
                    </h1>
                    <h2 className="text-[#7D7C7C] text-lg font-normal tracking-[0.9px] mb-[52px]">
                      Professor
                    </h2>
                    <Image
                      src={testimonialProviderImage}
                      alt="testimonialProviderImage"
                      width={126}
                      height={126}
                    />
                  </div>
                  <div className="!flex mb-[80px] !items-end ">
                    <Image
                      src={quotationMark2}
                      alt="quation marker"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="">
              <div className="2xl:w-[1180px] w-[940px] bg-white h-[490px] shadow-[0px_4px_33px_0px_rgba(202,202,202,0.25)] ">
                <div className="flex justify-between  px-9 py-7 relative">
                  <div className="items-start">
                    <Image
                      src={quotationMark1}
                      alt="quotation marker"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center mt-[178px]">
                    <p className="md:w-[637px] text-[#444F55] text-base font-normal tracking-[0.8px] text-center mb-[35px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Massa fringilla velit fames sem venenatis ullamcorper odio
                      tincidunt. At diam lectus purus urna dolor massa facilisi
                      facilisis tincidunt.
                    </p>
                    <h1 className="text-[#444F55] text-2xl font-medium tracking-[1.25px]">
                      Dr. Imran Khan{" "}
                    </h1>
                    <h2 className="text-[#7D7C7C] text-lg font-normal tracking-[0.9px] mb-[52px]">
                      Professor
                    </h2>
                    <Image
                      src={testimonialProviderImage}
                      alt="testimonialProviderImage"
                      width={126}
                      height={126}
                    />
                  </div>
                  <div className="!flex mb-[80px] !items-end ">
                    <Image
                      src={quotationMark2}
                      alt="quation marker"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
