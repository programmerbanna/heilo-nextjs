"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

// import required modules
import { ongoingTutions } from "@/app/shared/configs";
import Image from "next/image";
import { useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";

const DiscoverHeilo = () => {
  useEffect(() => {
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");

    prevButton.addEventListener("click", handlePrevButtonClick);
    nextButton.addEventListener("click", handleNextButtonClick);

    const root = document.documentElement;
    root.style.setProperty("--swiper-navigation-size", "30px"); // Change the size here

    return () => {
      prevButton.removeEventListener("click", handlePrevButtonClick);
      nextButton.removeEventListener("click", handleNextButtonClick);
    };
  }, []);

  const handlePrevButtonClick = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slidePrev();
  };

  const handleNextButtonClick = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideNext();
  };
  return (
    <>
      <div className="w-full bg-[#DAF7F0] h-[719px]">
        <div className="mx-auto container">
          <div className="text-center w-full py-10 ">
            <h1 className="text-center text-[40px] font-semibold font-primary mb-2">
              Discover Heilo
            </h1>
            <h4 className="text-[#00674E] text-2xl font-semibold font-primary text-center">
              Ongoing Tuitions
            </h4>
          </div>

          <div className="flex items-center justify-between container mx-auto px-20 relative">
            <div className="swiper-button-prev hide"></div>
            <Swiper
              // loop={true}
              navigation={{
                prevEl: ".swiper-button-prev.outside",
                nextEl: ".swiper-button-next.outside",
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper relative md:px-20"
              modules={[Navigation, Pagination]}
              breakpoints={{
                // Configure breakpoints here
                268: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 70,
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {ongoingTutions?.map((data, index) => (
                <>
                  <SwiperSlide className="w-[310px] h-[326px]" key={index}>
                    <div className="w-[310px] h-[326px] rounded-[25px] shadow-[0px_4px_18px_0px_#01B489] bg-white pt-[49px] pb-[37px] px-[37px] text-center">
                      <div className="flex items-start justify-between mb-5">
                        <div className="">
                          <Image
                            src={data?.personOneImage}
                            width={70}
                            height={70}
                            alt={data?.personOneName}
                          />
                          <h1 className="w-[70px] text-base font-semibold text-[#444F55] mt-4">
                            {data?.personOneName}
                          </h1>
                        </div>
                        <Image
                          src={data?.swapImage}
                          alt="swapImage"
                          className="mt-4"
                        />

                        <div className="">
                          <Image
                            src={data?.personTwoImage}
                            width={70}
                            height={70}
                            alt={data?.personTwoImage}
                          />
                          <h1 className="w-[70px] text-base font-semibold text-[#444F55] mt-4">
                            {data?.personTwoName}
                          </h1>
                        </div>
                      </div>

                      <div className="flex justify-center font-primary text-lg">
                        <h1 className="text-[#444F55] font-semibold">Class-</h1>
                        {"     "}
                        <span className="text-[#616161] font-normal ml-1.5">
                          {"   "} {data?.class}
                        </span>
                      </div>
                      <div className="flex justify-center font-primary text-lg">
                        <h1 className="text-[#444F55] font-semibold">
                          Subject-
                        </h1>
                        {"     "}
                        <span className="text-[#616161] font-normal ml-1.5">
                          {"   "} {data?.subject}
                        </span>
                      </div>
                      <div className="flex justify-center font-primary text-lg">
                        <h1 className="text-[#444F55] font-semibold">Topic-</h1>
                        {"     "}
                        <span className="text-[#616161] font-normal ml-1.5">
                          {"   "} {data?.topic}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>

            <div className="swiper-button-next hide"></div>
          </div>
        </div>
      </div>

      <div className="bg-white container mx-auto rounded-[32px] shadow-[0px_21px_38px_0px_rgba(0,0,0,0.17)] translate-y-[-85px] pt-6 pb-8">
        <div className="flex justify-around ">
          <div className="text-[#A279E6]">
            <h1 className="text-[60px] font-semibold font-primary -mb-3">
              100+
            </h1>
            <p className="text-[22px] font-medium font-primary">
              Registered Tutor{" "}
            </p>
          </div>

          <div className="text-[#954612]">
            <h1 className="text-[60px] font-semibold font-primary -mb-3">
              400+
            </h1>
            <p className="text-[22px] font-medium font-primary">
              Registered Student{" "}
            </p>
          </div>

          <div className="text-[#01B489]">
            <h1 className="text-[60px] font-semibold font-primary -mb-3">
              300+
            </h1>
            <p className="text-[22px] font-medium font-primary">
              Completed Session{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverHeilo;
