"use client";

// import { Burger } from "@mantine/core";
import { Burger } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../assets/img/logo.svg";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const styles = {
    burger: {
      "&::before, &::after, & div": {
        background: "linear-gradient(252.26deg, #771228 -0.27%, #5B1BBD 100%)",
      },
    },
  };

  return (
    <div
      className={`absolute  top-0 w-full py-5 z-50  ${
        opened ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="mx-auto container flex items-center justify-between flex-wrap lg:flex-nowrap px-9 lg:px-10">
        <div className="flex items-center justify-between lg:w-auto w-full lg:border-b-0 ">
          <Link href="/">
            <div className="flex items-center flex-shrink-0  cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
          </Link>

          <div className="block lg:hidden ">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              styles={styles}
            />
          </div>
        </div>

        <div className="text-gray-500 order-3 w-full lg:w-auto lg:order-2">
          <div
            className={
              opened
                ? "menu w-full lg:block flex-grow lg:items-center lg:w-auto lg:px-3 px-0 lg:relative absolute lg:top-0 lg:left-0 top-[110px] -left-[0] z-50 bg-white pb-5 transition duration-[0.4s] ease-in-out"
                : " menu w-full lg:block flex-grow lg:items-center lg:w-auto lg:px-3 px-6 lg:relative absolute lg:top-0 lg:left-0 top-[80px] -left-[110%] transition duration-[0.4s] ease-in-out"
            }
          >
            <ul className="flex justify-between lg:space-x-[40px] 2lg:space-x-12 items-start   lg:flex-row flex-col ">
              <li
                className="text-[#424242] hover:text-[#01B489]
                 font-primary text-lg font-medium capitalize cursor-pointer transition ease-in-out duration-300 hover:border-b-[5px] border-b-[5px] border-transparent hover:border-[#01B489] w-full  py-1 lg:w-auto"
              >
                Home
              </li>
              <li
                className="text-[#424242] hover:text-[#01B489]
                 font-primary text-lg font-medium capitalize cursor-pointer transition ease-in-out duration-300 hover:border-b-[5px] border-b-[5px] border-transparent hover:border-[#01B489] w-full  py-1 lg:w-auto"
              >
                About Us
              </li>
              <li
                className="text-[#424242] hover:text-[#01B489]
                 font-primary text-lg font-medium capitalize cursor-pointer transition ease-in-out duration-300 hover:border-b-[5px] border-b-[5px] border-transparent hover:border-[#01B489] w-full  py-1 lg:w-auto"
              >
                Contact
              </li>
            </ul>
            <div className="order-2 lg:order-3 flex lg:hidden mx-9 my-[50px] items-center">
              <button className=" font-primary text-lg bg-[linear-gradient(252.26deg,#771228_-0.27%,#5B1BBD_100%)] px-[30px] py-3 rounded-[8px] text-white	">
                LOG IN
              </button>
              <button className=" font-primary text-lg bg-[linear-gradient(252.26deg,#771228_-0.27%,#5B1BBD_100%)] px-[30px] py-3 rounded-[8px] text-white	">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
        <div className="order-2 lg:order-3 lg:flex hidden items-center">
          <h1 className=" font-primary text-lg font-bold px-[30px] py-3 rounded-[8px] text-white cursor-pointer	">
            LOG IN
          </h1>
          <button className=" font-primary text-lg font-bold bg-white px-[30px] py-3 rounded-[8px] text-[#01B489]	">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
