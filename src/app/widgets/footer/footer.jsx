"use client";

import FB from "@/app/shared/components/icons/FB";
import Insta from "@/app/shared/components/icons/Insta";
import Linkedin from "@/app/shared/components/icons/Linkedin";
import Twitter from "@/app/shared/components/icons/Twitter";
import Youtube from "@/app/shared/components/icons/Youtube";
import Image from "next/image";
import inboxImg from "../../../assets/img/inbox.svg";
import locationImg from "../../../assets/img/location.svg";
import logo from "../../../assets/img/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#01B489] w-full md:h-[371px]">
      <div className="bg-white mx-11 px-11 h-[326px] flex md:flex-row flex-col md:justify-between 2xl:justify-around pt-[79px] pb-[55px]">
        <div className=" ">
          <h1 className="text-[#444F55] text-2xl font-normal tracking-[1.1px]">
            Contact{" "}
          </h1>
          <div className="flex my-4 items-center space-x-5 ">
            <Image src={locationImg} alt="location" />
            <h3 className="text-[#7D7C7C] font-normal text-base w-[290px]">
              474/C, Taltola, Khilgaon , Dhaka-1219 Bangldesh
            </h3>
          </div>

          <div className="flex items-center space-x-5">
            <Image src={inboxImg} alt="inbox" />
            <h3 className="text-[#7D7C7C] font-normal text-base">
              help.center@heilo.com
            </h3>
          </div>
        </div>
        <div className="bg-[#CACACA] md:h-[181px] w-1"></div>

        <div className=" ">
          <div className="w-full flex justify-center">
            <Image src={logo} alt="logo" className="" />
          </div>
          <p className="mt-5 text-[#7D7C7C] font-normal tracking-[0.8px] md:w-[460px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            aenean proin tortor, facilisi facilisis malesuada ut nunc lacus.
          </p>
        </div>
        <div className="bg-[#CACACA] md:h-[181px] w-1"></div>

        <div className="">
          <h1 className="text-[#444F55] text-2xl font-normal tracking-[1.1px]">
            Social Presence
          </h1>
          <div className="flex gap-7 mt-12">
            <FB />
            <Insta />
            <Linkedin />
            <Youtube />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
