
import Heading from "./Heading";

const Hero = () => {
  return (
    <div className="bg-primary mx-[30px] h-[620px]  flex flex-col items-center">
      <Heading
        headingText="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
        headingTagName="h1"
      />
      <button className="btn h-auto mt-8 bg-white text-primary rounded-full px-8 py-4 text-base md:text-lg lg:text-xl font-bold text-center">Shop Now</button>
    </div>
  );
};

export default Hero;
