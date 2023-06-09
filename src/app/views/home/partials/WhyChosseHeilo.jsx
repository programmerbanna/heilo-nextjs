import Image from "next/image";
import clock from "../../../../assets/img/clock.svg";
import demandTution from "../../../../assets/img/demandTution.svg";
import findTopic from "../../../../assets/img/findTopic.svg";
import personalizedService from "../../../../assets/img/personalizedService.svg";

const WhyChosseHeilo = () => {
  return (
    <div className="w-full py-[110px]">
      <div className="mx-auto container flex md:flex-row flex-col px-9 lg:px-10 items-center justify-between">
        <div className="">
          <h1 className="text-black text-[40px] font-primary font-semibold  mb-6 ">
            {" "}
            Why Choose Heilo?
          </h1>
          <p className="md:w-[575px] text-[#606060] text-lg font-thin font-primary tracking-wide leading-[30px]">
            Heilo is a revolutionary initiative for Distance Learning in
            Bangladesh! You can hire highly compatible teachers on hourly basis
            in this platform. This platform is secured and quality of teacher is
            Heilo’s commitment.
          </p>
        </div>
        <div className="flex md:justify-end justify-center md:m-0 mt-10 gap-y-[35px] gap-x-[70px] flex-wrap">
          <div className="flex items-center px-[30px] py-5 shadow-[0px_4px_18px_0px_rgba(9,116,188,0.19)] space-x-6 rounded-[12px]">
            <Image src={clock} alt="clock" />
            <h1 className="text-black text-lg font-normal pr-5 w-[146px]">
              Hourly Basis Tuition
            </h1>
          </div>

          <div className="flex items-center px-[30px] py-5 shadow-[0px_4px_18px_0px_rgba(9,116,188,0.19)] space-x-6 rounded-[12px]">
            <Image src={findTopic} alt="findTopic" />
            <h1 className="text-black text-lg font-normal pr-5 w-[146px]">
              Find Topic Based Tutor
            </h1>
          </div>

          <div className="flex items-center px-[30px] py-5 shadow-[0px_4px_18px_0px_rgba(9,116,188,0.19)] space-x-6 rounded-[12px]">
            <Image src={demandTution} alt="demandTution" />
            <h1 className="text-black text-lg font-normal pr-5 w-[146px]">
              On demand Tuition
            </h1>
          </div>

          <div className="flex items-center px-[30px] py-5 shadow-[0px_4px_18px_0px_rgba(9,116,188,0.19)] space-x-6 rounded-[12px]">
            <Image src={personalizedService} alt="personalizedService" />
            <h1 className="text-black text-lg font-normal pr-5 w-[146px]">
              Personalized service (1 to 1)
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChosseHeilo;
