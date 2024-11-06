import { useState } from "react";
import BannerImg from "../assets/images/banner.jpg";
const Banner = () => {
  const [isLoaded,setIsLoaded] = useState(false);
  const handleLoadImg = () =>{
    setIsLoaded(true);
  }
  return (
    <div className={`${isLoaded ? 'p-6 bg-white/30 border-2 border-white' : 'p-0'} rounded-3xl   -mt-[130px] md:-mt-[160px] xl:-mt-[220px] inline-block`}>
      <div className="">
        <img
          className="h-[563px] rounded-3xl"
          src={BannerImg}
          alt="Banner images"
          onLoad={handleLoadImg}
        />
      </div>
    </div>
  );
};

export default Banner;
