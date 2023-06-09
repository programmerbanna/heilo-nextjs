import DiscoverHeilo from "./partials/DiscoverHeilo/DiscoverHeilo";
import FeaturedTutors from "./partials/FeaturedTutors/FeaturedTutors";
import JoinCommunity from "./partials/JoinCommunity";
import Testimonials from "./partials/Testimonials/Testimonials";
import WhyChosseHeilo from "./partials/WhyChosseHeilo";
import Hero from "./partials/hero";

const home = () => {
  return (
    <div className="">
      <Hero />
      <WhyChosseHeilo />
      <DiscoverHeilo />
      <FeaturedTutors />
      <Testimonials />
      <JoinCommunity />
    </div>
  );
};

export default home;
