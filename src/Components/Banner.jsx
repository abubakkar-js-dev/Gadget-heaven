import BannerImg from "../assets/images/banner.jpg";
const Banner = () => {
  return (
    <div className="p-6 rounded-3xl bg-white/30 border-2 border-white  -mt-[130px] md:-mt-[160px] xl:-mt-[220px] inline-block">
      <div className="">
        <img
          className="h-[563px] rounded-3xl"
          src={BannerImg}
          alt="Banner images"
        />
      </div>
    </div>
  );
};

export default Banner;
