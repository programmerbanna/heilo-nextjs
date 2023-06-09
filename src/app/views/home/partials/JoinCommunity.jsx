const JoinCommunity = () => {
  return (
    <div className="footerBg mt-[100px]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-white text-[30px] font-semibold tracking-[1.5px] mb-8">
          Join Our Community{" "}
        </h1>
        <p className="text-white text-base font-normal tracking-[0.8px] mb-12">
          Get hooked up new ideas and information to help you live better life{" "}
        </p>

        <div class="relative ">
          <input
            type="email"
            id="default-search"
            class="block w-full md:w-[665px] h-[60px] pl-[50px] md:pl-[20px] text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-0 bottom-0 bg-[#356453] w-[132px] md:w-[182px] h-[60px] rounded-[0px_40px_40px_44px] font-semibold text-xl px-4 py-2 "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
