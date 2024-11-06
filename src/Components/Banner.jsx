import { useState } from "react";
import BannerImg from "../assets/images/banner.jpg";
const Banner = () => {
  const [isLoaded,setIsLoaded] = useState(false);
  const handleLoadImg = () =>{
    setIsLoaded(true);
  }
  return (
    <div className={`${isLoaded ? 'p-4 md:p-6 bg-white/30 border-2 border-white' : 'p-0'} rounded-3xl lg:-mt-12 xl:-mt-[160px] inline-block 2xl:-mt-[180px]`}>
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
