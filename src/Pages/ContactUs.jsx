import { Helmet } from "react-helmet-async";
import Heading from "../Components/Heading";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "../Components/ContactForm";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";


const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact us || Gadget Heaven</title>
      </Helmet>
      <div className="bg-primary mb-8 md:mb-10 lg:mb-[48px]">
        <Heading headingText="Contact Us" headingTagName="h2" />
      </div>
      <div className="flex flex-col-reverse gap-8 md:gap-6 lg:gap-7 lg:flex-row p-4 container">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col gap-12">
          <div className="flex-grow space-y-8 md:space-y-12">
            <div className="flex gap-3">
              <div className="p-3 border rounded-xl self-start">
                <IoChatbubblesOutline className="w-6 h-6 font-bold" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-black">
                  Chat to Us
                </h3>
                <p className="text-base text-gray-600">
                Message us for quick support.
                </p>
                <h5 className="text-base font-semibold">
                  gadget321@gadget-heaven.com
                </h5>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-3 border rounded-xl self-start">
                <SlLocationPin className="w-6 h-6 font-bold" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-black">
                  Visit Us
                </h3>
                <p className="text-base text-gray-600">
                Explore gadgets in-store.
                </p>
                <h5 className="text-base font-semibold">
                  321 Gadget Heaven, Gulshan-2
                  Dhaka 1212, Bangladesh
                </h5>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-3 border rounded-xl self-start">
                <FiPhoneCall className="w-6 h-6 font-bold" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-black">
                  Call Us
                </h3>
                <p className="text-base text-gray-600">
                Get help over the phone.
                </p>
                <h5 className="text-base font-semibold">
                  +880 174-267232
                </h5>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className='p-3 border rounded-lg self-start flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
              <a href="https://www.facebook.com">
                <FaFacebook className="w-5 h-5 md:w-5 md:h-5" />
              </a>
            </div>
            <div className='p-3 border rounded-lg self-start flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
              <a href="https://www.x.com">
                <FaSquareXTwitter className="w-5 h-5 md:w-5 md:h-5" />
              </a>
            </div>
            <div className='p-3 border rounded-lg self-start flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
              <a href="https://www.linkedin.com">
                <FaLinkedin className="w-5 h-5 md:w-5 md:h-5" />
              </a>
            </div>
            <div className='p-3 border rounded-lg self-start flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
              <a href="https://www.instagram.com">
                <FaSquareInstagram className="w-5 h-5 md:w-5 md:h-5" />
              </a>
            </div>
            <div className='p-3 border rounded-lg self-start flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
              <a href="https://www.youtube.com">
                <FaYoutube className="w-5 h-5 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      {/*  Contact form here */}
      <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
