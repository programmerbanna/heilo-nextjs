import Image from "next/image";
import heroRightImage from "../../../../assets/img/heroImage-right.svg";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="w-full flex justify-end">
        <div className="herobg md:w-[937px] md:h-[831px] h-[1031px]"></div>
      </div>

      <div className="absolute md:top-[160px] top-[120px] w-full">
        <div className="mx-auto md:container 2xl:max-w-[1536px] 2xl:w-full flex items-center justify-between flex-wrap lg:flex-nowrap px-9 lg:px-10">
          <div className="">
            <h1 className="text-[#3E3E3E] text-[80px] md:text-[110px] font-primary font-semibold -mb-5">
              Learn
            </h1>
            <p className="text-[#01B489] text-[36px] md:text-[40px] font-primary font-normal mb-7">
              Anytime and Anywhere
            </p>
            <p className="text-[#606060] text-lg font-primary font-light lg:w-[540px]">
              Heilo is a revolutionary initiative for Distance Learning in
              Bangladesh! You can hire highly compatible teachers on hourly
              basis in this platform. This platform is secured and quality of
              teacher is Heilo’s commitment.
            </p>

            <button className="bg-[#01B489] rounded-[7px] px-9 py-2.5 text-white text-lg font-primary font-semibold capitalize mt-[50px] md:mt-[90px]">
              Learn More
            </button>
          </div>
          <div className="md:m-0 mt-16">
            <Image src={heroRightImage} alt="heroRightImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
