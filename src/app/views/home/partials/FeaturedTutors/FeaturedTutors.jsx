"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

// import required modules
import { featuredTutors } from "@/app/shared/configs";
import Image from "next/image";
import { useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";

import starIcon from "../../../../../assets/img/starIcon.svg";
import verfiedUser from "../../../../../assets/img/verified-user.svg";

const FeaturedTutors = () => {
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
    <div className="container mx-auto pt-14 pb-[85px]">
      <h1 className="text-center font-semibold text-[40px]">Featured Tutors</h1>
      <div className="flex items-center justify-between container mx-auto px-20 relative mt-[75px]">
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
          className="mySwiper relative px-20"
          modules={[Navigation, Pagination]}
          breakpoints={{
            // Configure breakpoints here
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
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
          {featuredTutors?.map((data, index) => (
            <>
              <SwiperSlide className="w-[310px] h-[346px]" key={index}>
                <div className="w-[310px] h-[346px] rounded-[25px] shadow-[0px_0px_20px_5px_rgba(1,180,137,0.25)] bg-white pt-[49px] pb-[37px] px-[30px] text-center ">
                  <div className="flex items-start justify-center translate-x-5 mb-7">
                    <Image
                      src={data?.tutorImage}
                      alt={data?.tutorName}
                      width={100}
                      height={100}
                    />

                    <div className="bg-[rgba(196,196,196,0.50)] rounded-[8px] flex w-[55px] px-1 -translate-x-8">
                      <Image
                        src={starIcon}
                        alt="star icon"
                        width={15}
                        height={15}
                      />
                      <h3 className="text-base font-semibold ml-1">
                        {data?.tutorRatings}
                      </h3>
                    </div>
                  </div>
                  <h1 className="text-[#444F55] font-semibold text-lg">
                    {data?.tutorName}
                  </h1>
                  <h1 className="text-[#7D7C7C] text-[13px] font-normal">
                    {data?.tutorUniversity}
                  </h1>
                  <div className="flex items-center gap-2 mt-4 mb-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M4.50001 10.2507L4.50001 10.2506C4.50243 8.19575 5.31979 6.22576 6.77278 4.77277C8.22563 3.31992 10.1954 2.50258 12.25 2.5C14.3046 2.50258 16.2744 3.31992 17.7272 4.77277C19.1802 6.22576 19.9976 8.19575 20 10.2506V10.2507C20.0024 11.9279 19.4546 13.5596 18.4405 14.8954L18.3905 14.9613L18.3901 14.9626L18.3245 15.0481C18.2944 15.0873 18.2636 15.1273 18.2384 15.1598L18.2066 15.2007C18.1999 15.2092 18.1963 15.2137 18.195 15.2153C18.1944 15.216 18.1943 15.2162 18.1946 15.2159L12.25 22.2269L6.30512 15.2156L6.30513 15.2156L6.30292 15.2131C6.30306 15.2132 6.30266 15.2127 6.3017 15.2115C6.29791 15.2068 6.28536 15.191 6.26212 15.1611C6.23691 15.1287 6.20614 15.0887 6.17599 15.0494C6.12688 14.9853 6.08181 14.926 6.06704 14.9066C6.06346 14.9019 6.06167 14.8995 6.06201 14.9L5.66201 15.2L6.06025 14.8977C5.04566 13.5612 4.49755 11.9287 4.50001 10.2507ZM15.75 10.2506V10.25C15.75 9.55777 15.5447 8.88108 15.1602 8.3055C14.7756 7.72993 14.2289 7.28133 13.5894 7.01642C12.9499 6.75151 12.2461 6.6822 11.5672 6.81725C10.8883 6.9523 10.2646 7.28564 9.77513 7.77513C9.28565 8.26461 8.95231 8.88825 8.81726 9.56718C8.68221 10.2461 8.75152 10.9499 9.01643 11.5894C9.28134 12.2289 9.72994 12.7756 10.3055 13.1601C10.8811 13.5447 11.5578 13.75 12.25 13.75V13.25L12.2506 13.75C13.1784 13.7488 14.0678 13.3798 14.7238 12.7238C15.3798 12.0678 15.7488 11.1784 15.75 10.2506Z"
                        stroke="#747474"
                      />
                    </svg>
                    <h1 className="text-[#7D7C7C] text-[13px] font-normal">
                      {data?.tutorAddress}
                    </h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image
                      src={verfiedUser}
                      alt="verfiedUser"
                      width={20}
                      height={20}
                    />
                    <h1 className="text-[#7D7C7C] text-[13px] font-normal">
                      {data?.tutoringSubject}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>

        <div className="swiper-button-next hide"></div>
      </div>
    </div>
  );
};

export default FeaturedTutors;
